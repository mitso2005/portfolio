import React from "react";

function Navbar() {
  return (
    <header className="bg-black text-white fixed w-full top-0 shadow-md z-50">
      <nav className="container mx-auto py-4 px-6">
        <ul className="flex justify-center space-x-6">
          {["About", "Downloads", "Projects", "Work", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-red-500 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
