import React from 'react';
import Banner from '../Banner/Banner';
import Infocards from '../Infocards/Infocards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div className='mx-5'>
            
            <Banner></Banner>
            <Infocards></Infocards>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;