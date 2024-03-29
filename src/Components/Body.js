import React from 'react'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Login from './UserValidation/Login';
import Browse from './BrowseSection/Browse';
const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path:"/browse",
            element:<Browse/>,
        }
    ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
