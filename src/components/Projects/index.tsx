import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../shared/Reveal";
import TiltCard from "../shared/TiltCard";
import { GithubIcon } from "../shared/BrandIcons";

interface Project {
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  live?: string;
  highlight?: boolean;
}

const projects: Project[] = [
  {
    name: "Sistema_Livraria",
    description:
      "Sistema de gerenciamento de empréstimos de livros em biblioteca.",
    longDescription:
      "Desafio proposto pela Rocketseat. Desenvolvido em Java, com listagem de livros disponíveis e fluxo de empréstimo, aplicando conceitos sólidos de orientação a objetos.",
    tags: ["Java", "OOP", "Rocketseat"],
    github: "https://github.com/doneres/Sistema_Livraria",
    highlight: true,
  },
  {
    name: "doneres.github.io",
    description: "Este portfólio — construído do zero com React e TypeScript.",
    longDescription:
      "Portfólio pessoal, redesenhado com identidade visual própria, animações de scroll e foco em performance. Deploy automático via GitHub Actions.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/doneres/doneres.github.io",
    live: "https://doneres.github.io",
    highlight: true,
  },
  {
    name: "GreenFlare",
    description: "Site desenvolvido em HTML com deploy via GitHub Pages.",
    longDescription:
      "Projeto frontend construído do zero em HTML puro — um dos primeiros projetos públicos, marcando o início da transição de carreira para desenvolvimento.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    github: "https://github.com/doneres/GreenFlare",
    highlight: true,
  },
  {
    name: "atividades_propostas",
    description: "Atividades de Problem-Based Learning em Java 21.",
    longDescription:
      "Repositório com atividades de PBL desenvolvidas em Java 21 para fixação de conceitos por meio da resolução de problemas práticos.",
    tags: ["Java 21", "PBL", "Algoritmos"],
    github: "https://github.com/doneres/atividades_propostas",
  },
  {
    name: "estrutura-de-dados",
    description: "Implementações de estruturas de dados em Java.",
    longDescription:
      "Estudos com implementações práticas de estruturas de dados fundamentais em Java, parte da formação em ADS na PUC Goiás.",
    tags: ["Java", "Data Structures", "PUC Goiás"],
    github: "https://github.com/doneres/estrutura-de-dados",
  },
];

function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <TiltCard
      className={`group relative glass rounded-2xl overflow-hidden transition-colors duration-300 hover:border-navy-light/40 ${
        compact ? "p-6" : "p-8"
      }`}
    >
      {/* Glow no hover */}
      <div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(52,255,179,0.12), rgba(61,110,165,0.18))",
        }}
      />

      <div className="flex justify-between items-start mb-4">
        <span
          className={`font-display font-medium text-text-principal ${
            compact ? "text-base" : "text-lg"
          }`}
        >
          {project.name}
        </span>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`código de ${project.name} no GitHub`}
              className="text-text-muted p-2 rounded-full hover:text-navy-light hover:bg-white/5 transition-all duration-200"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`ver ${project.name} online`}
              className="text-text-muted p-2 rounded-full hover:text-navy-light hover:bg-white/5 transition-all duration-200"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-text-muted text-sm font-light leading-relaxed mb-2">
        {project.description}
      </p>

      {!compact && (
        <p className="text-text-muted text-sm font-light leading-relaxed mb-6 opacity-70">
          {project.longDescription}
        </p>
      )}

      <div className={`flex flex-wrap gap-2 ${compact ? "mt-4" : ""}`}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-navy-light border border-navy-light/30 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  const highlighted = projects.filter((p) => p.highlight);
  const others = projects.filter((p) => !p.highlight);

  return (
    <section
      id="projetos"
      className="relative py-32 px-6 md:px-16 max-w-6xl mx-auto"
    >
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs text-navy-light tracking-widest uppercase mb-4">
          <span className="text-text-muted">04</span>
          projetos
        </div>
        <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-16">
          o que construí
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {highlighted.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <Reveal className="flex items-center gap-4 my-10">
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
          outros repositórios
        </span>
        <div className="flex-1 h-px bg-border" />
      </Reveal>

      <div className="grid md:grid-cols-2 gap-4">
        {others.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} compact />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
