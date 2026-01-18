import CoursesSection from "../../components/courses/CoursesSection";
import { Atom, Database, Boxes, SquareTerminal, Code2, Bot, Wind, Cloud, Zap, Globe, TrendingUp, Lightbulb, Users, GraduationCap, Award, BookOpen, Sparkles } from "lucide-react";

export default function Teaching() {
    const courses = [
        {
            title: "Dominando Azure Cloud",
            language: "Azure",
            to: "/courses/azure",
            icon: <Cloud className="text-blue-400" size={20} />,
        },
        {
            title: "Estilos com Tailwind CSS",
            language: "Tailwind CSS",
            to: "/courses/tailwindcss",
            icon: <Wind className="text-cyan-400" size={20} />,
        },
        {
            title: "Fundamentos do CSS",
            language: "CSS",
            to: "/courses/css",
            icon: <Code2 className="text-orange-300" size={20} />,
        },
        {
            title: "Começando com JavaScript",
            language: "JavaScript",
            to: "/courses/javascript",
            icon: <Zap className="text-yellow-300" size={20} />,
        },
        {
            title: "Java: Da Sintaxe à Prática",
            language: "Java",
            to: "/courses/java",
            icon: <Code2 className="text-red-500" size={20} />,
        },
        {
            title: "MongoDB: NoSQL na Prática",
            language: "MongoDB",
            to: "/courses/mongodb",
            icon: <Database className="text-green-400" size={20} />,
        },
        {
            title: "Node.js: Backend com JavaScript",
            language: "Node.js",
            to: "/courses/nodejs",
            icon: <Zap className="text-green-500" size={20} />,
        },
        {
            title: "HTML: Aprenda a criar sites",
            language: "HTML",
            to: "/courses/html",
            icon: <Globe className="text-orange-500" size={20} />,
        },
        {
            title: "Python para Análise de Dados",
            language: "Python",
            to: "/courses/python",
            icon: <Boxes className="text-blue-300" size={20} />,
        },
        {
            title: "React: Componentes Modernos",
            language: "React",
            to: "/courses/react-structure",
            icon: <Atom className="text-cyan-300" size={20} />,
        },
        {
            title: "Inteligência Artificial Aplicada",
            language: "IA Aplicada",
            to: "/courses/ia",
            icon: <Bot className="text-yellow-400" size={20} />,
        },
        {
            title: "Automatize seu ambiente empresarial",
            language: "PowerShell",
            to: "/courses/powershell",
            icon: <SquareTerminal className="text-gray-400" size={20} />,
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-16">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 mb-6 animate-fadeInUp" style={{animationDelay: '0.2s', opacity: 0}}>
                        <GraduationCap className="text-blue-400" size={16} />
                        <span className="text-sm text-blue-300">Instrutor na CTRL+PLAY</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp" style={{animationDelay: '0.4s', opacity: 0}}>
                        Aprenda com quem{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                            ensina na prática
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.6s', opacity: 0}}>
                        Mais de 100 alunos formados em tecnologias modernas. Conteúdo direto, prático e focado no que realmente importa.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 animate-fadeInUp" style={{animationDelay: '0.8s', opacity: 0}}>
                        <div className="p-6 bg-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/20">
                            <Award className="text-blue-400 mb-2 mx-auto" size={32} />
                            <h3 className="text-3xl font-bold text-white mb-1">100+</h3>
                            <p className="text-gray-400">Alunos Formados</p>
                        </div>
                        <div className="p-6 bg-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/20">
                            <BookOpen className="text-blue-400 mb-2 mx-auto" size={32} />
                            <h3 className="text-3xl font-bold text-white mb-1">12</h3>
                            <p className="text-gray-400">Cursos Disponíveis</p>
                        </div>
                        <div className="p-6 bg-blue-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/20">
                            <Sparkles className="text-blue-400 mb-2 mx-auto" size={32} />
                            <h3 className="text-3xl font-bold text-white mb-1">3+</h3>
                            <p className="text-gray-400">Anos Ensinando</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="relative py-16">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold mb-4">Escolha seu próximo curso</h2>
                        <p className="text-gray-400 text-lg">Do básico ao avançado, cursos práticos e objetivos</p>
                    </div>
                    <CoursesSection items={courses} />
                </div>
            </section>

            {/* Why Invest Section */}
            <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Por que investir em <span className="text-blue-400">aprendizado</span>?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            O mundo da tecnologia evolui rapidamente. Quem se mantém atualizado domina o mercado.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group p-8 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105">
                            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                                <TrendingUp className="text-blue-400" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Crescimento Profissional</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Expanda suas habilidades e aumente seu valor no mercado de trabalho. Desenvolvedores atualizados ganham mais e têm melhores posições.
                            </p>
                        </div>

                        <div className="group p-8 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105">
                            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                                <Lightbulb className="text-blue-400" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Inovação & Criatividade</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Domine novas ferramentas e frameworks para criar projetos incríveis. A inovação vem do conhecimento profundo e atualizado.
                            </p>
                        </div>

                        <div className="group p-8 bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105">
                            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                                <Users className="text-blue-400" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Comunidade & Networking</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Conecte-se com profissionais, aprenda com diferentes perspectivas e construa relacionamentos que impulsionam sua carreira.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xl text-gray-300 mb-6">
                            Escolha um curso acima e comece sua jornada de transformação{" "}
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                hoje mesmo
                            </span>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}