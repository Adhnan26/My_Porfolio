import avatar from "../assets/avatar.jfif";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

function Home() {
    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6 relative overflow-hidden pt-28 pb-14">

            {/* Neon background accents */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

            <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10 mt-5">

                {/* LEFT CONTENT */}
                <div className="space-y-6 bg-black/40 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.25)]">

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-600">
                        Hey, I’m{" "}
                        <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                            Adhnan
                        </span>{" "}
                        👋
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200">
                        Frontend-focused{" "}
                        <span className="text-yellow-400 font-semibold">
                            MERN Developer
                        </span>{" "}
                        building clean UI and high-performance web applications.
                    </p>

                    <p className="text-gray-300 text-lg md:text-xl">
                        I specialize in creating responsive, scalable, and user-friendly
                        applications using React and the MERN stack, with a strong focus on
                        UI quality and performance.
                    </p>

                    <div className="flex gap-4 flex-wrap pt-2">
                        <a
                            href="/projects"
                            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold 
                         hover:bg-yellow-300 transition transform hover:scale-105
                         shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                        >
                            View Projects
                        </a>

                        <a
                            href="/contact"
                            className="border border-cyan-400 text-cyan-300 px-6 py-3 rounded-full 
                         hover:bg-cyan-400 hover:text-black transition transform hover:scale-105
                         shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex flex-col items-center gap-8 mb-2">

                    {/* Avatar */}
                    <div className="rounded-full p-2 bg-gradient-to-r from-cyan-400 to-purple-500 
                          shadow-[0_0_35px_rgba(168,85,247,0.6)]">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="w-72 md:w-80 rounded-full border-4 border-black"
                        />
                    </div>

                    {/* Tech Stack */}
                    <div className="grid grid-cols-3 gap-4 text-white">

                        <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-xl 
                            shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                            <FaReact className="text-cyan-400 text-xl" />
                            <span className="text-sm font-medium">React</span>
                        </div>

                        <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-xl 
                            shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                            <SiTailwindcss className="text-sky-400 text-xl" />
                            <span className="text-sm font-medium">Tailwind</span>
                        </div>

                        <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-xl 
                            shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                            <FaNodeJs className="text-green-400 text-xl" />
                            <span className="text-sm font-medium">Node</span>
                        </div>

                        <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-xl 
                            shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                            <SiMongodb className="text-green-500 text-xl" />
                            <span className="text-sm font-medium">MongoDB</span>
                        </div>

                        <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-xl 
                            shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                            <FaGitAlt className="text-orange-500 text-xl" />
                            <span className="text-sm font-medium">Git</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
