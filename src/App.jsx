import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//pages
import {
  AboutUs,
  HomeLayout,
  Landing,
  Inequality,
  Solutions,
  CallToAction,
  Error,
} from "./pages";

//components

//loaders

//actions

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "inequality",
        element: <Inequality />,
      },
      {
        path: "solutions",
        element: <Solutions />,
      },
      {
        path: "callToAction",
        element: <CallToAction />,
      },
    ],
  },
]);

export default function App() {
  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}
