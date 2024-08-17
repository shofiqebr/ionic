import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import WebHosting from "../pages/webHosting/WebHosting";
import ResellerServer from "../pages/resellerServer/ResellerServer";
import DedicatedServer from "../pages/dedicatedServer/DedicatedServer";
import ShikkhaChat from "../pages/shikkhaChat/ShikkhaChat";
import Main from "./Main";
import HomeErp from "../pages/ionicerp/homeErp/HomeErp";
import Manufacturing from "../pages/ionicerp/manufacturing/Manufacturing";
import HealthCare from "../pages/ionicerp/healthCare/HealthCare";
import TradingErp from "../pages/ionicerp/tradingErp/TradingErp";
import Chemical from "../pages/ionicerp/chemical-industry/Chemical";





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
        path: "/homeErp",
        element: <Main/>,
        children:[
            {
                path:'/homeErp',
                element:<HomeErp/>
            },
            {
                path:'manufacturing',
                element:<Manufacturing/>
            },
            {
                path:'healthCare',
                element:<HealthCare/>
            },
            {
                path:'tradingErp',
                element:<TradingErp/>
            },
            {
                path:'chemical-industry-ionic-erp',
                element:<Chemical/>
            },
        ]
    }
  ]);