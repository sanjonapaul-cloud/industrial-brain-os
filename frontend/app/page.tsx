import { LandingNavbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { ArchitecturePreview } from "@/components/landing/architecture-preview";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <Hero />
      <Features />
      <ArchitecturePreview />
      <CTA />
      <Footer />
    </>
  );
}
