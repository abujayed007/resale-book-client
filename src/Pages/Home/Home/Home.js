import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import BuyerHook from '../../../Hooks/BuyerHook';
import About from '../../About/About';
import MyBookings from '../../MyBookings/MyBookings';
import Banner from '../Banner/Banner';

const Home = () => {
    const {user} = useContext(AuthContext)
    const [isBuyer, isBuyerLoading] = BuyerHook(user?.email);

    return (
        <div>

            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;