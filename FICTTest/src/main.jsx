import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './components/MainLayout.jsx'
import Login from './routes/Login.jsx';
import Users from './routes/Users.jsx';
import './index.css' 
import Searches from './routes/Searches.jsx';

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
        path: "/searches",
        element: <Searches />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
