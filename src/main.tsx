import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthProvider from './contexts/AuthContext.tsx'
import Login from './Login.tsx'
import Registro from './Registro.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path:"/registro",
    element: <Registro></Registro>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
