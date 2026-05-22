import React from 'react'
import styles from './AboutAcademic.module.css'
import { motion } from 'framer-motion';
import founder from '../../assets/About/founder2.jpg'
import { Microscope } from 'lucide-react';
function AboutAcademic() {
    return (
        <>
            <section className={styles.AboutMath}>
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Our Academic <span className={styles.HomeColor}> Team</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>

                {/* Flex */}
                <div className={styles.AboutMathsFlex}>
                    {/* Image */}
                    {/* <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                        <img src={founder} alt="teacher" /> */}

                        {/* <div className={styles.FloatingCard}>
                            <h3>Mathematics Mentor</h3>
                            <p>
                                “Building strong problem-solving and analytical thinking skills.”
                            </p>
                        </div> */}


                        {/* <div className={styles.FloatingCard}>
                            <div className={styles.CardIcon}>
                                <Microscope size={22} />
                            </div>

                            <div className={styles.CardContent}>
                                <h3>IB Biology Expert</h3>

                                <p>
                                    “Guiding students through inquiry-based and concept-driven learning.”
                                </p>
                            </div>
                        </div>

                    </motion.div> */}
                    {/* para */}

                    <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <motion.div className={styles.AboutText} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} overlay
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <h1>Kirti Nagpal</h1>
                        </motion.div>
                        <p className={styles.para}>Kirti Nagpal is an accomplished IB educator 
                            with over 9 years of experience teaching IB DP, MYP, IGCSE, and CAIE
                             Biology and Environmental Systems & Societies (ESS). She specializes
                              in inquiry-based and concept-driven learning, curriculum planning, 
                              interdisciplinary teaching,
                             and student-centered educational practices aligned with IB frameworks.</p>
                        <p className={styles.para}>With experience in 
                            mentoring Internal Assessments, supervising Extended Essays, 
                            and integrating Theory of Knowledge (TOK), she is dedicated to 
                            fostering holistic learner growth, academic integrity, and meaningful learning 
                            experiences across international school environments.</p>
                    </motion.div>


                </div>
            </section>
        </>
    );
}

export default AboutAcademic;