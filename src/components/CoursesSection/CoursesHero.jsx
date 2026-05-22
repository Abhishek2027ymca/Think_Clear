import styles from './CoursesHero.module.css'
import { CloudMoonRain, Dot, ChevronRight, MoveRight } from 'lucide-react';
import coursesHero from '../../assets/images/courses-hero.png'
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'


export default function CoursesHero() {
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
                            <span>Enroll in ThinkClear Courses Today</span>
                        </motion.div>
                        <h1>Everything Needed to <br />Launch & Grow ThinkClear</h1>
                        <p>Complete website, policy, branding, payment, and marketing
                             setup for ThinkClear’s professional online growth.</p>
                        <div className={styles.HomeBtn}>
                            <button><Link to='/about'>Explore About</Link></button> <button><a href='https://calendly.com/thinkclearsolutions/30min' target="_blank" rel="noopener noreferrer">Book Free Demo </a>   <MoveRight /></button>
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
                            <img src={coursesHero} alt='hero' />
                        </div>
                    </motion.div>
                </div>
            </section>
    </>
  )
}