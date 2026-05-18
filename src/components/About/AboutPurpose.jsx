import React from 'react'
import styles from './AboutPurpose.module.css'
import { motion } from 'framer-motion';
import {
    Lightbulb,
    Globe
} from 'lucide-react'

const cardData = [
    {
        id: 1,
        icon: <Lightbulb size={30} strokeWidth={1.8} />,
        title: 'Mission',
        desc: 'To create engaging and concept-driven learning experiences that build clarity, confidence, curiosity, and independent thinking in students.'
    },

    {
        id: 2,
        icon: <Globe size={30} strokeWidth={1.8} />,
        title: 'Vision',
        desc: 'To build a global learning community where education is guided by understanding, thoughtful questioning, and a love for learning.'
    }
]
function AboutPurpose() {
    return (
        <>

            <section className={styles.AboutPurpose}>
                {/* Text */}
                <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Our Purpose at <span className={styles.HomeColor}>ThinkClear</span></h1>
                    <span className={styles.HomeLine}></span>
                    <p>At ThinkClear, our mission and vision focus on building clarity,
                        confidence, and curiosity through meaningful, concept-driven learning.</p>
                </motion.div>
                {/* cards */}

                <div className={styles.CardContainer}>

                    {
                        cardData.map((item) => (

                            <div className={styles.Card} key={item.id}>

                                <div className={styles.IconBox}>
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.desc}</p>

                            </div>

                        ))
                    }

                </div>

            </section>
        </>
    );
}

export default AboutPurpose;