
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashBoard from "../../pages/DashBoard/DashBoard/DashBoard";
import SignUp from "../../pages/SignUp/SignUp";



 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
           {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/appointment',
                element:<Appointment></Appointment>
            } 
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>
    }
])

export default router;