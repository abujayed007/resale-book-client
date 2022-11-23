import React from 'react';
import { Outlet, RouterProvider } from 'react-router-dom';
import Navbar from '../Pages/Shared/Header/Navbar';
;


const Main = () => {
    return (
       <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
       </div>
    );
};

export default Main;