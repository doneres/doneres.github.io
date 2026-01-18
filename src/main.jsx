import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/home";
import Teaching from "./pages/teaching";
import CourseDetail from "./pages/course";
import Projects from "./pages/projects";
import About from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "teaching", element: <Teaching /> },
      { path: "courses/:slug", element: <CourseDetail /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
