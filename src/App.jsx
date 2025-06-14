import React, { Suspense, useState, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import Project from "./components/Project";
import DownloadDescription from "./components/DowloadDescription";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ResumeButton from "./components/ResumeButton";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="mx-auto">
          <Navbar />
          <ResumeButton />
          <div className="container mx-auto px-4 lg:px-8">
            <section id="about">
              <About />
            </section>

            <section id="downloads">
              <div className="flex items-center justify-center w-full py-8 bg-gray-100">
                <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-8 md:gap-20 px-4">
                  {/* Left: Description */}
                  <DownloadDescription />

                  {/* Right: Download Form */}
                  <Downloads />
                </div>
              </div>
            </section>

            <section id="projects">
              <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
                <h2 className="text-3xl font-bold mb-2">Projects</h2>
                <Project
                  title="Between Friends"
                  techStack="React Native, Firebase, Expo, TypeScript, Google Maps API"
                />
                <Project
                  title="This Portfolio!"
                  techStack="React.js, Tailwind CSS, EmailJS"
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
              <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
                <h2 className="text-3xl font-bold mb-2">Relevant Work Experience</h2>
                <Work
                  title="Front-end Engineer"
                  company="CISSA (Computing and Information Systems Students Association)"
                  time="2025 - Present"
                  website="https://cissa.org.au/"
                />
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
          </div>
          <Footer />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
