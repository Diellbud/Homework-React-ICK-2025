import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./App.jsx";
import "./style.css"

import NotFoundPage from "./pages/NotFoundPage.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import TableFilePage from "./pages/TableFilePage.jsx";
const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/products/:id",
      element: <SingleProduct />,
    },
    {
      path: "/pages/tableFilePage.jsx",
      element: <TableFilePage />,
    }
  ]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)