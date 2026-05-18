import React from 'react'
import styles from './AboutTeam.module.css'
import { motion } from 'framer-motion';
import students from '../../assets/About/students.jpg'

function AboutTeam() {
    return (
        <>
            <section className={styles.AboutTeam}>
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Our <span className={styles.HomeColor}>Team</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>


                <div className={styles.AboutTeamFlex}>
                    {/* para */}

                    <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <motion.div className={styles.AboutText} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} overlay
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <h1>The people behind meaningful <br />learning experiences</h1>
                        </motion.div>
                        <p className={styles.para}>ThinkClear is a growing community of passionate
                            educators, mentors, and creative thinkers dedicated to meaningful, student-centered
                            learning. Each member contributes expertise across international curricula
                            and shares a common goal of building clarity, confidence, and curiosity in students.</p>
                        <p className={styles.para}>Our team works collaboratively to design engaging, concept-driven
                            learning experiences that support students across IB, IGCSE, GCSE,
                            and A-Level programs, ensuring learning feels clear, supportive, and meaningful.</p>
                    </motion.div>
                    {/* Image */}

                    <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                        <img src={students} alt="teacher" />

                    </motion.div>

                </div>
            </section>
        </>
    );
}

export default AboutTeam;