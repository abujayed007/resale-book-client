import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../images/icons/icon.png'

const Header = () => {
    const navItems = <>
        <li>Home</li>
        <li>Categories</li>
        <li>Login</li>
        <li>Sign Up</li>
        <li>Log Out</li>
    </>


    return (
        <div className="navbar flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case font-bold text-xl text-teal-600 ">
                    <img className='h-7 mx-1' src={icon} alt="" />
                     Books
                    <strong className='text-orange-500 mx-1'> Gallery</strong></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-x-2 text-orange-500 font-bold bold mx-7">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;