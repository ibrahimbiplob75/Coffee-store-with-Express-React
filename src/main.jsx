import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './ErrorPage.jsx';
import Home from './Components/Home.jsx';
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffe from "./Components/UpdateCoffe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/order"),
      },
      {
        path: "/order",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/order/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// 
// 
// 
// 
// https://i.ibb.co/7VNPtmh/5.png
// https://i.ibb.co/n6P3yxy/6.png 