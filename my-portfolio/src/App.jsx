import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import DownloadDescription from "./components/DowloadDescription";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <div className="flex items-center justify-center h-[50vh] w-full bg-gray-100">
        <div className="flex flex-col md:flex-row items-center md:items-center px-12 gap-20">
          {/* Left: Description */}
          <DownloadDescription />
          
          {/* Right: Download Form */}
          <Downloads />
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
