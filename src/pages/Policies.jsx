import React from 'react'
import PoliciesBanner from '../components/Policies/PoliciesBanner';
import PoliciesPlat from '../components/Policies/PoliciesPlat';
import PoliciesGrow from '../components/Policies/PoliciesGrow';
import PoliciesContact from '../components/Policies/PoliciesContact';



function Policies() {
    return ( 
        <>
        <PoliciesBanner />
        <PoliciesPlat />
        <PoliciesGrow />
        <PoliciesContact/>
        </>
     );
}

export default Policies;