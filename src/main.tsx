import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthProvider from './contexts/AuthContext.tsx'
import Login from './Login.tsx'
import Registro from './Registro.tsx'
import Home from './Home.tsx'
import Profile from './Profile.tsx'
import Base from './Base.tsx'
import Ship from './Ship.tsx'
import Market from './Market.tsx'
import Mission from './Mission.tsx'
import Inventory from './Inventory.tsx'

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
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/profile",
    element: <Profile></Profile>
  },
  {
    path: "/base",
    element: <Base></Base>
  },
  {
    path: "/ship",
    element: <Ship></Ship>
  },
  {
    path: "/market",
    element: <Market></Market>
  },
  {
    path: "/mission",
    element: <Mission></Mission>
  },
  {
    path: "/inventory",
    element: <Inventory></Inventory>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
