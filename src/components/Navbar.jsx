import React from "react";
import { Link } from "react-scroll";  // Import Link from react-scroll

function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-80 text-white 
                      shadow-lg rounded-full backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 z-50 w-fit">
      <nav>
        <ul className="flex justify-center space-x-3 sm:space-x-6">
          {["About", "Downloads", "Projects", "Work", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()} 
                smooth={true} 
                duration={50} 
                offset={-100}
                className="font-bold text-sm sm:text-xl hover:text-red-500 transition cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
