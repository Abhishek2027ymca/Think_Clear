import React from 'react'
import styles from './AboutEducation.module.css'
import { motion } from 'framer-motion';
import student from '../../assets/About/student1.png'
import { ChevronRight } from "lucide-react";

function AboutEducation() {
    return (
        <>
            <section className={styles.AboutEducation}>
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>About<span className={styles.HomeColor}> ThinkClear</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>

                {/* Flex */}
                <div className={styles.HomeEducFlex}>
                    {/* text */}


                    <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <motion.div className={styles.AboutText} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} overlay
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <h1>Education that feels meaningful again.</h1>
                        </motion.div>
                        <p className={styles.para}>ThinkClear is a learning initiative founded by international
                            curriculum educator Charu Yadav with a vision to build clarity, confidence,
                            and curiosity in students. With over a decade of teaching experience across IB,
                            IGCSE, GCSE, and A-Level programs, ThinkClear focuses on helping students move beyond
                            memorisation through concept-driven and engaging learning experiences.</p>
                        <p className={styles.para}>At ThinkClear, learning is designed to encourage independent
                            thinking, meaningful understanding, and student confidence. The goal is to create a
                            supportive environment where students feel inspired
                            to ask questions, explore ideas, and develop a genuine love for learning.</p>
                        <button className={styles.demoBtn}>
                            <span className={styles.iconBox}>
                                <ChevronRight size={20} strokeWidth={2.5} />
                            </span>

                            <span className={styles.text}><a href='https://calendly.com/thinkclearsolutions/30min' target="_blank" rel="noopener noreferrer">Book Free Demo</a></span>
                        </button>
                    </motion.div>

                    {/* Img */}
                    <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                        <img src={student} alt="teacher" />

                    </motion.div>
                </div>

            </section>
        </>
    );
}

export default AboutEducation;