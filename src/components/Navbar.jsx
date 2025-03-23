import React from "react";

function Navbar() {
  return (
    <header className="bg-black text-white fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex items-center py-4 px-6">
        <h2 className="text-lg font-bold mr-auto">Dimitrios Petrakis</h2>
        <nav>
          <ul className="flex justify-center space-x-6">
            {["About", "Downloads", "Projects", "Work", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
