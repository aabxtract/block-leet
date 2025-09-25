import { notFound } from "next/navigation";
import { sections } from "@/lib/mock-data";
import { ProblemClientPage } from "./problem-client-page";

export default function ProblemPage({ params }: { params: { slug: string } }) {
  const problem = sections
    .flatMap((section) => section.problems)
    .find((p) => p.slug === params.slug);

  if (!problem) {
    notFound();
  }

  return <ProblemClientPage problem={problem} />;
}
