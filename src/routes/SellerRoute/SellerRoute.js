import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SellerHooks from '../../Hooks/SellerHooks';

import Loading from '../../Pages/Shared/Loading/Loading';


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = SellerHooks(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default SellerRoute;