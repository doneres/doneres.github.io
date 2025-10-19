import { CodeXml } from "lucide-react";
import LinksNavBar from "./linksNavBar";

const Navbar = () => {
  return (
 <header className="h-16 bg-gray-800 text-white w-full top-0 z-50">
      <nav className="flex items-center h-full max-w-7xl mx-auto px-8 justify-between">
        <span className="flex items-center hover:text-gray-300 transition">
          <a href="#">
            <CodeXml size={32} strokeWidth={2}/>
          </a>
        </span>

        <ul className="flex gap-6">
          <li>
            <LinksNavBar link="#" nomeLink="Home" />
          </li>
          <li>
            <LinksNavBar link="#" nomeLink="About me" />
          </li>
          <li>
            <LinksNavBar link="#" nomeLink="Experiences" />
          </li>
          <li>
            <LinksNavBar link="#" nomeLink="Projects" />
          </li>
          <li>
            <LinksNavBar link="#" nomeLink="Skills" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
