import React from "react";
import image1 from "../assets/images/aakar1.jpg";
import image2 from "../assets/images/Dog.jpeg";

const projects = [
  {
    title: "Aakar",
    description: "Reels that boosted their sales; we also enhanced their Facebook page presence.",
    image: image1,
  },
  {
    title: "KukurTihar",
    description: "Helped run a successful campaign in the United States and making their official website.",
    image: image2,
  },
];

const Project = () => {
  return (
    <section className="bg-[#DAD7CD] py-16 px-4" id="projects">
      <div className="max-w-5xl mx-auto text-center">

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#344E41] mb-1 uppercase">
              2
            </h3>
            <p className="text-xl sm:text-2xl font-semibold text-[#344E41] tracking-wide">
              Satisfied Clients
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#344E41] mb-1 uppercase">
              2
            </h3>
            <p className="text-xl sm:text-2xl font-semibold text-[#344E41] tracking-wide">
              Ongoing Projects
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#344E41] mb-1 uppercase">
              1
            </h3>
            <p className="text-xl sm:text-2xl font-semibold text-[#344E41] tracking-wide">
              Completed Projects
            </p>
          </div>
        </div>

        {/* Projects Title */}
        <h2 className="text-4xl font-bold text-[#344E41] mb-12">Our Past Projects</h2>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md transform transition-all duration-500 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "400px" }}
              />

              {/* Description Box */}
              <div className="p-6 text-left bg-[#344E41]">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;