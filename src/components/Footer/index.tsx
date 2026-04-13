export default function Footer() {
  return (
    <footer className="border-t border-border px-16 py-6 flex justify-between items-center">
      <span className="font-mono text-xs text-text-muted">
        © 2026 <span className="text-green">doneres</span> — feito com
        curiosidade e café
      </span>
      <a
        href="#"
        className="font-mono text-xs text-text-muted tracking-widest uppercase hover:text-green transition-colors duration-200"
      >
        ↑ voltar ao topo
      </a>
    </footer>
  );
}
