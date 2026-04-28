import React from "react";
import img01 from "../assets/project_img01.png"

const projectData = [
  {
    title: "Ecomm React App",
    desc: "A fully functional e-commerce application with authentication, cart management, and a complete checkout flow. Includes protected routes and persistent state.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "React Router"],
    live: "https://ecomm-react-djucy0725-geet1.vercel.app",
    github: "https://github.com/GeetanshuPatil/Ecomm-react-app",
    image: img01, 
  },
  
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black to-gray-900 text-white px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-[1.02] transition duration-300"
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/20 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/30 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;