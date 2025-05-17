import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import AddCoffee from "./pages/AddCoffee.jsx";
import UpdateCoffee from "./pages/UpdateCoffee.jsx";
import { Toaster } from "react-hot-toast";
import CoffeeDetails from "./components/CoffeeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      { path: "addCoffee", Component: AddCoffee },
      {
        path: "update-coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "coffee-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  </StrictMode>
);
