import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Books from "../../Pages/Books/Books";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
                path:'/category/:id',
                element:<Books></Books>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
           
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
    
])

export default routes