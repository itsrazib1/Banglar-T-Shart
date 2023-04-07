import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Header from "./Conponent/Header/Header";
import Home from "./Conponent/Home/Home";
import Main from "./Layout/Main";
import Orderreview from "./Conponent/Orderreview/Orderreview";
import Gandpha from "./Conponent/Gandpha/Gandpha";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('tshart.json')
      },
      {
        path: "review",
        element: <Orderreview></Orderreview>,
      },
      {
        path: "/Gandpha",
        element: <Gandpha></Gandpha>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
