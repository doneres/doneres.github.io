export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 border-b border-border bg-deep-bg/80 backdrop-blur-sm">
      <h1 className="font-mono text-sm text-green tracking-wide">
        <span className="text-text-muted">~/</span>doneres
      </h1>

      <nav>
        <ul className="flex gap-8 list-none">
          {["Sobre", "Skills", "Projetos", "Contato"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs text-text-muted uppercase tracking-widest hover:text-green transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
