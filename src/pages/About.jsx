import React from 'react'
import AboutBanner from '../components/About/AboutBanner';
import AboutFounder from '../components/About/AboutFounder';
import AboutProfile from '../components/About/AboutProfile';
import AboutTeaching from '../components/About/AboutTeaching';
import AboutEducation from '../components/About/AboutEducation';
import AboutGrowing from '../components/About/AboutGrowing';
import AboutLearning from '../components/About/AboutLearning';
import AboutCards from '../components/About/AboutCards';

function About() {
    return ( 
        <>
        <AboutBanner />
        <AboutFounder />
        <AboutProfile />
        <AboutTeaching />
        <AboutEducation />
        <AboutGrowing />
        <AboutLearning />
        <AboutCards />
        </>
     );
}

export default About;