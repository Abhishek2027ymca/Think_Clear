import React from 'react'
import AboutBanner from '../components/About/AboutBanner';
import AboutFounder from '../components/About/AboutFounder';
import AboutProfile from '../components/About/AboutProfile';
import AboutTeaching from '../components/About/AboutTeaching';
import AboutEducation from '../components/About/AboutEducation';
import AboutGrowing from '../components/About/AboutGrowing';
import AboutLearning from '../components/About/AboutLearning';
import AboutCards from '../components/About/AboutCards';
import AboutPurpose from '../components/About/AboutPurpose';
import AboutTeam from '../components/About/AboutTeam';
import AboutFAQ from '../components/About/AboutFAQ';
import AboutContact from '../components/About/AboutContact';
import AboutGalary from '../components/About/AboutGalary';
import AboutMath from '../components/About/AboutMath';
import AboutAcademic from '../components/About/AboutAcademic';

function About() {
    return ( 
        <>
        <AboutBanner />
        <AboutFounder />
        <AboutMath />
        <AboutAcademic />
        <AboutProfile />
        <AboutTeaching />
        <AboutEducation />
        <AboutGrowing />
        <AboutLearning />
        <AboutCards />
        <AboutPurpose />
        <AboutTeam />
        <AboutGalary />
        <AboutFAQ />
        <AboutContact />
        </>
     );
}

export default About;