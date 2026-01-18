import { Github, Linkedin, Mail, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
        <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Douglas Cavalcanti. Todos os direitos reservados.</p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/doneres"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-800/50 hover:bg-blue-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
            aria-label="GitHub"
          >
            <Github size={20} className="group-hover:text-blue-300 transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/doneres/"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-800/50 hover:bg-blue-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="group-hover:text-cyan-400 transition-colors" />
          </a>

          <a
            href="mailto:doncavalcante@gmail.com"
            className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-800/50 hover:bg-blue-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/50"
            aria-label="Email"
          >
            <Mail size={20} className="group-hover:text-sky-400 transition-colors" />
          </a>

          <a
            href="https://youtube.com/doneres"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-800/50 hover:bg-blue-700/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50"
            aria-label="YouTube"
          >
            <Youtube size={20} className="group-hover:text-red-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
