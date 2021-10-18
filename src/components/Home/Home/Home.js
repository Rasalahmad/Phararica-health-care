import React from 'react';
import Doctors from '../../Doctors/Doctors/Doctors';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;