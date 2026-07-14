import { motion } from "framer-motion";
import { Cloud, Code2, Database, Server } from "lucide-react";
import Reveal from "../shared/Reveal";

const skillGroups = [
  {
    category: "Backend",
    icon: Server,
    skills: ["Java", "Spring Boot", "Go", "Node.js", "Express", "Python"],
  },
  {
    category: "Dados & IA",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    category: "Infraestrutura & DevOps",
    icon: Cloud,
    skills: [
      "Docker",
      "CI/CD",
      "Linux",
      "Azure",
      "Git",
      "GitHub Actions",
      "GitLab",
      "PowerShell",
    ],
  },
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const chip = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-16 max-w-6xl mx-auto"
    >
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs text-navy-light tracking-widest uppercase mb-4">
          <span className="text-text-muted">03</span>
          habilidades
        </div>
        <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-16">
          stack & ferramentas
        </h2>
      </Reveal>

      <div className="flex flex-col gap-14">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="glass-flat rounded-xl p-2.5 text-navy-light">
                <group.icon size={18} />
              </div>
              <span className="font-display text-lg font-medium text-text-principal">
                {group.category}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <motion.div
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-wrap gap-3"
            >
              {group.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={chip}
                  className="font-mono text-sm text-text-muted glass-flat rounded-full px-5 py-2.5 hover:text-navy-light hover:border-navy-light/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
