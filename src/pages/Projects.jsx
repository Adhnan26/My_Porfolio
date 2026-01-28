import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6  bg-[#020617] relative overflow-hidden pt-20">

      {/* Neon background glows */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 mt-3">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12  text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* PROJECT CARD */}
          {[
            {
              img: project5,
              title: "NeoCart E-Commerce Web",
              desc: "Full Stack MERN e-commerce application with authentication,cart,and order management",
              live: "https://e-commerce-web-two.vercel.app/",
              github: "https://github.com/Adhnan26/E-Commerce-Web",
            },
            {
              img: project1,
              title: "BulkMail App",
              desc: "Bulk mail application with Excel upload, message composition, and email sending using full-stack integration.",
              live: "https://frontend-neon-nine-79.vercel.app",
              github: "https://github.com/Adhnan26/BulkMail-App",
            },
            {
              img: project2,
              title: "Netflix Clone",
              desc: "Netflix-style UI built using React and Tailwind CSS with responsive design.",
              live: "https://netflix-sign-in-page-frontend.vercel.app",
              github: "https://github.com/Adhnan26/Netflix-SignIn-page-frontend",
            },
            {
              img: project3,
              title: "Movie App",
              desc: "Movie application with API integration to fetch and display real-time movie data.",
              live: "https://movie-web-using-api.vercel.app",
              github: "https://github.com/Adhnan26/Movie-Web-Using-API",
            },
            {
              img: project4,
              title: "Weather App",
              desc: "Weather application that displays real-time weather data using API integration.",
              live: "https://weather-app-eight-beryl-79.vercel.app",
              github: "https://github.com/Adhnan26/Weather-App",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-[#020617]/80 backdrop-blur-xl rounded-3xl overflow-hidden
                       border border-cyan-400/20
                       shadow-[0_0_25px_rgba(34,211,238,0.15)]
                       hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]
                       hover:scale-[1.02] transition-transform"
            >

              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-gray-200 space-y-4">
                <h2 className="text-2xl font-semibold text-yellow-400">
                  {project.title}
                </h2>

                <p className="text-gray-300">
                  {project.desc}
                </p>

                <div className="flex gap-6 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 font-medium hover:text-cyan-300 transition
                             drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 font-medium hover:text-yellow-300 transition
                             drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Projects;
