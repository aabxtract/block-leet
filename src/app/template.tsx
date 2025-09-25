'use client';

// This component wraps page content and applies a consistent fade-in animation.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="fade-in">{children}</div>;
}
