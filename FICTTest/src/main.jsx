import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './components/MainLayout.jsx'
import Login from './routes/Login.jsx';
import Users from './routes/Users.jsx';
import Register from './routes/Register.jsx';
import './index.css' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <Login />

      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/users",
        element: <Users />
      },
      {
        path: "/searches"
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
