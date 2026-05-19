import React from 'react'
import styles from './PoliciesPlat.module.css'
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    ClipboardList,
    RotateCcw
} from 'lucide-react'
function PoliciesPlat() {

    const policyData = [
        {
            id: 1,
            icon: <ShieldCheck size={33} strokeWidth={1.8} />,
            title: 'Privacy Policy',
            desc: 'Collecting and securely managing user information to improve platform services while protecting student and parent privacy.'
        },

        {
            id: 2,
            icon: <ClipboardList size={33} strokeWidth={1.8} />,
            title: 'Terms & Conditions',
            desc: 'Clear platform rules, course access guidelines, and user responsibilities to ensure a smooth and secure learning experience.'
        },

        {
            id: 3,
            icon: <RotateCcw size={33} strokeWidth={1.8} />,
            title: 'Refund Policy',
            desc: 'Enable secure payment collection, professional business communication, and reliable website management for smooth operations.'
        }
    ]

    return (
        <>
            <section className={styles.PoliciesPlat}>
                {/* text */}
                <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Policies & Platform <span className={styles.HomeColor}>Requirements</span></h1>
                    <span className={styles.HomeLine}></span>
                    <p>Build trust and maintain transparency with professionally structured
                        policies and platform guidelines for students and parents.</p>
                </motion.div>
                {/* cards */}


                <motion.div className={styles.PolicyContainer} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                    {
                        policyData.map((item) => (

                            <div className={styles.PolicyCard} key={item.id}>

                                <div className={styles.IconBox}>
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.desc}</p>

                            </div>

                        ))
                    }

                </motion.div>
            </section>
        </>
    );
}

export default PoliciesPlat;