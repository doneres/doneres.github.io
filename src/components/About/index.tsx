import Reveal from "../shared/Reveal";
import TiltCard from "../shared/TiltCard";

const stats = [
  { number: "2+", label: "anos de experiência" },
  { number: "3", label: "frentes: dev, infra, ensino" },
  { number: "10+", label: "projetos entregues" },
  { number: "∞", label: "café consumido" },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-32 px-6 md:px-16 max-w-6xl mx-auto">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs text-navy-light tracking-widest uppercase mb-4">
          <span className="text-text-muted">01</span>
          sobre
        </div>
        <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-16">
          quem sou eu
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Texto */}
        <Reveal delay={0.1} className="flex flex-col gap-6">
          <p className="text-text-muted text-lg font-light leading-relaxed">
            Oi! Sou{" "}
            <span className="text-text-principal font-medium">
              Douglas Cavalcanti
            </span>
            , desenvolvedor full-stack baseado em Goiânia — GO, com
            preferência clara por{" "}
            <span className="text-text-principal font-medium">backend</span>.
            Trabalho com{" "}
            <span className="text-text-principal font-medium">Java</span>,{" "}
            <span className="text-text-principal font-medium">Go</span> e{" "}
            <span className="text-text-principal font-medium">Node.js</span>,
            sempre com foco em arquitetura sólida, performance e código
            limpo.
          </p>
          <p className="text-text-muted text-lg font-light leading-relaxed">
            Além do código, cuido da infraestrutura por trás dele — Docker,
            CI/CD, servidores Linux e cloud (AWS/Azure/GCP) fazem parte do
            meu dia a dia, não só do deploy.
          </p>
          <p className="text-text-muted text-lg font-light leading-relaxed">
            Também já estive do outro lado da sala: fui professor de
            programação na CTRLPLAY, ensinando desde lógica e jogos até web e
            backend — o que me deixou bem treinado em explicar sistemas
            complexos de forma simples.
          </p>
        </Reveal>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.15 + i * 0.08}>
              <TiltCard className="glass rounded-2xl p-6 md:p-7 relative overflow-hidden hover:border-navy-light/40 transition-colors duration-300">
                <div className="font-display font-semibold text-4xl md:text-5xl text-gradient leading-none mb-3">
                  {stat.number}
                </div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-widest">
                  {stat.label}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
