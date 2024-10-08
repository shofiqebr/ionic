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
import HealthManagement from "../pages/ionicerp/healthManagement/HealthManagement";
import Loan from "../pages/ionicerp/loan/Loan";
import Agriculture from "../pages/ionicerp/agriculture/Agriculture";
import Karmochary from "../pages/kormochary/Karmochary";
import MainShop from "./MainShop";
import IonicShop from "../pages/ionicshop/IonicShop";
import MainPharma from "./MainPharma";
import IonicPharma from "../pages/ionicpharma/IonicPharma";
import MainKarmochary from "./MainKarmochary";
import Services from "../pages/kormochary/Services";
import ServicesErp from "../pages/ionicerp/ServicesErp";
import ProductDetails from "../pages/home/product/ProductDetails";
import DifferentBrands from "../pages/ionicerp/DifferentBrands";





export const router = createBrowserRouter([

    // -----------------home route----------------
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
        {
            path:'karmochary',
            element: <Karmochary/>
        },
    
      ]
    },
    // -----------------ionic shop----------------
    {
        path: "/ionicshop",
        element: <MainShop/>,
        children:[
            {
                path:'/ionicshop',
                element:<IonicShop/>
            },
          
        ]
    },
    // -----------------ionic kormochary----------------
    {
        path: "/karmochary",
        element: <MainKarmochary/>,
        children:[
            {
                path:'/karmochary',
                element:<Karmochary/>
            },
            {
                path:'services',
                element:<Services/>
            },
          
        ]
    },
    // -----------------ionic pharma----------------
    {
        path: "/ionicpharma",
        element: <MainPharma/>,
        children:[
            {
                path:'/ionicpharma',
                element:<IonicPharma/>
            },
          
        ]
    },
    // ----------------ionic erp-----------------
    {
        path: "/ionicerp",
        element: <Main/>,
        children:[
            {
                path:'/ionicerp',
                element:<HomeErp/>
            },
            {
                path:'manufacturing-industry-ionic-erp-software',
                element:<Manufacturing/>
            },
            {
                path:'healthcare',
                element:<HealthCare/>
            },
            {
                path:'trading-ionic-erp',
                element:<TradingErp/>
            },
            {
                path:'chemical-industry-ionic-erp',
                element:<Chemical/>
            },
            {
                path:'healthcare-ionic-erp',
                element:<HealthManagement/>
            },
            {
                path:'lone-management-ionic-erp',
                element:<Loan/>
            },
            {
                path:'agriculture-ionic-erp',
                element:<Agriculture/>
            },
            {
                path:'all-services-ionic-erp',
                element:<ServicesErp/>
            },
            {
                path:'all-products-ionic-erp',
                element:<DifferentBrands/>
            },
            
        ]
    },
  ]);