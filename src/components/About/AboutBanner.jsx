import React from 'react'
import styles from './AboutBanner.module.css'
import { motion } from 'framer-motion';
import { CloudMoonRain, Dot, ChevronRight, MoveRight } from 'lucide-react';
import founder from '../../assets/About/founder.png'
import {Link} from 'react-router-dom'


function AboutBanner() {
    return (
        <>
            <section className={styles.HomeBanner}>
                <div className={styles.HomeBannerSpace}>
                    {/* text */}
                    <motion.div className={styles.HomeTextValue} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <motion.div className={styles.HomePadding} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} overlay
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <Dot style={{ color: "white" }} size={30} />
                            <span>The Story Behind ThinkClear</span>
                        </motion.div>
                        <h1>Building Clarity, Curiosity & <br />Confidence in Learning</h1>
                        <p>Helping students across IB, IGCSE, GCSE, and A-Level develop deep conceptual
                            understanding through engaging and confidence-driven learning experiences.</p>
                        <div className={styles.HomeBtn}>
                            <button><Link to='/courses'>Explore Courses</Link></button> <button>Book Free Demo    <MoveRight /></button>
                        </div>
                    </motion.div>
                    {/* Image */}

                    {/* <div className={styles.BannerImage}>
                                <div className={styles.ImageSection}>
                                    <img  src={Hero} alt='hero' />
                                </div>
                            </div> */}

                    <motion.div className={styles.BannerImage} initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <div className={styles.ImageSection}>
                            <img src={founder} alt='hero' />
                        </div>
                    </motion.div>
                </div>
            </section>


            <motion.div className={styles.AboutBanner} initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} overlay
                transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                <div className={styles.AboutCardsPad}>
                    {/*  */}
                    <div className={styles.Abouttext}>
                        <h2>10+</h2>
                        <p>Years teaching</p>
                    </div>
                    {/*  */}
                    <div className={styles.Abouttext}>
                        <h2>5</h2>
                        <p>Curricula covered</p>
                    </div>

                    {/*  */}

                    <div className={styles.Abouttext}>
                        <h2>Global</h2>
                        <p>Student reach</p>
                    </div>
                    {/*  */}
                    <div className={styles.Abouttext}>
                        <h2>Since 2012</h2>
                        <p>On this journey</p>
                    </div>
                    {/*  */}
                </div>

            </motion.div>
        </>
    );
}

export default AboutBanner;