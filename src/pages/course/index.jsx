import { useParams, Link } from "react-router-dom";
import { BookOpen, Clock, BarChart3, Award, CheckCircle2, ArrowLeft, Play, FileText, Code2, Sparkles } from "lucide-react";

export default function CourseDetail() {
  const { slug } = useParams();

  // Mock course data - pode ser substituído por dados reais de uma API
  const courseData = {
    title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: "Domine os fundamentos e conceitos avançados desta tecnologia com um curso prático e direto ao ponto.",
    instructor: "Douglas Cavalcanti",
    duration: "8 horas",
    level: "Intermediário",
    students: "100+",
    rating: "4.9",
    lastUpdate: "Janeiro 2026",
    modules: [
      {
        title: "Introdução e Fundamentos",
        lessons: ["O que é e para que serve", "Configurando o ambiente", "Primeiro exemplo prático"],
      },
      {
        title: "Conceitos Intermediários",
        lessons: ["Trabalhando com estruturas", "Boas práticas", "Padrões de projeto"],
      },
      {
        title: "Conceitos Avançados",
        lessons: ["Otimização e performance", "Integração com outras tecnologias", "Projeto prático final"],
      },
    ],
    prerequisites: ["Conhecimentos básicos de programação", "Vontade de aprender"],
    whatYouLearn: [
      "Fundamentos sólidos da tecnologia",
      "Aplicação prática em projetos reais",
      "Boas práticas e padrões de desenvolvimento",
      "Resolução de problemas do mundo real",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-8 py-6">
        <Link
          to="/teaching"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para cursos
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 mb-6 animate-fadeInUp" style={{animationDelay: '0.2s', opacity: 0}}>
                <Sparkles className="text-blue-400" size={16} />
                <span className="text-sm text-blue-300">Curso Online</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeInUp" style={{animationDelay: '0.4s', opacity: 0}}>
                {courseData.title}
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.6s', opacity: 0}}>
                {courseData.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8 animate-fadeInUp" style={{animationDelay: '0.8s', opacity: 0}}>
                <div className="flex items-center gap-2">
                  <Clock className="text-blue-400" size={20} />
                  <span className="text-gray-300">{courseData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="text-blue-400" size={20} />
                  <span className="text-gray-300">{courseData.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-blue-400" size={20} />
                  <span className="text-gray-300">{courseData.students} alunos</span>
                </div>
              </div>
            </div>

            {/* Sidebar Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-8 bg-gradient-to-br from-blue-900/40 to-blue-950/40 backdrop-blur-sm rounded-3xl border border-blue-500/30 animate-scaleIn" style={{animationDelay: '0.4s', opacity: 0}}>
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Play className="text-white" size={64} />
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Instrutor</span>
                    <span className="text-white font-semibold">{courseData.instructor}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Última atualização</span>
                    <span className="text-white font-semibold">{courseData.lastUpdate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Avaliação</span>
                    <span className="text-white font-semibold">⭐ {courseData.rating}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white py-4 rounded-full font-semibold transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-blue-500/50 mb-4">
                  Começar agora
                </button>

                <p className="text-center text-sm text-gray-400">
                  Acesso vitalício ao conteúdo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="p-8 bg-gradient-to-br from-blue-900/20 to-transparent backdrop-blur-sm rounded-3xl border border-blue-500/20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-blue-400" size={32} />
              O que você vai aprender
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseData.whatYouLearn.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FileText className="text-blue-400" size={32} />
            Conteúdo do curso
          </h2>

          <div className="space-y-4">
            {courseData.modules.map((module, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-900/20 to-transparent backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <BookOpen className="text-blue-400" size={24} />
                  Módulo {index + 1}: {module.title}
                </h3>

                <ul className="space-y-2 ml-9">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="flex items-center gap-3 text-gray-400">
                      <Play className="text-blue-400" size={16} />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="p-8 bg-gradient-to-br from-blue-900/20 to-transparent backdrop-blur-sm rounded-3xl border border-blue-500/20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Code2 className="text-blue-400" size={32} />
              Pré-requisitos
            </h2>

            <ul className="space-y-3">
              {courseData.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{prereq}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              jornada
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Junte-se a centenas de alunos que já transformaram suas carreiras.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-blue-500/50 hover:scale-105">
            <Play size={20} />
            Começar agora
          </button>
        </div>
      </section>
    </div>
  );
}
