import React from 'react'
import styles from './HomeBanner.module.css'
import { CloudMoonRain, Dot, ChevronRight, MoveRight } from 'lucide-react';
import Hero from '../../assets/images/Heros.png'
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'

function HomeBanner() {
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
                            <span>Now enrolling for New batch</span>
                        </motion.div>
                        <h1>ThinkClear Learning for <br /> Classes 6 to 12</h1>
                        <p>Personalized online coaching for Maths, Science, SST, and more with live classes,
                            expert guidance, doubt support, and exam-focused learning.</p>
                        <div className={styles.HomeBtn}>
                            <Link to='/courses'><button>Explore Courses</button></Link> <button>Book Free Demo    <MoveRight /></button>
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
                            <img src={Hero} alt='hero' />

                            {/* Card 1 */}
                            <div className={`${styles.FloatingCard} ${styles.card1}`}>
                                <i className="ri-user-line"></i>
                                <div>
                                    <h4>2,500+</h4>
                                    <p>Students taught</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className={`${styles.FloatingCard} ${styles.card2}`}>
                                <i className="ri-calendar-line"></i>
                                <div>
                                    <h4>10+ yrs</h4>
                                    <p>Teaching experience</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className={`${styles.FloatingCard} ${styles.card3}`}>
                                <i className="ri-star-line"></i>
                                <div>
                                    <h4>4.9/5</h4>
                                    <p>Parent rating</p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className={`${styles.FloatingCard} ${styles.card4}`}>
                                <i className="ri-graduation-cap-line"></i>
                                <div>
                                    <h4>94%</h4>
                                    <p>Improved grades</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default HomeBanner;