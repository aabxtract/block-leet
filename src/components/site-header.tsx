import Link from "next/link";
import { BlockleetLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { user } from "@/lib/mock-data";
import { Flame, Gem, Wallet } from "lucide-react";

export function SiteHeader() {
  const progressPercentage = (user.xp / user.xpToNextLevel) * 100;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BlockleetLogo className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg sm:inline-block">
              Blockleet
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center" title={`${user.streak} day streak`}>
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="font-bold text-orange-500">{user.streak}</span>
              </div>
              <div className="flex items-center" title={`${user.xp} XP`}>
                <Gem className="h-5 w-5 text-blue-500" />
                <span className="font-bold text-blue-500">{user.xp}</span>
              </div>
            </div>
            <div className="w-40">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold">Level {user.level}</span>
                <span className="text-xs text-muted-foreground">{user.xp}/{user.xpToNextLevel}</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </div>
          <Button>
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}
