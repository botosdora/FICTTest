import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import Login from "./routes/Login.jsx";
import Users from "./routes/Users.jsx";
import Searches from "./routes/Searches.jsx";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace={true} />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/searches",
        element: <Searches />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
