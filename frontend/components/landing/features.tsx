import {
  Brain,
  FileSearch,
  Network,
  Wrench,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Document Intelligence",
    description: "Extract knowledge from industrial documents using AI.",
    icon: FileSearch,
  },
  {
    title: "Industrial Copilot",
    description: "Ask engineering questions with AI-powered assistance.",
    icon: Brain,
  },
  {
    title: "Knowledge Graph",
    description: "Visualize relationships between assets, documents and processes.",
    icon: Network,
  },
  {
    title: "Maintenance Intelligence",
    description: "Monitor equipment health and maintenance activities.",
    icon: Wrench,
  },
  {
    title: "Safety & Compliance",
    description: "Detect risks and improve regulatory compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Executive Analytics",
    description: "Enterprise dashboards with actionable operational insights.",
    icon: BarChart3,
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Core Platform Modules</h2>
        <p className="mt-3 text-muted-foreground">
          One unified platform for industrial intelligence.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-xl border p-6 transition hover:shadow-lg"
            >
              <Icon className="mb-4 h-8 w-8" />

              <h3 className="text-lg font-semibold">{feature.title}</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}