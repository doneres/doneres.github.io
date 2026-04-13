export default function About() {
  const stats = [
    { number: "2+", label: "anos de experiência" },
    { number: "10+", label: "projetos entregues" },
    { number: "∞", label: "café consumido" },
    { number: "01", label: "dev comprometido" },
  ];

  return (
    <section id="sobre" className="py-28 px-16 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 font-mono text-xs text-green tracking-widest uppercase mb-3">
        <span className="text-border">01</span>
        sobre
      </div>
      <h2 className="font-mono font-bold text-4xl tracking-tight mb-16">
        quem sou eu
      </h2>

      <div className="grid grid-cols-2 gap-20 items-center">
        {/* Texto */}
        <div className="flex flex-col gap-5">
          <p className="text-text-muted font-light leading-relaxed">
            Oi! Sou{" "}
            <span className="text-text-principal font-medium">
              Douglas Cavalcanti
            </span>
            , desenvolvedor frontend baseado em Goiânia — GO. Trabalho
            construindo interfaces modernas com{" "}
            <span className="text-text-principal font-medium">React</span> e{" "}
            <span className="text-text-principal font-medium">TypeScript</span>,
            com foco em performance, acessibilidade e código limpo.
          </p>
          <p className="text-text-muted font-light leading-relaxed">
            Tenho interesse em projetos que unam boa engenharia com design
            cuidadoso. Acredito que um bom produto começa na atenção aos
            detalhes.
          </p>
          <p className="text-text-muted font-light leading-relaxed">
            Fora do código, gosto de explorar design de interfaces, tipografia e
            a história da computação — o que provavelmente explica o visual
            deste site.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface border border-border p-6 hover:border-green transition-colors duration-200"
            >
              <div className="font-mono font-bold text-4xl text-green leading-none mb-2">
                {stat.number}
              </div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
