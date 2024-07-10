import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import WebHosting from "../pages/webHosting/WebHosting";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/contact',
            element: <Contact/>
        },
        {
            path:'/webHosting',
            element: <WebHosting/>
        },
      ]
    },
  ]);