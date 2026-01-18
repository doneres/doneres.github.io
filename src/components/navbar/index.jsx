import { CodeXml } from "lucide-react";
import LinksNavBar from "./linksNavBar";

export default function Navbar() {
  return (
    <header className="fixed h-16 bg-blue-950/80 backdrop-blur-xl text-white w-full top-0 z-50 border-b border-blue-800/20">
      <nav className="flex items-center h-full max-w-7xl mx-auto px-8 justify-between">
        <span className="flex items-center hover:text-blue-300 transition-all duration-300">
          <a href="/">
            <CodeXml size={32} strokeWidth={2} className="hover:rotate-180 transition-transform duration-500" />
          </a>
        </span>

        <ul className="flex gap-8">
          <li>
            <LinksNavBar link="/" nomeLink="Home" />
          </li>
          <li>
            <LinksNavBar link="/about" nomeLink="About me" />
          </li>
          <li>
            <LinksNavBar link="/experiences" nomeLink="Experiences" />
          </li>
          <li>
            <LinksNavBar link="/projects" nomeLink="Projects" />
          </li>
          <li>
            <LinksNavBar link="/teaching" nomeLink="Teaching" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
