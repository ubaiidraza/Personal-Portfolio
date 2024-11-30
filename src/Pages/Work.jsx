// Portfolio.js
import React from 'react';

const projects = [
  {
    id: 1,
    imgSrc: 'path-to-your-image1.jpg',
    title: 'Web Design',
    sourceCodeLink: 'https://github.com/your-username/project1',
    liveDemoLink: 'https://project1-demo.com',
  },
  {
    id: 2,
    imgSrc: 'path-to-your-image2.jpg',
    title: 'Web Development',
    sourceCodeLink: 'https://github.com/your-username/project2',
    liveDemoLink: 'https://project2-demo.com',
  },
  {
    id: 3,
    imgSrc: 'path-to-your-image3.jpg',
    title: 'Graphic Design',
    sourceCodeLink: 'https://github.com/your-username/project3',
    liveDemoLink: 'https://project3-demo.com',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-indigo-900 py-10 px-5 md:px-20">
      <h2 className="text-white text-3xl font-bold text-center mb-8">
        My <span className="text-orange-500">Portfolio</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="relative group">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-800 bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center rounded-lg space-y-4">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <div className="flex space-x-4">
                {/* View Source Code Button */}
                <a
                  href={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition duration-300"
                >
                  View Source Code
                </a>
                {/* Live Demo Button */}
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
