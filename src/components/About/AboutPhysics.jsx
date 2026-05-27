import React from 'react'
import { motion } from 'framer-motion';
import styles from './AboutPhysics.module.css'
import { GraduationCap, Brain, MessageSquareText, ShieldCheck } from "lucide-react";

function AboutPhysics() {
    return (
        <>
            {/* <section className={styles.AboutMath}>
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Physics  <span className={styles.HomeColor}> Educator</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>

    
                <div className={styles.AboutMathsFlex}>
                   

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
            </section> */}



            <section className={styles.AboutMath}>
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Meet Physics  <span className={styles.HomeColor}> Educator</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>


                <div className={styles.AboutPhysicsSpace}>
                    {/* para */}
                    <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <div className={styles.AboutPhysicsFlex}>
                            <h1>Mrinalini</h1>

                        </div>
                        <p className={styles.para}>Physics & Mathematics Educator — Senior Secondary and Graduation level.</p>
                        <p className={styles.para}>Dedicated and passionate educator with over 10 years of teaching experience
                            in Science and Mathematics for senior secondary and graduation-level students.</p>
                        <p className={styles.para}>Holds a Bachelor's degree in Electronics & Communication Engineering
                            with prior
                            industry experience as a Project Engineer at Wipro Technologies.</p>
                        <p className={styles.para}>Skilled in simplifying complex concepts, mentoring students,
                            and creating result-oriented learning environments. Known for
                            strong commitment, analytical thinking, and excellent communication skills.</p>
                    </motion.div>
                    {/* LLine */}
                    <div className={styles.MiddleLine}></div>
                    {/* cards */}
                    <motion.div className={styles.AboutCardsflex} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <div className={styles.AboutCardsName}>
                            <div className={styles.AboutCard}>
                                <div className={styles.iconBox}>
                                    <GraduationCap size={22} />
                                </div>
                                <h3>Mentorship</h3>
                                <p>Guiding students with patience, structure, and discipline.</p>
                            </div>
                            {/* 2 */}
                            <div className={styles.AboutCard}>
                                <div className={styles.iconBox}>
                                    <Brain size={22} />
                                </div>
                                <h3>Analytical Thinking</h3>
                                <p>Bringing an engineer's logic to every problem on the board.</p>
                            </div>
                        </div>

                        {/* cards */}
                        <div className={styles.AboutCardsName}>
                            <div className={styles.AboutCard}>
                                <div className={styles.iconBox}>
                                    <MessageSquareText size={22} />
                                </div>
                                <h3>Strong Communication</h3>
                                <p>Translating theory into language students actually remember.</p>
                            </div>
                            {/* 2 */}
                            <div className={styles.AboutCard}>
                                <div className={styles.iconBox}>
                                    <ShieldCheck size={22} />
                                </div>
                                <h3>Commitment</h3>
                                <p>A decade of consistent dedication to student success.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default AboutPhysics;