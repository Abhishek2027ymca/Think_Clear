import React from 'react'
import CoursesHero from '../components/CoursesSection/CoursesHero';
// import IBProgramSection from '../components/CoursesSection/IBProgramSection'
// import IGCSEProgramSection from '../components/CoursesSection/IGCSEProgramSection';
// import GCSEProgramSection from '../components/CoursesSection/GCSEProgramSection'
// import ALevelProgramSection from '../components/CoursesSection/ALevelProgramSection'
import FreeDemoSection from '../components/CoursesSection/FreeDemoSection';
import TeachingApproachSection from '../components/CoursesSection/TeachingApproachSection';
import CoursesFeaturesSection from '../components/CoursesSection/CourseFeaturesSection';
import FAQSection from '../components/CoursesSection/FAQSection'
// import CTASection from '../components/CoursesSection/CTASection'


function Courses() {
    return ( 
        <>
        <CoursesHero />
        {/* <IBProgramSection /> */}
        {/* {/* <IGCSEProgramSection />
        <GCSEProgramSection />
        <ALevelProgramSection /> */}
        <FreeDemoSection />
        <TeachingApproachSection />
        <CoursesFeaturesSection />
        <FAQSection />
        {/* <CTASection />  */}
        </>
     );
}

export default Courses;