import { ExternalLink, Github, Sparkles, Code2, Rocket, Zap, Database, Globe, Server, Briefcase } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Gestão Empresarial",
      description: "Plataforma completa para gestão de empresas com controle de estoque, vendas, financeiro e relatórios em tempo real.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
      icon: <Briefcase className="text-blue-400" size={24} />,
      link: "#",
      github: "#",
      highlight: true,
      category: "desenvolvimento",
    },
    {
      title: "Automação de Active Directory",
      description: "Scripts PowerShell para automação de criação de usuários, grupos, permissões e auditoria em ambientes AD, Entra ID e Azure.",
      tech: ["PowerShell", "Active Directory", "Azure", "Entra ID"],
      icon: <Server className="text-blue-400" size={24} />,
      link: "#",
      github: "#",
      highlight: true,
      category: "infraestrutura",
    },
    {
      title: "API RESTful de E-commerce",
      description: "Backend robusto para e-commerce com autenticação JWT, processamento de pagamentos e integração com diversos serviços.",
      tech: ["Node.js", "Express", "MongoDB", "Redis"],
      icon: <Server className="text-blue-400" size={24} />,
      link: "#",
      github: "#",
      category: "desenvolvimento",
    },
    {
      title: "Sistema ITSM com GLPI",
      description: "Implementação e customização de sistema GLPI para gestão de chamados, inventário de ativos, contratos e SLA.",
      tech: ["GLPI", "PHP", "MySQL", "Active Directory"],
      icon: <Database className="text-blue-400" size={24} />,
      link: "#",
      github: "#",
      category: "infraestrutura",
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados com gráficos dinâmicos e filtros avançados.",
      tech: ["React", "Chart.js", "Tailwind CSS", "Python"],
      icon: <Zap className="text-blue-400" size={24} />,
      link: "#",
      github: "#",
      category: "desenvolvimento",
    },
    {
      title: "Infraestrutura de Rede com Mikrotik",
      description: "Configuração de rede corporativa com RouterBoards Mikrotik, VPN L2TP, firewall e QoS para conectar múltiplas unidades.",
      tech: ["Mikrotik", "RouterOS", "L2TP", "Firewall"],
      icon: <Globe className="text-blue-400" size={24} />,
      link: "#",
      github: "#",
      category: "infraestrutura",
    },
    {
      title: "Chatbot com IA",
      description: "Assistente virtual inteligente com processamento de linguagem natural para atendimento automatizado.",
      tech: ["Python", "OpenAI API", "FastAPI", "React"],
      icon: <Code2 className="text-blue-400" size={24} />,
      link: "#",
      github: "#",
      category: "desenvolvimento",
    },
    {
      title: "MDM - Mobile Device Management",
      description: "Gestão centralizada de dispositivos móveis com Knox Manager (Samsung) e AirWatch (VMware), incluindo políticas e aplicativos.",
      tech: ["Knox Manager", "AirWatch", "Mobilit", "Android"],
      icon: <Rocket className="text-blue-400" size={24} />,
      link: "#",
      github: "#",
      category: "infraestrutura",
    },
    {
      title: "Telefonia VoIP Corporativa",
      description: "Implementação de sistema de telefonia IP com Issabel para comunicação interna entre unidades e ramais.",
      tech: ["Issabel", "VoIP", "SIP", "Linux"],
      icon: <Globe className="text-blue-400" size={24} />,
      link: "#",
      github: "#",
      category: "infraestrutura",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 mb-6 animate-fadeInUp" style={{animationDelay: '0.2s', opacity: 0}}>
            <Sparkles className="text-blue-400" size={16} />
            <span className="text-sm text-blue-300">Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp" style={{animationDelay: '0.4s', opacity: 0}}>
            Projetos que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
              transformam ideias
            </span>
            {" "}em realidade
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.6s', opacity: 0}}>
            Soluções de desenvolvimento de software e infraestrutura de TI com tecnologias modernas e foco em performance, escalabilidade e experiência do usuário.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-3xl border transition-all duration-500 hover:scale-105 animate-scaleIn ${
                  project.highlight
                    ? 'border-blue-500/40 hover:border-blue-500/60 md:col-span-2 lg:col-span-1'
                    : 'border-blue-500/20 hover:border-blue-500/40'
                }`}
                style={{animationDelay: `${index * 0.1}s`, opacity: 0}}
              >
                {project.highlight && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Destaque
                  </div>
                )}

                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    <Globe size={16} />
                    <span className="text-sm font-medium">Ver projeto</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tecnologias que <span className="text-blue-400">domino</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stack moderna para criar soluções robustas e escaláveis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Java', 'Spring Boot', 'React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'Azure', 'Tailwind CSS', 'PowerShell', 'Active Directory', 'Mikrotik', 'Intune', 'GLPI', 'Kubernetes', 'Git', 'TypeScript'].map((tech, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-900/20 to-transparent backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-110 text-center animate-fadeIn"
                style={{animationDelay: `${index * 0.05}s`, opacity: 0}}
              >
                <p className="text-white font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Estou disponível para projetos freelance e oportunidades de colaboração.
          </p>
          <a
            href="mailto:doncavalcante@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            Entre em contato
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
