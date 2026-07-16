import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingNavbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-xl font-bold">Industrial Brain OS</h1>
          <p className="text-xs text-muted-foreground">
            Unified Intelligence Layer
          </p>
        </div>

        <Link href="/dashboard">
           <Button size="lg">
              Launch Dashboard
           </Button>
       </Link>
      </div>
    </header>
  );
}