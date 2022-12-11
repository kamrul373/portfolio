import React from 'react';
import Banner from '../../../components/Banner/Banner';
import ContactMe from '../../../components/ContactMe/ContactMe';
import Projects from '../../../components/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;