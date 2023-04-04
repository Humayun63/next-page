import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Books from './components/Books'
import ErrorPage from './components/ErrorPage'
import Loading from './components/Loading'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
     errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'books',
        element:<Books />
      },
      {
        path:'loading',
        element:<Loading></Loading>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
