import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const routes = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/',
            element:<Home></Home>
        }
    ]
}
])

export default routes