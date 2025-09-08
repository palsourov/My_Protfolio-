import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Home/Home";
import All_Projects from "../AllProjects/All_Projects";
import About from "../About/About"; 
import Roots from "../Root/Roots";
import Skills from "../Skill/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Error from "../Error";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <Error />, 
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        index: true,
        path: "/All_Projects",
        Component: All_Projects,
      },
      {
        index: true,
        path: "/About",
        Component: About,
      },
      {
        index: true,
        path: "/Skills",
        Component: Skills,
      },
      {
        index: true,
        path: "/Projects",
        Component: Projects,
      },
      {
        index: true,
        path: "/Contact",
        Component:Contact,
      },
      
      
     
    ],
  },
]);
