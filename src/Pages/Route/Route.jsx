import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "../Home";
import Roots from "../Root/Roots";
import Error from "../Error";
import All_Projects from "../All_Projects";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

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
