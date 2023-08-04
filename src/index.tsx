import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';
import FieldClashersHome from './components/apps/fieldClashers/FieldClashersHome';
import ComingSoon from './components/construction/ComingSoon';
import Error from './components/construction/Error';
import Home from './components/home/Home';
import About from './components/home/about/About';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Education from './components/home/education/Education';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Navigate replace to="/about"/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "education",
        element: <Education/>
      },
      {
        path: "work",
        element: <ComingSoon/>
      },
      {
        path: "portfolio",
        element: <ComingSoon/>
      }
    ]
  },
  {
    path: "apps/field-clashers",
    element: <FieldClashersHome/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
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
