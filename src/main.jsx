import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/index.css"
import router from "./pages/router"
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
