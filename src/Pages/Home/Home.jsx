import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../About/About";
import Skills from "../Skill/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
