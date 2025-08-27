import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "../Home";
import Roots from "../Root/Roots";
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
      
      
     
    ],
  },
]);
