export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 md:px-16 py-8 flex flex-col sm:flex-row gap-3 justify-between items-center max-w-6xl mx-auto">
      <span className="font-sans text-sm text-text-muted text-center sm:text-left">
        © 2026 <span className="text-gradient font-medium">Douglas Cavalcanti</span>{" "}
        — feito com curiosidade e café
      </span>
      <a
        href="#top"
        className="font-mono text-xs text-text-muted tracking-widest uppercase hover:text-navy-light transition-colors duration-200"
      >
        ↑ voltar ao topo
      </a>
    </footer>
  );
}
