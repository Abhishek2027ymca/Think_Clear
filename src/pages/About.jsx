import React from 'react'
import AboutBanner from '../components/About/AboutBanner';
import AboutFounder from '../components/About/AboutFounder';
import AboutProfile from '../components/About/AboutProfile';
import AboutTeaching from '../components/About/AboutTeaching';
import AboutEducation from '../components/About/AboutEducation';

function About() {
    return ( 
        <>
        <AboutBanner />
        <AboutFounder />
        <AboutProfile />
        <AboutTeaching />
        <AboutEducation />
        </>
     );
}

export default About;