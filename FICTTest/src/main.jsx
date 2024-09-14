import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './components/MainLayout.jsx'
import Login from './routes/Login.jsx';
import './index.css'
import Users from './routes/Users.jsx';

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
