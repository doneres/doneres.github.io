import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import GradientMesh from "../shared/GradientMesh";

const HeroScene = lazy(() => import("../shared/three/HeroScene"));

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden"
    >
      <GradientMesh />

      {/* Grid sutil de fundo */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative z-10 grid md:grid-cols-[1.15fr_1fr] items-center gap-4 max-w-6xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 glass rounded-full pl-3 pr-4 py-1.5 mb-8 font-mono text-xs text-text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
            </span>
            disponível para novos projetos
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-semibold leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
          >
            Construo{" "}
            <span className="text-gradient">backends robustos</span> e
            produtos{" "}
            <span className="text-gradient">full-stack de ponta a ponta</span>
            .
          </motion.h1>

          <motion.p
            variants={item}
            className="text-text-muted font-light text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-12 leading-relaxed"
          >
            Sou <span className="text-text-principal">Douglas Cavalcanti</span>,
            desenvolvedor full-stack em Goiânia — GO, com foco em backend
            (Java, Go e Node.js). Também atuo com infraestrutura — Docker,
            CI/CD e cloud — e já passei pela sala de aula como professor de
            programação.
          </motion.p>

          <motion.div
            variants={item}
            className="flex gap-4 flex-wrap justify-center md:justify-start"
          >
            <a
              href="#projetos"
              className="font-sans text-sm font-medium px-7 py-3.5 rounded-full text-deep-bg transition-transform duration-200 hover:scale-105"
              style={{
                background:
                  "linear-gradient(100deg, var(--color-green), var(--color-navy-light))",
              }}
            >
              ver projetos
            </a>
            <a
              href="#contato"
              className="font-sans text-sm font-medium px-7 py-3.5 rounded-full glass hover:border-navy-light/50 transition-all duration-200 hover:scale-105"
            >
              entrar em contato
            </a>
          </motion.div>
        </motion.div>

        {/* Cena 3D — rede de nós representando sistemas/infra */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block h-[480px]"
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-navy-light to-transparent"
        />
      </motion.div>
    </section>
  );
}
