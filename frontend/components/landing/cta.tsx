import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-center">
      <h2 className="text-4xl font-bold">
        Ready to Transform Industrial Intelligence?
      </h2>

      <p className="mt-4 text-muted-foreground">
        Launch Industrial Brain OS and explore AI-powered industrial operations.
      </p>

      <Link href="/dashboard">
        <Button size="lg">
           Launch Dashboard
        </Button>
      </Link>
    </section>
  );
}