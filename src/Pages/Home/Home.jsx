import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../About/About";
import Skills from "../Skill/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Academic from "../Academic/Academic";


const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Academic />
      <Contact />
    </div>
  );
};

export default Home;
