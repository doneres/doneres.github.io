import { Mail } from "lucide-react";
import Reveal from "../shared/Reveal";
import { GithubIcon, LinkedinIcon } from "../shared/BrandIcons";

const links = [
  {
    label: "doncavalcante@gmail.com",
    href: "mailto:doncavalcante@gmail.com",
    icon: Mail,
  },
  {
    label: "github.com/doneres",
    href: "https://github.com/doneres",
    icon: GithubIcon,
  },
  {
    label: "linkedin.com/in/doneres",
    href: "https://linkedin.com/in/doneres",
    icon: LinkedinIcon,
  },
];

const terminalLines = [
  { cmd: "whoami", out: "Douglas Cavalcanti" },
  { cmd: "cat status.txt", out: "disponível para novos projetos ✓" },
  { cmd: "echo $LOCATION", out: "Goiânia, GO — Brasil" },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative py-32 px-6 md:px-16 max-w-6xl mx-auto overflow-hidden"
    >
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs text-navy-light tracking-widest uppercase mb-4">
          <span className="text-text-muted">05</span>
          contato
        </div>
        <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-16">
          vamos conversar
        </h2>
      </Reveal>

      <div className="relative grid md:grid-cols-2 gap-16 items-start">
        <Reveal delay={0.1}>
          <p className="text-text-muted text-lg font-light leading-relaxed mb-10 max-w-md">
            Estou aberto a oportunidades, freelas ou só uma boa troca de ideia
            sobre tecnologia. Me manda uma mensagem — respondo rápido.
          </p>

          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-sans text-sm text-text-muted glass-flat rounded-xl px-5 py-4 hover:text-navy-light hover:border-navy-light/40 hover:translate-x-1 transition-all duration-200"
              >
                <link.icon size={16} />
                {link.label}
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  →
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Terminal */}
        <Reveal delay={0.2}>
          <div className="glass rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="font-mono text-xs text-text-muted ml-2">
                bash — contact.sh
              </span>
            </div>

            <div className="p-6 flex flex-col gap-3">
              {terminalLines.map((line) => (
                <div key={line.cmd} className="flex flex-col gap-1">
                  <div className="flex gap-2 font-mono text-sm">
                    <span className="text-green">doneres@dev:~$</span>
                    <span className="text-text-principal">{line.cmd}</span>
                  </div>
                  <div className="font-mono text-sm text-text-muted pl-4">
                    {line.out}
                  </div>
                </div>
              ))}

              <div className="flex gap-2 font-mono text-sm mt-1">
                <span className="text-green">doneres@dev:~$</span>
                <span
                  className="inline-block w-2 h-4 bg-green align-middle"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
