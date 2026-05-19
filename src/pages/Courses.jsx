import React from 'react'
import CoursesHero from '../components/CoursesSection/CoursesHero';
import IBProgramSection from '../components/CoursesSection/IBProgramSection'
import IGCSEProgramSection from '../components/CoursesSection/IGCSEProgramSection';
import GCSEProgramSection from '../components/CoursesSection/GCSEProgramSection'
import ALevelProgramSection from '../components/CoursesSection/ALevelProgramSection'
import FreeDemoSection from '../components/CoursesSection/FreeDemoSection';


function Courses() {
    return ( 
        <>
        <CoursesHero />
        <IBProgramSection />
        <IGCSEProgramSection />
        <GCSEProgramSection />
        <ALevelProgramSection />
        <FreeDemoSection />
        </>
     );
}

export default Courses;