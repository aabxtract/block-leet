'use client';

import { useState, useTransition } from "react";
import type { Problem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { handleGenerateTestCases } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Bot, Code, Loader2 } from "lucide-react";

export function ProblemClientPage({ problem }: { problem: Problem }) {
  const { toast } = useToast();
  const [code, setCode] = useState(problem.starterCode);
  const [testCases, setTestCases] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleGenerate = () => {
    startTransition(async () => {
      setTestCases("");
      const result = await handleGenerateTestCases({ code, prompt: problem.description });
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Generation Failed",
          description: result.error,
        });
      } else {
        setTestCases(result.testCases);
        toast({
            title: "Success!",
            description: "Test cases have been generated.",
        });
      }
    });
  };

  const difficultyColor = {
    Easy: "bg-green-500",
    Medium: "bg-yellow-500",
    Hard: "bg-red-500",
  };

  return (
    <div className="container mx-auto max-w-7xl py-8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <Card className="h-full">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-3xl font-extrabold mb-2">{problem.title}</CardTitle>
                <CardDescription className="text-lg">{problem.section}</CardDescription>
              </div>
              <div className="flex flex-col items-end gap-2">
                 <Badge className={cn("text-primary-foreground", difficultyColor[problem.difficulty])}>{problem.difficulty}</Badge>
                 <Badge variant="secondary">{problem.points} XP</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
          </CardContent>
        </Card>

        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="code"><Code className="mr-2 h-4 w-4"/> Solution</TabsTrigger>
            <TabsTrigger value="tests"><Bot className="mr-2 h-4 w-4"/> Test Cases</TabsTrigger>
          </TabsList>
          <TabsContent value="code">
            <Card>
              <CardContent className="p-0">
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="// Your Solidity code here..."
                  className="w-full h-96 min-h-[400px] font-mono text-sm bg-card border-0 rounded-md p-4 focus-visible:ring-1 focus-visible:ring-primary"
                />
              </CardContent>
              <CardFooter className="p-4">
                 <Button className="w-full">Submit Solution</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="tests">
            <Card>
              <CardHeader>
                <CardTitle>Generate Test Cases</CardTitle>
                <CardDescription>Use AI to generate test cases based on your code and the problem description.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleGenerate} disabled={isPending} className="w-full">
                  {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
                  {isPending ? "Generating..." : "Generate with AI"}
                </Button>
                {testCases && (
                    <div className="mt-4 p-4 bg-muted rounded-md">
                        <pre className="whitespace-pre-wrap text-sm text-foreground font-mono">{testCases}</pre>
                    </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
