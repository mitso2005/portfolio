import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Downloads />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
