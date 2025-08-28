import React from "react";

const projects = [
  { 
    name: "Project 1", 
    description: "React & Tailwind Portfolio", 
    repo: "https://github.com/yourusername/project1", 
    live: "https://project1-demo.com" 
  },
  { 
    name: "Project 2", 
    description: "E-commerce App", 
    repo: "https://github.com/yourusername/project2", 
    live: "https://project2-demo.com" 
  },
  { 
    name: "Project 3", 
    description: "Chat App with Socket.io", 
    repo: "https://github.com/yourusername/project3", 
    live: "https://project3-demo.com" 
  },
];

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl  font-semibold text-gray-900 text-center">My Projects</h1>
    <section id="projects" className="py-20 mt-10 rounded-xl px-6 bg-gray-800 text-white text-center">
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition transform"
          >
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex justify-center gap-4">
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition"
              >
                Repository
              </a>
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 text-black px-4 py-2 rounded font-semibold hover:bg-green-600 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
};

export default Projects;
