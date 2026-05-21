import React from 'react'
import styles from './AboutProfile.module.css'
import { motion } from 'framer-motion';
import learn from '../../assets/About/laptop.png'

function AboutProfile() {
    return (
        <>
            <section className={styles.AboutProfile}>
                {/*  */}
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Professional <span className={styles.HomeColor}> Profile</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>

                {/* Flex */}
                <div className={styles.HomeProfileFlex}>
                    <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <motion.div className={styles.AboutText} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} overlay
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <h1>Clarity Through Learning</h1>
                        </motion.div>
                        <p className={styles.para}>I am an educator and curriculum specialist with
                            over a decade of experience teaching international curriculum students
                            across IBDP, IGCSE, GCSE, A-Level, and middle school science programs.
                            My focus has always been on helping students build clarity,
                            confidence, and deeper conceptual understanding in science.</p>
                        <p className={styles.para}>With experience teaching students across IB,
                            IGCSE, GCSE, and A-Level curricula through both schools and global online
                            platforms, she believes learning should feel
                            engaging, meaningful, and intellectually empowering — not fear-driven.</p>
                    </motion.div>
                    {/*iMG  */}

                    <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                        <img src={learn} alt="teacher" />

                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default AboutProfile;