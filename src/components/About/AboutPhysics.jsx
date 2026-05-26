import React from 'react'
import { motion } from 'framer-motion';
import styles from './AboutAcademic.module.css'


function AboutPhysics() {
    return (
        <>
            <section className={styles.AboutMath}>
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Physics  <span className={styles.HomeColor}> Educator</span></h1>
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
                            <h1>Mrinalini</h1>
                        </motion.div>
                        <p className={styles.para}>Dedicated and passionate educator with over 10 years of teaching 
                            experience in Science and Mathematics for senior secondary and graduation-level students. 
                            Holds a Bachelor’s degree in Electronics & Communication Engineering with prior industry 
                            experience as a Project Engineer at Wipro Technologies. Skilled in simplifying complex concepts, 
                            mentoring students, and creating result-oriented learning environments. 
                            Known for strong commitment, analytical thinking, and excellent communication skills.</p>
                    </motion.div>


                </div>
            </section>
        </>
    );
}

export default AboutPhysics;