import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./pages/About.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Project from "./pages/Project.jsx";

let root = ReactDOM.createRoot(document.getElementById("root"));
let allRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "Home",
    element: <App />,
  },
  {
    path: "projects",
    element: <Project />,
  },
  {
    path: "blogs",
    element: <Blog />,
  },
]);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={allRouter} />
  </React.StrictMode>
);
