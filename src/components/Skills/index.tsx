const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Ferramentas",
    skills: ["Vite", "Git", "GitHub", "Figma", "VS Code", "GitHub Actions"],
  },
  {
    category: "Backend & outros",
    skills: ["Node.js", "REST APIs", "SQL", "Linux", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-16 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 font-mono text-xs text-green tracking-widest uppercase mb-3">
        <span className="text-border">02</span>
        habilidades
      </div>
      <h2 className="font-mono font-bold text-4xl tracking-tight mb-16">
        stack & ferramentas
      </h2>

      <div className="flex flex-col gap-12">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                {group.category}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 font-mono text-sm text-text-muted bg-surface border border-border px-4 py-2 hover:border-cyan hover:text-cyan transition-all duration-200 cursor-default"
                >
                  <span className="text-green text-xs">▸</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
