import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import AddBooks from "../../Pages/AddBooks/AddBooks";
import Blogs from "../../Pages/Blogs/Blogs";
import Books from "../../Pages/Books/Books";
import Allbuyers from "../../Pages/Dashboard/Allbuyers/Allbuyers";
import Allsellers from "../../Pages/Dashboard/Allsellers/Allsellers";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyBookings from "../../Pages/MyBookings/MyBookings";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><Books></Books></PrivateRoute>,
                loader: ({ params }) => fetch(`https://resale-market-assaignment-server.vercel.app/category/${params.name}`)
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path:'/dashboard/addbooks',
                element:<SellerRoute><AddBooks></AddBooks></SellerRoute>
            },
            {
                path:'/dashboard/mybookings',
                element:<BuyerRoute><MyBookings></MyBookings></BuyerRoute>
            },
            {
                path:'/dashboard/seller',
                element:<AdminRoute><Allsellers></Allsellers></AdminRoute>
            },
            {
                path:'/dashboard/buyer',
                element:<AdminRoute><Allbuyers></Allbuyers></AdminRoute>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default routes