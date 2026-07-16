import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Industrial Brain OS
      </h1>

      <p className="mt-6 text-xl text-muted-foreground">
        The Unified Intelligence Layer for Industrial Operations
      </p>

      <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
        Transform fragmented industrial documents into actionable intelligence
        using AI-powered document understanding, knowledge graphs, predictive
        maintenance, safety monitoring, and compliance automation.
      </p>

      <div className="mt-10">
        <Link href="/dashboard">
             <Button size="lg">
                 Launch Dashboard
             </Button>
        </Link>
      </div>
    </section>
  );
}