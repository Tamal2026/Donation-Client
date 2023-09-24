import MainLayout from "../Layout/MainLayout";
import Donate from "../Pages/Donate/Donate";
import Donated from "../Pages/Donate/Donated";
import Home from "../Pages/Home/Home";
import Statictics from "../Pages/Statatic/Statictics";
import { createBrowserRouter } from "react-router-dom";

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        
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
                path:'/Stastictics',
                element:<Statictics></Statictics>
            },
            {
                path:'/donations/:id',
                element:<Donated></Donated>,
             loader:()=>fetch('/donations.json')
            }
        ]
    }
]);
export default myCreatedRoute;

