const Hero = () => {
    return (
        <main className="flex items-center justify-between w-full mx-auto max-w-7xl px-8 py-24 gap-16">
            {/* Lado Esquerdo */}
            <div className="flex flex-col gap-4">
                <p className="text-xl">
                    <span className="bg-gray-600 px-4 py-2 text-white rounded-md font-medium">
                        Hello
                    </span>{" "}
                    I'm
                </p>

                <h1 className="text-7xl font-bold text-blue-950 leading-tight">
                    Douglas
                </h1>

                <h2 className="text-6xl leading-tight">
                    <span className="text-blue-950 font-bold">Software</span>{" "}
                    <span className="text-gray-600 font-bold">Engineer</span>
                </h2>

                <button className="bg-blue-950 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-900 transition">
                    Say hello
                </button>
            </div>

            {/* Lado Direito - Gradiente Blur */}
            <div className="flex-1 relative h-96">
                <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-blue-500 to-gray-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-gray-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
        </main>
    );
};

export default Hero;