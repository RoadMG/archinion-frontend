import { createBrowserRouter } from "react-router-dom";
import Contact from "./Router/Contact";
import Home from "./Router/Home";
import Inform from "./Router/Inform";
import Project from "./Router/Project";
import About from "./Router/About";
import Projectdetail from "./Router/Projectdetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/project", element: <Project /> },
  { path: "/project/:projectPk", element: <Projectdetail /> },
  { path: "/inform", element: <Inform /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
]);

export default router;
