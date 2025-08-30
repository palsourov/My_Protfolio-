import React from "react";

const projects = [
  { 
    name: "Life Insurance", 
    description: "A comprehensive life insurance policy management system.", 
    clientRepo: " https://github.com/Programming-Hero-Web-Course4/b11a12-client-side-palsourov", 
    serverRepo: "https://github.com/Programming-Hero-Web-Course4/b11a12-server-side-palsourov", 
    live: "https://roaring-kataifi-0052fc.netlify.app" 
  },
  { 
    name: "Tour Booking", 
    description: "An online platform for booking tours and travel packages.", 
    clientRepo: " https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-palsourov", 
    serverRepo: " https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-palsourov", 
    live: "https://rococo-gnome-608d30.netlify.app/" 
  },
  { 
    name: "MY Bank", 
    description: "A banking application and transaction management.", 
    clientRepo: "https://github.com/programming-hero-web-course1/b11a9-react-authentication-palsourov", 
    serverRepo: "https://github.com/programming-hero-web-course1/b11a9-react-authentication-palsourov", 
    live: "https://dashing-travesseiro-25ad91.netlify.app/" 
  },
];

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-gray-900 text-center">My Projects</h1>
      <section id="projects" className="py-20 mt-10 rounded-xl px-6 bg-gray-800 text-white text-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition transform"
            >
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a 
                  href={project.clientRepo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition"
                >
                  Client 
                </a>
                <a 
                  href={project.serverRepo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition"
                >
                  Server 
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
