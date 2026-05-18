import React from 'react'
import AboutBanner from '../components/About/AboutBanner';
import AboutFounder from '../components/About/AboutFounder';
import AboutProfile from '../components/About/AboutProfile';
import AboutTeaching from '../components/About/AboutTeaching';

function About() {
    return ( 
        <>
        <AboutBanner />
        <AboutFounder />
        <AboutProfile />
        <AboutTeaching />
        </>
     );
}

export default About;