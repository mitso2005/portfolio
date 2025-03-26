import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import Project from "./components/Project";
import DownloadDescription from "./components/DowloadDescription";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <About />
      </section>

      <section id="downloads">
        <div className="flex items-center justify-center w-full px-12 py-8 bg-gray-100">
          <div className="flex max-w-7xl mx-auto items-center md:items-center gap-20">
            {/* Left: Description */}
            <DownloadDescription />
            
            {/* Right: Download Form */}
            <Downloads />
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="max-w-7xl mx-auto px-12 py-8 bg-white">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
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
          />
        </div>
      </section>

      <section id="work">
        <div className="max-w-7xl mx-auto px-12 py-8 bg-white">
          <h2 className="text-3xl font-bold mb-2">Relevant Work Experience</h2>
          <Work
              title="Web Developer"
              company="YellaTerra"
              time="2024 - Present" 
              website="https://store.yellaterra.com.au/"
          />
        </div>
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
