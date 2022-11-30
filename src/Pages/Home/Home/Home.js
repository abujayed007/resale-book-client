import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import BuyerHook from '../../../Hooks/BuyerHook';
import About from '../../About/About';
import MyBookings from '../../MyBookings/MyBookings';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    const {user} = useContext(AuthContext)
    const [isBuyer, isBuyerLoading] = BuyerHook(user?.email);

    return (
        <div>

            <Banner></Banner>
            <About></About>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;