import React from 'react'
import styles from './HomeResult.module.css'
import { motion } from 'framer-motion';
import {
    Backpack,
    BarChart3,
    Trophy,
    Handshake
} from 'lucide-react'



const statsData = [
    {
        id: 1,
        icon: <Backpack size={42} strokeWidth={1.8} />,
        iconBg: '#B9A7E8',
        title: '1000+ \nStudents Trained',
        desc: 'Students from Classes 6–12 learn through structured teaching, concept clarity, and continuous support.'
    },

    {
        id: 2,
        icon: <BarChart3 size={42} strokeWidth={1.8} />,
        iconBg: '#79A985',
        title: 'Improved Academic \nPerformance',
        desc: 'Regular tests, assignments, and revision sessions help students improve marks and subject understanding.'
    },

    {
        id: 3,
        icon: <Trophy size={42} strokeWidth={1.8} />,
        iconBg: '#D8C36B',
        title: 'Strong \nBoard Exam Results',
        desc: 'Our students achieve good results in school exams with clear concepts, practice, and expert guidance.'
    },

    {
        id: 4,
        icon: <Handshake size={42} strokeWidth={1.8} />,
        iconBg: '#E38BC1',
        title: 'High Student \nSatisfaction Rate',
        desc: 'Students and parents trust ThinkClear for its teaching quality, doubt support, and personalized attention.'
    }
]

function HomeResult() {
    return (
        <>
            <section className={styles.HomeResult}>

                <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Results & Proof <span className={styles.HomeColor}>You Can Trust</span></h1>
                    <span className={styles.HomeLine}></span>
                    <p>Our students consistently improve their understanding, confidence,
                        and academic performance through structured learning and expert guidance.</p>
                </motion.div>


                <motion.div className={styles.StatsContainer} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                    {
                        statsData.map((item) => (
                            <div className={styles.StatsCard} key={item.id}>

                                <div
                                    className={styles.IconBox}
                                    style={{ backgroundColor: item.iconBg }}
                                >
                                    {item.icon}
                                </div>

                                <h3>
                                    {item.title.split('\n').map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </h3>

                                <p>{item.desc}</p>

                            </div>
                        ))
                    }

                </motion.div>
            </section>

        </>
    );
}

export default HomeResult;