import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import Project from "./components/Project";
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

      <div className="max-w-2xl mx-auto p-6 bg-white">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <Project
                title="This Portfolio!" 
                techStack="React.js, Tailwind CSS" 
                githubLink="https://github.com/mitso2005/portfolio" 
            />
            <Project
                title="Seek Web Scraper" 
                techStack="Python, Selenium" 
                githubLink="https://github.com/mitso2005/seekscraper" 
            />
            <Project 
                title="Greenpad" 
                techStack="JavaScript, HTML, CSS" 
                githubLink="coming soon.." 
            />
        </div>

      <Footer />
    </div>
  );
}

export default App;
