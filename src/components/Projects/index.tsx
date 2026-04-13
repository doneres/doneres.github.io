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
    name: "GreenFlare",
    description: "Site desenvolvido em HTML com deploy via GitHub Pages.",
    longDescription:
      "Projeto frontend construído do zero em HTML puro. Foi um dos primeiros projetos públicos, marcando o início da transição de carreira para desenvolvimento.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    github: "https://github.com/doneres/GreenFlare",
    highlight: true,
  },
  {
    name: "Sistema_Livraria",
    description:
      "Sistema de gerenciamento de empréstimos de livros em biblioteca.",
    longDescription:
      "Desafio proposto pela Rocketseat. Sistema desenvolvido em Java com foco em listagem de livros disponíveis e funcionalidade de empréstimo, aplicando conceitos de orientação a objetos.",
    tags: ["Java", "OOP", "Rocketseat"],
    github: "https://github.com/doneres/Sistema_Livraria",
    highlight: true,
  },
  {
    name: "doneres.github.io",
    description: "Este portfólio — construído do zero com React e TypeScript.",
    longDescription:
      "Portfólio pessoal reconstruído do zero com foco em identidade visual única, estilo retro-tech e performance. Deploy automático via GitHub Actions.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    github: "https://github.com/doneres/doneres.github.io",
    live: "https://doneres.github.io",
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
    <div
      className={`group relative bg-surface border border-border hover:-translate-y-1 hover:border-green/30 transition-all duration-300 overflow-hidden ${
        compact ? "p-6" : "p-8"
      }`}
    >
      {/* Barra lateral verde no hover */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-green scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <span
          className={`font-mono font-medium text-text-principal ${compact ? "text-sm" : "text-base"}`}
        >
          {project.name}
        </span>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted border border-border px-2 py-1 hover:text-cyan hover:border-cyan transition-all duration-200"
            >
              github
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted border border-border px-2 py-1 hover:text-cyan hover:border-cyan transition-all duration-200"
            >
              live
            </a>
          )}
        </div>
      </div>

      {/* Descrição curta */}
      <p className="text-text-muted text-xs font-light leading-relaxed mb-2">
        {project.description}
      </p>

      {/* Descrição longa — só em cards normais */}
      {!compact && (
        <p className="text-text-muted text-sm font-light leading-relaxed mb-6 opacity-70">
          {project.longDescription}
        </p>
      )}

      {/* Tags */}
      <div className={`flex flex-wrap gap-2 ${compact ? "mt-4" : ""}`}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-amber-retro border border-amber-retro/30 px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const highlighted = projects.filter((p) => p.highlight);
  const others = projects.filter((p) => !p.highlight);

  return (
    <section id="projetos" className="py-28 px-16 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 font-mono text-xs text-green tracking-widest uppercase mb-3">
        <span className="text-border">03</span>
        projetos
      </div>
      <h2 className="font-mono font-bold text-4xl tracking-tight mb-16">
        o que construí
      </h2>

      {/* Projetos em destaque — grid de 3 */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {highlighted.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {/* Separador */}
      <div className="flex items-center gap-4 my-10">
        <div className="flex-1 h-px bg-border" />
        <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
          outros repositórios
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Outros — grid de 2 */}
      <div className="grid grid-cols-2 gap-4">
        {others.map((project) => (
          <ProjectCard key={project.name} project={project} compact />
        ))}
      </div>
    </section>
  );
}
