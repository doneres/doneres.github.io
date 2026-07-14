import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 flex justify-between items-center rounded-2xl transition-all duration-300 ${
          scrolled ? "glass px-6 py-3 shadow-lg shadow-black/20" : "px-2 py-2"
        }`}
      >
        <a
          href="#top"
          className="font-display font-semibold text-xl tracking-tight"
        >
          douglas<span className="text-gradient">.dev</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-10 list-none">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-sans text-sm text-text-muted hover:text-text-principal transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-block font-sans text-sm font-medium px-5 py-2.5 rounded-full glass hover:border-navy-light/50 transition-colors duration-200"
        >
          vamos conversar
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-text-principal"
          aria-label="abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mt-2 glass rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1 list-none">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-sans text-base text-text-muted hover:text-text-principal px-3 py-3 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
