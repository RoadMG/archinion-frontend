import { createBrowserRouter } from "react-router-dom";
import Contact from "./Router/Contact";
import Home from "./Router/Home";
import Inform from "./Router/Inform";
import Project from "./Router/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/project", element: <Project /> },
  { path: "/inform", element: <Inform /> },
  { path: "/contact", element: <Contact /> },
]);

export default router;
