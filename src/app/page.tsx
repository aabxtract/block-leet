import Link from "next/link";
import { sections, userProgress } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Check, Lock, Star } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const completedCount = userProgress.completedProblems.length;
  const totalProblems = sections.flatMap(s => s.problems).length;
  const firstUncompletedProblem = sections.flatMap(s => s.problems).find(p => !userProgress.completedProblems.includes(p.id));

  return (
    <div className="container max-w-4xl mx-auto py-8 md:py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Your Learning Path
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Complete challenges to unlock new sections and level up your Web3 skills.
        </p>
        <div className="mt-6 text-xl font-bold text-primary">
          {completedCount} / {totalProblems} Challenges Completed
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-16">
        {sections.map((section, sectionIndex) => {
          const isSectionUnlocked = section.problems.some(p => userProgress.completedProblems.includes(p.id) || p.id === firstUncompletedProblem?.id);
          
          return (
            <div key={section.id} className="w-full flex flex-col items-center gap-8">
              <Card className={cn("w-full max-w-md shadow-lg transition-all duration-300", !isSectionUnlocked && "opacity-50")}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-accent">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Card>

              <div className="relative w-full flex flex-col items-center gap-12">
                 {/* Vertical Connector for the section */}
                <div className="path-connector" style={{ height: `${(section.problems.length - 1) * 8}rem`, top: '4rem' }} />

                {section.problems.map((problem, problemIndex) => {
                  const isCompleted = userProgress.completedProblems.includes(problem.id);
                  const isUnlocked = isCompleted || problem.id === firstUncompletedProblem?.id;
                  
                  const statusIcon = isCompleted ? <Check className="w-8 h-8 text-primary-foreground" /> : isUnlocked ? <Star className="w-8 h-8 text-primary-foreground" /> : <Lock className="w-8 h-8 text-primary-foreground" />;
                  const statusClass = isCompleted ? "bg-primary" : isUnlocked ? "bg-accent" : "bg-muted-foreground";
                  const pulseClass = isUnlocked && !isCompleted ? "animate-pulse" : "";

                  return (
                    <div key={problem.id} className="relative z-10">
                      <Link href={isUnlocked ? `/problems/${problem.slug}` : "#"} className={cn(!isUnlocked && "pointer-events-none")}>
                        <div 
                          className={cn(
                            "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl", 
                            statusClass, 
                            pulseClass
                          )}
                          aria-label={problem.title}
                        >
                          {statusIcon}
                        </div>
                      </Link>
                      <div className="absolute top-1/2 -translate-y-1/2 left-full ml-6 w-48 text-left">
                        <p className="font-bold text-lg">{problem.title}</p>
                        <p className="text-sm text-muted-foreground">{problem.points} XP</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
