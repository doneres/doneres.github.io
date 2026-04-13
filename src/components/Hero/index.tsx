export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-16 overflow-hidden">
      {/* Grid de fundo */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Nome */}
      <h1
        className="font-mono font-bold leading-tight mb-6"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
      >
        Douglas
        <br />
        <span className="text-green">Cavalcanti</span>
        <span className="text-text-muted">_</span>
      </h1>

      {/* Subtítulo */}
      <p className="text-text-muted font-light text-lg max-w-lg mb-12 leading-relaxed">
        Desenvolvedor fullstack apaixonado por interfaces limpas, código bem
        escrito e experiências que fazem sentido.
      </p>

      {/* Botões */}
      <div className="flex gap-4 flex-wrap">
        <a
          href="#projects"
          className="font-mono text-sm font-bold px-7 py-3 bg-green text-deep-bg border border-green hover:bg-transparent hover:text-green transition-all duration-200"
        >
          ver projetos
        </a>
        <a
          href="#contact"
          className="font-mono text-sm px-7 py-3 bg-transparent text-cyan border border-cyan hover:bg-cyan hover:text-deep-bg transition-all duration-200"
        >
          entrar em contato
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-16 flex items-end gap-3">
        <span className="font-mono text-xs text-border tracking-widest">
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
