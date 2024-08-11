import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import WebHosting from "../pages/webHosting/WebHosting";
import ResellerServer from "../pages/resellerServer/ResellerServer";
import DedicatedServer from "../pages/dedicatedServer/DedicatedServer";
import ShikkhaChat from "../pages/shikkhaChat/ShikkhaChat";
import Main from "./Main";
import Home2 from "../pages/ionicerp/home/home2/Home2";




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
        {
            path:'/resellerServer',
            element: <ResellerServer/>
        },
        {
            path:'/dedicatedServer',
            element: <DedicatedServer/>
        },
        {
            path:'/shikkha',
            element: <ShikkhaChat/>
        },
      ]
    },
    {
        path: "/home2",
        element: <Main/>,
        children:[
            {
                path:'/home2',
                element:<Home2/>
            }
        ]
    }
  ]);