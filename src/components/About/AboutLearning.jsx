import React from 'react'
import { motion } from 'framer-motion';
import styles from './AboutLearning.module.css'
import learning from '../../assets/About/learning.jpeg'


function AboutLearning() {
    return (
        <>

            <section className={styles.AboutTeaching}>
                {/* Text */}
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Teaching <span className={styles.HomeColor}> Philosophy</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>

                {/* Flex */}
                <div className={styles.HomeTeachingFlex}>
                    {/* Img */}
                    <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                        <img src={learning} alt="teacher" />

                    </motion.div>


                    {/*  */}

                    <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <motion.div className={styles.AboutText} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} overlay
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <h1>Learning Beyond Memorisation</h1>
                        </motion.div>
                        <p className={styles.para}>I believe effective learning happens when students
                             feel emotionally safe, 
                            intellectually curious, and genuinely involved in the learning process.</p>
                        <p className={styles.para}>My teaching approach focuses on reducing learning 
                            anxiety and helping students understand the “why” behind concepts instead 
                            of relying only on memorisation. I encourage students to ask questions, 
                            think independently, and connect scientific ideas to real-life situations.</p>
                            <p className={styles.para}>As an educator, my goal is not only to help students 
                                score well in examinations, but also to help them develop confidence in 
                                their own thinking and cultivate a lasting love for learning.</p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default AboutLearning;