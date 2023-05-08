import React from 'react';
import Banner from '../Banner/Banner';
import Infocards from '../Infocards/Infocards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            
            <Banner></Banner>
            <Infocards></Infocards>
            <MakeAppointment></MakeAppointment>
            <Services></Services>
        </div>
    );
};

export default Home;