import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../view/home/Home'
import Login from '../view/login/Login'

const RouterPath = () => {
    const router = createBrowserRouter([
      { 
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
    ])

  return <RouterProvider router={router} />
}

export default RouterPath
