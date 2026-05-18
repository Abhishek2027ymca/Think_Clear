import React from 'react'
import styles from './AboutGrowing.module.css'
import teach from '../../assets/About/teaches.png'
import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react";


function AboutGrowing() {
    return (
        <>
            <section className={styles.HomeJoin}>
                <div className={styles.HomeJoinFlex}>
                    {/* left */}
                    <motion.div className={styles.HomeJoinText} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <h1>Our Growing and<br />Dynamic Team</h1>
                        <p>ThinkClear is currently growing as a collaborative learning initiative
                             with educators, mentors, and creative thinkers who believe in meaningful 
                             education and student-centered learning. Together, we are building an environment 
                             that supports curiosity, clarity,
                             and continuous learning for students across different curricula.</p>
                        <button className={styles.demoBtn}>
                            <span className={styles.iconBox}>
                                <ChevronRight size={20} strokeWidth={2.5} />
                            </span>

                            <span className={styles.text}>Book Free Demo</span>
                        </button>
                    </motion.div>

                    {/* right */}

                    <motion.div className={styles.HomeJoinImg} initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <img src={teach} />

                    </motion.div>
                </div>
            </section>

        </>
    );
}

export default AboutGrowing;