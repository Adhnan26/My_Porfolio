function About() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-5 bg-[#020617] relative overflow-hidden pt-24">

            {/* Neon background glows */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Main container */}
                <div className="relative z-10 max-w-4xl w-full bg-black/40 backdrop-blur-xl
                      rounded-3xl p-10 text-white
                      shadow-[0_0_35px_rgba(34,211,238,0.2)] text-center">

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-10 
                       border-b border-cyan-400/40 pb-2 inline-block
                       text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                        About Me
                    </h1>

                    <div className="md:flex md:gap-12">

                        {/* LEFT CONTENT */}
                        <div className="md:w-1/2 space-y-6">

                            {/* Who you are */}
                            <div className="bg-black/40 p-6 rounded-xl border-l-4 border-cyan-400
                            shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                                <p className="text-lg md:text-xl text-gray-200">
                                    👋 Hi, I’m{" "}
                                    <span className="text-cyan-400 font-semibold">
                                        Mohamed Adhnan
                                    </span>
                                    , a{" "}
                                    <span className="text-yellow-400 font-semibold">
                                        Frontend-focused MERN Developer
                                    </span>{" "}
                                    who enjoys building clean, responsive, and user-friendly
                                    web interfaces using React.
                                </p>
                            </div>

                            {/* Training */}
                            <div className="bg-black/40 p-6 rounded-xl border-l-4 border-purple-400
                            shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                                <p className="text-lg md:text-xl text-gray-300">
                                    I completed formal training through the{" "}
                                    <span className="text-yellow-400 font-semibold">
                                        EMC MERN Stack Development Course
                                    </span>
                                    , gaining hands-on experience building real-world applications
                                    using React, Node.js, Express, and MongoDB.
                                </p>
                            </div>

                            {/* Mindset */}
                            <div className="bg-black/40 p-6 rounded-xl border-l-4 border-yellow-400
                            shadow-[0_0_20px_rgba(250,204,21,0.15)]">
                                <p className="text-lg md:text-xl text-gray-300">
                                    💡 My mindset is simple:{" "}
                                    <span className="text-yellow-400 font-semibold">
                                        “Learn, build, repeat.”
                                    </span>{" "}
                                    I believe consistent practice and real projects are the key to
                                    becoming a better developer.
                                </p>
                            </div>

                        </div>

                        {/* RIGHT: Skills */}
                        <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-2 gap-4 items-start">

                            {[
                                "HTML, CSS & JavaScript",
                                "React & Tailwind CSS",
                                "Node.js & Express",
                                "MongoDB",
                                "Git & GitHub",
                                "REST APIs",
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-black/50 border border-cyan-400/30
                           text-gray-200 p-4 rounded-2xl text-center font-medium
                           shadow-[0_0_15px_rgba(34,211,238,0.2)]
                           hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
                           hover:scale-105 transition-transform cursor-pointer"
                                >
                                    {skill}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

