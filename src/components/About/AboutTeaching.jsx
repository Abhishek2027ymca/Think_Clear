import React from 'react'
import styles from './AboutTeaching.module.css'
import { motion } from 'framer-motion';
import teaching from '../../assets/About/teaching.png'


function AboutTeaching() {
    return (
        <>
            <section className={styles.AboutTeaching}>
                {/* Text */}
                <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Global Teaching Experience <span className={styles.HomeColor}> & ThinkClear</span></h1>
                    <span className={styles.HomeLine}></span>
                </motion.div>

                {/* Flex */}
                <div className={styles.HomeTeachingFlex}>
                    {/* Img */}
                    <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                        <img src={teaching} alt="teacher" />

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
                            <h1>Middle Years Programme</h1>
                        </motion.div>
                        <p className={styles.para}>Since 2020, I have actively collaborated with international EdTech
                             platforms including Classover (USA), YoungThink (UK), Tychr (India), Edlite Inspirations
                              (Singapore), and Class of Choice (Dubai), 
                            helping students through engaging and student-centered learning experiences.</p>
                        <p className={styles.para}>Over the years, I have developed a teaching
                             approach focused not only on academic achievement, but also on helping students
                              overcome fear-based learning and build confidence in their own thinking. 
                              This vision led to the creation of ThinkClear  a learning initiative dedicated to 
                            concept-driven learning, curiosity, and meaningful education beyond examinations.</p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default AboutTeaching;