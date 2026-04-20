import React from "react";

const projectData = [
  {
    title: "Todo App",
    desc: "CRUD app using React",
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    desc: "API based weather app",
    live: "#",
    github: "#",
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
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-[1.02] hover:bg-white/20 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.desc}
            </p>

            <div className="flex gap-4">
              <a
                href={project.live}
                className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Live
              </a>

              <a
                href={project.github}
                className="border border-white/30 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;