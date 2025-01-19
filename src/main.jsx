import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Products from './components/Products.jsx'
import AboutUs from './components/AboutUs.jsx'
import Query from './components/RaiseQueryFullScreen.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'about',
        element: <AboutUs />
      },
      {
        path: 'query',
        element: <Query />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
