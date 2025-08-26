import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <Home />
        <About />
        <Skills />
        <Projects/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
