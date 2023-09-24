import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Errorelemt from './Components/Erroreelemt/Errorelemt';
import Jobdetails from './Components/Jobdetails/Jobdetails';
import Appliedjobs from './Components/Appliedjobs/Appliedjobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorelemt></Errorelemt>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/appliedjobs",
        element: <Appliedjobs></Appliedjobs>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "/job/:id",
        element: <Jobdetails></Jobdetails>,
        loader: () => fetch('jobs.json')
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
