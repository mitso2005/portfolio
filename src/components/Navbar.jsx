import React from "react";
import { Link } from "react-scroll";  // Import Link from react-scroll

function Navbar() {
  return (
    <header className="bg-black text-white fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex items-center py-4 px-6">
        <h2 className="text-lg font-bold mr-auto">Dimitrios Petrakis</h2>
        <nav>
          <ul className="flex justify-center space-x-6">
            {["About", "Downloads", "Projects", "Work", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()} // Scroll to the corresponding section
                  smooth={true} // Enable smooth scroll
                  duration={100} // Scroll duration in milliseconds
                  offset={-50} // Adjust the offset to account for the fixed navbar
                  className="hover:text-red-500 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
