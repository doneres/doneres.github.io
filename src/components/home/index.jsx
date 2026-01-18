import { ArrowRight, Code, Sparkles, Zap, Brain, Rocket, Globe2, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section - Apple Style */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated background gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 py-32 text-center">
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s', opacity: 0}}>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 mb-8">
              <Sparkles className="text-blue-400" size={16} />
              <span className="text-sm text-blue-300">Desenvolvedor | Analista de Infraestrutura | Instrutor</span>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight animate-fadeInUp" style={{animationDelay: '0.4s', opacity: 0}}>
            Douglas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
              Cavalcanti
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.6s', opacity: 0}}>
            Desenvolvedor fullstack e especialista em infraestrutura de TI. Transformando ideias em código e otimizando ambientes tecnológicos.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.8s', opacity: 0}}>
            <Link
              to="/projects"
              className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 flex items-center gap-2 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              Ver projetos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:doncavalcante@gmail.com"
              className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 border border-white/10 hover:border-white/20 hover:scale-105"
            >
              Entre em contato
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-900/20 to-transparent backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 animate-scaleIn" style={{animationDelay: '0.2s', opacity: 0}}>
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Code className="text-blue-400" size={28} />
              </div>
              <h3 className="text-5xl font-bold text-white mb-2">10+</h3>
              <p className="text-gray-400">Tecnologias</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-blue-900/20 to-transparent backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 animate-scaleIn" style={{animationDelay: '0.4s', opacity: 0}}>
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Rocket className="text-blue-400" size={28} />
              </div>
              <h3 className="text-5xl font-bold text-white mb-2">5+</h3>
              <p className="text-gray-400">Anos de experiência</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-blue-900/20 to-transparent backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 animate-scaleIn" style={{animationDelay: '0.6s', opacity: 0}}>
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Target className="text-blue-400" size={28} />
              </div>
              <h3 className="text-5xl font-bold text-white mb-2">100+</h3>
              <p className="text-gray-400">Alunos ensinados</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft" style={{animationDelay: '0.2s', opacity: 0}}>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Desenvolvedor.
                <br />
                <span className="text-blue-400">Infraestrutura.</span>
                <br />
                <span className="text-cyan-400">Instrutor.</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Estudante de Análise e Desenvolvimento de Sistemas na PUC Goiás, com formação técnica em Informática e Redes de Computadores. Experiência sólida tanto em desenvolvimento quanto em infraestrutura de TI.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Atuei em grandes empresas como Grupo Piracanjuba e SolarBR Coca-Cola. Como Freelancer, desenvolvo soluções escaláveis. Como Instrutor na CTRL+PLAY, compartilho conhecimento em programação e infraestrutura.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
              >
                Saiba mais sobre mim
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-4 animate-fadeIn" style={{animationDelay: '0.4s', opacity: 0}}>
              <div className="group p-6 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-blue-400" size={24} />
                  <h4 className="text-lg font-semibold">Stack Desenvolvimento</h4>
                </div>
                <p className="text-gray-400">Java, Spring Boot, ReactJS, Python, Node.js, PostgreSQL, Docker</p>
              </div>

              <div className="group p-6 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="text-blue-400" size={24} />
                  <h4 className="text-lg font-semibold">Stack Infraestrutura</h4>
                </div>
                <p className="text-gray-400">Azure, Active Directory, PowerShell, Intune, SCCM, Mikrotik</p>
              </div>

              <div className="group p-6 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <Globe2 className="text-blue-400" size={24} />
                  <h4 className="text-lg font-semibold">Localização</h4>
                </div>
                <p className="text-gray-400">Goiânia, GO - Brasil | Disponível remotamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp" style={{animationDelay: '0.2s', opacity: 0}}>
            Pronto para criar algo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              incrível
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-400 mb-12 animate-fadeInUp" style={{animationDelay: '0.4s', opacity: 0}}>
            Explore meus projetos, cursos e entre em contato para conversarmos sobre tecnologia.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.6s', opacity: 0}}>
            <Link
              to="/teaching"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 flex items-center gap-2 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              Conheça meus cursos
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 border border-white/10 hover:border-white/20 hover:scale-105"
            >
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
