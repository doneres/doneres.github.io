import { lazy, Suspense } from "react";
import Reveal from "../shared/Reveal";
import TiltCard from "../shared/TiltCard";
import type { PillarVariant } from "../shared/three/MiniScene3D";

const MiniScene3D = lazy(() => import("../shared/three/MiniScene3D"));

const pillars: { variant: PillarVariant; title: string; description: string }[] = [
  {
    variant: "dev",
    title: "Desenvolvimento",
    description:
      "Full-stack com foco em backend: Java com Spring Boot, Node.js com Express e Go no dia a dia. Também transito por Python — incluindo machine learning e deep learning — e sigo confortável no frontend (React/TypeScript) quando o projeto pede.",
  },
  {
    variant: "infra",
    title: "Infraestrutura",
    description:
      "Docker e pipelines de CI/CD para automatizar entrega, administração de servidores Linux e experiência prática com cloud (AWS, Azure, GCP) — cuido do código e do ambiente onde ele roda.",
  },
  {
    variant: "ensino",
    title: "Ensino",
    description:
      "Professor de programação na CTRLPLAY, ensinando desde desenvolvimento de jogos até web (frontend) e backend — experiência que me treinou a quebrar problemas complexos em passos simples.",
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative py-32 px-6 md:px-16 max-w-6xl mx-auto"
    >
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs text-navy-light tracking-widest uppercase mb-4">
          <span className="text-text-muted">02</span>
          experiência
        </div>
        <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-6">
          três frentes, um jeito de pensar
        </h2>
        <p className="text-text-muted text-lg font-light leading-relaxed max-w-2xl mb-16">
          Não me encaixo só em "desenvolvedor". Construo sistemas, cuido de
          onde eles rodam e já ensinei outras pessoas a fazer o mesmo.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.1}>
            <TiltCard className="glass rounded-2xl p-8 h-full hover:border-navy-light/40 transition-colors duration-300">
              <div className="w-20 h-20 -ml-2 -mt-2 mb-4">
                <Suspense fallback={null}>
                  <MiniScene3D variant={pillar.variant} />
                </Suspense>
              </div>
              <h3 className="font-display font-medium text-xl text-text-principal mb-3">
                {pillar.title}
              </h3>
              <p className="text-text-muted text-sm font-light leading-relaxed">
                {pillar.description}
              </p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
