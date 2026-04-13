const links = [
  {
    label: "doncavalcante@gmail.com",
    href: "mailto:doncavalcante@gmail.com",
    icon: "✉",
  },
  {
    label: "github.com/doneres",
    href: "https://github.com/doneres",
    icon: "⌥",
  },
  {
    label: "linkedin.com/in/doneres",
    href: "https://linkedin.com/in/doneres",
    icon: "◈",
  },
];

const terminalLines = [
  { prompt: true, cmd: "whoami", out: "Douglas Cavalcanti" },
  {
    prompt: true,
    cmd: "cat status.txt",
    out: "disponível para novos projetos ✓",
  },
  { prompt: true, cmd: "echo $LOCATION", out: "Goiânia, GO — Brasil" },
];

export default function Contact() {
  return (
    <section id="contato" className="py-28 px-16 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 font-mono text-xs text-green tracking-widest uppercase mb-3">
        <span className="text-border">04</span>
        contato
      </div>
      <h2 className="font-mono font-bold text-4xl tracking-tight mb-16">
        vamos conversar
      </h2>

      <div className="grid grid-cols-2 gap-20 items-start">
        {/* Links */}
        <div>
          <p className="text-text-muted font-light leading-relaxed mb-8">
            Estou aberto a oportunidades, freelas ou só uma boa troca de ideia
            sobre tecnologia. Me manda uma mensagem.
          </p>

          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-mono text-sm text-text-muted border border-border px-4 py-3 hover:text-green hover:border-green hover:pl-6 transition-all duration-200"
              >
                <span>{link.icon}</span>
                {link.label}
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Terminal */}
        <div className="bg-card border border-border overflow-hidden">
          {/* Barra do terminal */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="font-mono text-xs text-text-muted ml-2">
              bash — contact.sh
            </span>
          </div>

          {/* Corpo do terminal */}
          <div className="p-6 flex flex-col gap-2">
            {terminalLines.map((line, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex gap-2 font-mono text-sm">
                  <span className="text-green">doneres@dev:~$</span>
                  <span className="text-text-principal">{line.cmd}</span>
                </div>
                <div className="font-mono text-sm text-text-muted pl-4">
                  {line.out}
                </div>
              </div>
            ))}

            {/* Linha com cursor */}
            <div className="flex gap-2 font-mono text-sm mt-1">
              <span className="text-green">doneres@dev:~$</span>
              <span
                className="inline-block w-2 h-4 bg-green align-middle"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
