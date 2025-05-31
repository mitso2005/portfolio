import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-80 text-white 
                      shadow-lg rounded-full backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 z-50 w-fit">
      <nav className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        {/* Navigation Links */}
        <ul className="flex justify-center space-x-3 sm:space-x-6">
          {["About", "Downloads", "Projects", "Work", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()} 
                smooth={true} 
                duration={50} 
                offset={-100}
                className="font-bold text-xs sm:text-sm lg:text-xl hover:text-red-500 transition cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider - hidden on mobile, shown on larger screens */}
        <div className="hidden sm:block h-6 w-px bg-gray-500"></div>

        {/* Social Links - hidden on mobile */}
        <div className="hidden sm:flex space-x-3">
          <a href="https://github.com/mitso2005" target="_blank" rel="noopener noreferrer" 
             className="hover:text-red-500 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/dimitrios-petrakis-719443269/" target="_blank" rel="noopener noreferrer"
             className="hover:text-red-500 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/dimitri_petrakis" target="_blank" rel="noopener noreferrer"
             className="hover:text-red-500 transition-colors">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@dimitri_petrakis" target="_blank" rel="noopener noreferrer"
             className="hover:text-red-500 transition-colors">
            <FaTiktok size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
