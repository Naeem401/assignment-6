import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import LandingPage from "../components/LandingPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <LandingPage/> },
        { path: "/about", element: <h1>About</h1> },
        { path: "/contact", element: <h1>Contact</h1> },
      ],
    },
  ]);