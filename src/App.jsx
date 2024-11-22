import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={routes} />;
}
