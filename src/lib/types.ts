export type Problem = {
    id: string;
    slug: string;
    title: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    points: number;
    starterCode: string;
    section: string;
};
  
export type UserProgress = {
    completedProblems: string[];
};
  
export type Section = {
    id: string;
    title: string;
    description: string;
    problems: Problem[];
};
  
export type User = {
    name: string;
    level: number;
    xp: number;
    xpToNextLevel: number;
    streak: number;
};
