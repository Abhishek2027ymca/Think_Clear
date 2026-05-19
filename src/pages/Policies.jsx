import React from 'react'
import PoliciesBanner from '../components/Policies/PoliciesBanner';
import PoliciesPlat from '../components/Policies/PoliciesPlat';
import PoliciesGrow from '../components/Policies/PoliciesGrow';



function Policies() {
    return ( 
        <>
        <PoliciesBanner />
        <PoliciesPlat />
        <PoliciesGrow />
        </>
     );
}

export default Policies;