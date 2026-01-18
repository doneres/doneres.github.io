import { GraduationCap, Briefcase, Award, Code2, Mail, Linkedin, Github, MapPin, Calendar, Sparkles, Rocket, Brain, Heart, Target, Zap } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "PUC Goiás",
      period: "2023 - 2027",
      status: "Em andamento",
      icon: <GraduationCap className="text-blue-400" size={24} />,
    },
    {
      degree: "Técnico em Redes de Computadores",
      institution: "Instituto Metrópole Digital - UFRN",
      period: "2022",
      status: "Concluído",
      icon: <GraduationCap className="text-blue-400" size={24} />,
    },
    {
      degree: "Técnico em Informática",
      institution: "Escola Estadual Berilo Wanderley",
      period: "2021",
      status: "Concluído",
      icon: <GraduationCap className="text-blue-400" size={24} />,
    },
  ];

  const experiences = [
    {
      role: "Instrutor de Programação e TI",
      company: "CTRL+PLAY",
      period: "Abril 2025 - Presente",
      description: "Instrutor de programação e tecnologia para jovens e adultos. Ensino lógica de programação (Python, JavaScript, Potigol), desenvolvimento web (ReactJs, NodeJs, HTML, CSS), infraestrutura (PowerShell, automações) e conceitos de DevOps (CI/CD, Docker).",
      icon: <Award className="text-blue-400" size={24} />,
    },
    {
      role: "Desenvolvedor Freelancer",
      company: "Autônomo",
      period: "Janeiro 2025 - Presente",
      description: "Desenvolvimento de soluções web escaláveis utilizando Java, Spring Boot, ReactJS, Docker, CI/CD, PostgreSQL e MySQL. Projetos oriundos de hackathons e demandas acadêmicas.",
      icon: <Briefcase className="text-blue-400" size={24} />,
    },
    {
      role: "Assistente de Infraestrutura de TI",
      company: "Grupo Piracanjuba",
      period: "Julho 2024 - Março 2025",
      description: "Atuação na equipe de operações de TI com foco em atendimento, homologação de softwares, automações com PowerShell e Power Automate, gerenciamento via Microsoft Intune e SCCM, análise crítica de vulnerabilidades e gerenciamento de macOS.",
      icon: <Briefcase className="text-blue-400" size={24} />,
    },
    {
      role: "Assistente de Tecnologia da Informação",
      company: "SolarBR Coca-Cola",
      period: "Agosto 2023 - Junho 2024",
      description: "Suporte HelpDesk com gerenciamento de Active Directory, Windows 10/11, rede Wi-Fi (Extreme Networks), VPN (FortiNet), Mobile Device Management (Knox Manager, AirWatch, Mobilit), autenticação MFA e acesso remoto (TeamViewer).",
      icon: <Briefcase className="text-blue-400" size={24} />,
    },
    {
      role: "Técnico de HelpDesk",
      company: "Operadora Odontomais",
      period: "Março 2023 - Julho 2023",
      description: "Implementação e manutenção de Active Directory, telefonia VoIP (Issabel), rede entre unidades via Mikrotik (L2TP), sistema GLPI para gestão de chamados e inventário, DokuWiki para documentação, e configuração de APs Intelbras com Captive Portal.",
      icon: <Briefcase className="text-blue-400" size={24} />,
    },
    {
      role: "Bolsista de Tecnologia da Informação",
      company: "Escola de Ciências e Tecnologia - UFRN",
      period: "Janeiro 2022 - Novembro 2022",
      description: "Suporte técnico com gerenciamento de estações Windows 10, sistemas Wi-Fi, instalação e configuração de equipamentos com foco em soluções open-source.",
      icon: <Briefcase className="text-blue-400" size={24} />,
    },
    {
      role: "Técnico de HelpDesk",
      company: "Casa de Saúde São Lucas",
      period: "Março 2021 - Novembro 2021",
      description: "Manutenção e instalação de máquinas, preventivas periódicas e configuração de equipamentos Wi-Fi.",
      icon: <Briefcase className="text-blue-400" size={24} />,
    },
  ];

  const skills = [
    { category: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "JPA", "Node.js", "Python", "Golang", "REST APIs"] },
    { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    { category: "Cloud & DevOps", items: ["Azure", "Docker", "Kubernetes", "CI/CD", "Git", "PowerShell"] },
    { category: "Infraestrutura", items: ["Active Directory", "Entra ID", "Intune", "SCCM", "Mikrotik", "FortiNet VPN"] },
    { category: "Gestão de TI", items: ["GLPI", "OCS Inventory", "Knox Manager", "AirWatch", "Extreme Networks", "Issabel"] },
    { category: "IA & Data Science", items: ["scikit-learn", "Pandas", "Matplotlib", "NumPy", "OpenAI API"] },
    { category: "Metodologias", items: ["Scrum", "Kanban", "Clean Code", "Testes Unitários", "ITIL"] },
  ];

  const values = [
    {
      title: "Aprendizado Contínuo",
      description: "Tecnologia evolui rápido. Sempre estudando novas ferramentas, frameworks e certificações.",
      icon: <Brain className="text-blue-400" size={28} />,
    },
    {
      title: "Excelência Técnica",
      description: "Código limpo, infraestrutura estável e documentação clara. Qualidade em tudo que faço.",
      icon: <Code2 className="text-blue-400" size={28} />,
    },
    {
      title: "Resolução de Problemas",
      description: "Foco em entregar soluções práticas que resolvem problemas reais de negócio e usuários.",
      icon: <Target className="text-blue-400" size={28} />,
    },
    {
      title: "Compartilhamento",
      description: "Ensinar e colaborar fortalece a comunidade tech e multiplica o conhecimento.",
      icon: <Heart className="text-blue-400" size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft" style={{animationDelay: '0.2s', opacity: 0}}>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 mb-6">
                <Sparkles className="text-blue-400" size={16} />
                <span className="text-sm text-blue-300">Sobre mim</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Douglas{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Cavalcanti
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Desenvolvedor fullstack e analista de infraestrutura com mais de 5 anos de experiência em TI. Combino expertise em desenvolvimento de software com sólido conhecimento em infraestrutura e operações de TI.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Formado como Técnico em Informática e Redes de Computadores, atualmente cursando Análise e Desenvolvimento de Sistemas na PUC Goiás (Conclusão: 06/2027). Atuei em empresas como Grupo Piracanjuba e SolarBR Coca-Cola. Como Freelancer, desenvolvo aplicações escaláveis. Como Instrutor na CTRL+PLAY, ensino programação e infraestrutura de TI.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:doncavalcante@gmail.com"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 hover:scale-105"
                >
                  <Mail size={18} />
                  Email
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 border border-white/10 hover:border-white/20 hover:scale-105"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 border border-white/10 hover:border-white/20 hover:scale-105"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="space-y-6 animate-fadeIn" style={{animationDelay: '0.4s', opacity: 0}}>
              <div className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-2xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-blue-400" size={24} />
                  <h4 className="text-lg font-semibold">Localização</h4>
                </div>
                <p className="text-gray-400">Goiânia, GO - Brasil</p>
                <p className="text-sm text-gray-500 mt-1">Disponível para trabalho remoto</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-2xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="text-blue-400" size={24} />
                  <h4 className="text-lg font-semibold">Experiência</h4>
                </div>
                <p className="text-gray-400">5+ anos em TI</p>
                <p className="text-sm text-gray-500 mt-1">Dev Fullstack | Infraestrutura | Instructor</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-2xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-blue-400" size={24} />
                  <h4 className="text-lg font-semibold">Certificações</h4>
                </div>
                <p className="text-gray-400">AZ-900 | MS-900</p>
                <p className="text-sm text-gray-500 mt-1">Microsoft Azure & Microsoft 365</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <GraduationCap className="inline-block mr-3 text-blue-400" size={36} />
            Formação Acadêmica
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 animate-scaleIn"
                style={{animationDelay: `${index * 0.1}s`, opacity: 0}}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-lg text-blue-400 mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Briefcase className="inline-block mr-3 text-blue-400" size={36} />
            Experiência Profissional
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 animate-scaleIn"
                style={{animationDelay: `${index * 0.1}s`, opacity: 0}}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-lg text-blue-400 mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Code2 className="inline-block mr-3 text-blue-400" size={36} />
            Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-900/20 to-transparent backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 animate-fadeIn"
                style={{animationDelay: `${index * 0.1}s`, opacity: 0}}
              >
                <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 hover:bg-blue-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Meus Valores</h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Princípios que guiam meu trabalho e desenvolvimento profissional
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 animate-scaleIn"
                style={{animationDelay: `${index * 0.1}s`, opacity: 0}}
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos construir algo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              incrível
            </span>{" "}
            juntos?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Estou sempre aberto a novos desafios, projetos e oportunidades de colaboração.
          </p>
          <a
            href="mailto:doncavalcante@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            <Mail size={20} />
            Entre em contato
          </a>
        </div>
      </section>
    </div>
  );
}
