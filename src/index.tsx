import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import FieldClashersHome from "./components/apps/fieldClashers/FieldClashersHome";
import Error from "./components/construction/Error";
import About from "./components/home/about/About";
import Contact from "./components/home/contact/Contact";
import CoverPage from "./components/home/cover/CoverPage";
import Education from "./components/home/education/Education";
import Experience from "./components/home/experience/Experience";
import Home from "./components/home/Home";
import Portfolio from "./components/home/portfolio/Portfolio";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="/cover" />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
  {
    path: "cover",
    element: <CoverPage />,
  },
  {
    path: "apps/field-clashers",
    element: <FieldClashersHome />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
