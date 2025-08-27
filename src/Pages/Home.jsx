import React from "react";
import Hero from "../Components/Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
