import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto text-center space-y-4">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
            <FaTiktok size={24} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
            <FaGithub size={24} />
          </a>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex justify-center space-x-6 text-sm">
            {["About", "Downloads", "Projects", "Work", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright & Tech Stack */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Dimitri Petrakis. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
