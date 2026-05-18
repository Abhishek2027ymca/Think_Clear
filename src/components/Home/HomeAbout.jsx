import React from 'react'
import styles from './HomeAbout.module.css'
import { motion } from 'framer-motion';
import HomeAbouts from '../../assets/images/HomeAbout.png'

function HomeAbout() {
    return (
        <>
            <section className={styles.HomeAbout}>
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>About <span className={styles.HomeColor}>ThinkClear</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>

                <div className={styles.HomeAboutFlex}>
                    {/* Right */}
                    <motion.div className={styles.HomeAboutRight} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <h1>Helping Students Learn <br />With Clarity</h1>
                        <motion.div className={styles.HomeAboutPara} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} overlay
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <p>At ThinkClear, we believe that every student has the potential to achieve
                                academic success when guided with clarity, patience, and the right learning
                                approach. Our goal is to transform the way students learn by making education simple, engaging,
                                practical, and easy to understand for students from Classes 6–12.</p>
                            <p className={styles.HomeAboutPara1}>We focus on building strong concepts instead of rote learning,
                                helping students gain confidence in subjects like Maths, Science,
                                Physics, Chemistry, Biology, SST, and English
                                through live classes, tests, doubt support, and personal mentorship.</p>
                        </motion.div>
                        <button>Learn More About Us</button>
                    </motion.div>

                    {/* left */}

                    <motion.div className={styles.HomeAboutImage} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <img src={HomeAbouts} alt='error' />
                    </motion.div>
                </div>

            </section>
        </>
    );
}

export default HomeAbout;