import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AdminHooks from '../Hooks/adminHooks';
import BuyerHook from '../Hooks/BuyerHook';
import SellerHooks from '../Hooks/SellerHooks';
import Navbar from '../Pages/Shared/Header/Navbar';
import Loading from '../Pages/Shared/Loading/Loading';

const DashboardLayout = () => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin] = AdminHooks(user?.email);
    const [isBuyer] = BuyerHook(user?.email);
    const [isSeller] = SellerHooks(user?.email);

if(loading){
    <Loading></Loading>
}
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isBuyer && 
                            <li><Link to="/dashboard/mybookings">My Bookings</Link></li>
                        }
                        {

                          isSeller && <li><Link to="/dashboard/addbooks">Add Book</Link></li>}
                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/seller">All Seller</Link></li>
                                <li><Link to="/dashboard/buyer">All Buyer</Link></li>
                            </>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;