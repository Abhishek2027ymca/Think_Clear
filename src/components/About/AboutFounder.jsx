import React from 'react'
import styles from './AboutFound.module.css'
import { motion } from 'framer-motion';
import Teacher from '../../assets/About/Teacher.png'
import { Quote, Sparkles } from "lucide-react";
function AboutFounder() {
    return (
        <>
            <section className={styles.AboutFounder}>
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>The Mind Behind<span className={styles.HomeColor}> ThinkClear</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>

                {/* flex*/}
                <div className={styles.AboutFounderFlex}>
                    <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                        <img src={Teacher} alt="teacher" />

                        <div className={styles.FloatingCard}>
                            <p>
                                “creating learning experiences that help
                                students think clearly, learn confidently,
                                and stay curious.”
                            </p>
                        </div>
                        {/* <div className={styles.FloatingCard}>
                            <div className={styles.IconWrap}>
                                <Quote size={18} />
                            </div>

                            <div className={styles.CardGlow}></div>

                            <p>
                                “Creating learning experiences that help students think clearly,
                                learn confidently, and stay curious.”
                            </p>
                        </div> */}

                    </motion.div>

                    {/* Text */}
                    <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <motion.div className={styles.AboutText} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} overlay
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <h1>Charu Yadav</h1>
                            <p >Educator, Curriculum Specialist , Science Mentor</p>
                        </motion.div>
                        <p className={styles.para}>Charu Yadav is an international curriculum educator and the founder of
                            ThinkClear, a learning initiative focused on
                            concept clarity, curiosity-driven learning, and student confidence.</p>
                        <p className={styles.para}>With experience teaching students across IB,
                            IGCSE, GCSE, and A-Level curricula through both schools and global online
                            platforms, she believes learning should feel
                            engaging, meaningful, and intellectually empowering — not fear-driven.</p>
                        <p className={styles.para}>Through ThinkClear, her vision is to create a
                            community of students and teachers who value deep
                            understanding, thoughtful questioning, and the joy of learning.</p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default AboutFounder;