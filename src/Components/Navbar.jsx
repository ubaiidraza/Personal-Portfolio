import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-violet-950 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-50">
          Ubaid Raza
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-8 absolute md:static bg-violet-950 md:bg-transparent left-0 top-16 md:top-auto w-full md:w-auto px-4 md:px-0 py-4 md:py-0`}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="block text-gray-50 hover:text-orange-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block text-gray-50 hover:text-orange-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="block text-gray-50 hover:text-orange-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="block text-gray-50 hover:text-orange-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block text-gray-50 hover:text-orange-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
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
