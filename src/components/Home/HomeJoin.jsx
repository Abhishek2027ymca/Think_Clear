import React from 'react'
import styles from './HomeJoin.module.css'
import { ChevronRight } from "lucide-react";
import Class from '../../assets/images/Class.png'
import { motion } from 'framer-motion';


function HomeJoin() {
    return (
        <>
            <section className={styles.HomeJoin}>
                <div className={styles.HomeJoinFlex}>
                    {/* left */}
                    <motion.div className={styles.HomeJoinText} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <h1>Experience Learning <br />Before Joining</h1>
                        <p>Attend a free demo class and understand how ThinkClear teaches concepts in
                            a simple and engaging way. Discover a supportive learning environment where
                            students gain conceptual clarity,
                            improve confidence, and enjoy learning through interactive teaching methods.</p>
                        <button className={styles.demoBtn}>
                            <span className={styles.iconBox}>
                                <ChevronRight size={20} strokeWidth={2.5} />
                            </span>

                            <span className={styles.text}><a href='https://calendly.com/thinkclearsolutions/30min' target="_blank" rel="noopener noreferrer">Book Free Demo</a></span>
                        </button>
                    </motion.div>

                    {/* right */}

                    <motion.div className={styles.HomeJoinImg} initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <img src={Class} />

                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default HomeJoin;