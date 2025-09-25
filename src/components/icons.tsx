import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-6 h-6", className)}
    {...props}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="M8 17l4 4 4-4" />
  </svg>
);

export const BlockleetLogo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-8 h-8", className)}
      {...props}
    >
      <path d="M6 3H18V6H6V3Z" fill="currentColor" />
      <path d="M6 9H14V12H6V9Z" fill="currentColor" />
      <path d="M6 15H18V18H6V15Z" fill="currentColor" />
      <path d="M6 21H14V24H6V21Z" fill="currentColor" />
    </svg>
  );
  
