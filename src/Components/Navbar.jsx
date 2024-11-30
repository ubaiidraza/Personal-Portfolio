import React from 'react';
import { Link } from 'react-scroll'; 
const Navbar = () => {
  return (
    <nav className="bg-violet-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-50">
          Ubaid Raza
        </div>
        <ul className="flex space-x-8  me-8"> 
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-50 hover:text-orange-500 hover:scale-105 transition-transform duration-300 cursor-default" // cursor-default removes hand cursor
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-50 hover:text-orange-500 hover:scale-105 transition-transform duration-300 cursor-default"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-gray-50 hover:text-orange-500 hover:scale-105 transition-transform duration-300 cursor-default"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="text-gray-50 hover:text-orange-500 hover:scale-105 transition-transform duration-300 cursor-default"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-50 hover:text-orange-500 hover:scale-105 transition-transform duration-300 cursor-default"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
