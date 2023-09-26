import MainLayout from "../Layout/MainLayout";
import Donate from "../Pages/Donate/Donate";
import Donated from "../Pages/Donate/Donated";
import Home from "../Pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Error from "../Component/Error";
import { PieChart } from "recharts";
const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        
        children:[
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/info.json')
            }
,            
            {
                path:'/Donate',
        element:<Donate></Donate>
            },
            {
                path:'/PieChart',
                element:<PieChart></PieChart>
            },
            {
                path:'/info/:id',
                element:<Donated></Donated>,
             loader:()=>fetch('/info.json')
            }
           
        ]
    }
]);
export default myCreatedRoute;

