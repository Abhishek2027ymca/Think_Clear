import React from 'react'
import styles from './AboutMath.module.css'
import { motion } from 'framer-motion';
import founder from '../../assets/About/founder2.png'
import { BrainCircuit } from "lucide-react";
function AboutMath() {
    return (
        <>
            <section className={styles.AboutMath}>
                {/* Text */}

                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Meet Our <span className={styles.HomeColor}> Educators</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>
                {/* Flex */}
                <div className={styles.AboutMathsFlex}>
                    {/* para */}

                    <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <motion.div className={styles.AboutText} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} overlay
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <h1>Mridula Mondal</h1>
                        </motion.div>
                        <p className={styles.para}>A passionate mathematics educator and learning
                            facilitator with experience in private tutoring, international curriculum
                            support, and innovative pedagogy. Adept at designing engaging, student-focused
                            learning experiences that encourage critical thinking and problem-solving.
                            Experienced in teaching students across ICSE, CBSE, and Cambridge/IGCSE
                            curricula, with a strong foundation in educational psychology, child protection
                            practices, and technology-integrated learning. Combines technical expertise
                            with effective communication and mentoring skills to create
                            impactful academic outcomes for diverse learners globally</p>
                        <p className={styles.para}>Her approach combines innovative pedagogy, educational
                            psychology, and technology-integrated learning to support diverse learners
                            globally while building
                            confidence, curiosity, and meaningful academic growth.</p>
                    </motion.div>
                    {/* Image */}

                    <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                        <img src={founder} alt="teacher" />

                        {/* <div className={styles.FloatingCard}>
                            <h3>Mathematics Mentor</h3>
                            <p>
                                “Building strong problem-solving and analytical thinking skills.”
                            </p>
                        </div> */}


                        <div className={styles.FloatingCard}>
                            <div className={styles.CardIcon}>
                                <BrainCircuit size={22} />
                            </div>

                            <div className={styles.CardContent}>
                                <h3>Mathematics Mentor</h3>

                                <p>
                                    “Building strong problem-solving and analytical thinking skills.”
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </section>
        </>
    );
}

export default AboutMath;