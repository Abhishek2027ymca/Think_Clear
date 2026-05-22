import React from 'react'
import styles from './AboutContact.module.css'
import { motion } from 'framer-motion';
import contact from '../../assets/About/contact.png'
import {Link} from 'react-router-dom'
function AboutContact() {
    return ( 
        <>
                  <section className={styles.HomeContact}>
                <div className={styles.HomeContactColor}>

                    {/* Text */}

                    <motion.div className={styles.HomeJoinText} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <h1>Book a Session</h1>
                        <p>Schedule a ThinkClear session to experience learning that builds clarity,
                             confidence, and understanding through personalized guidance.</p>
                        <div className={styles.HomeBtn}>
                          <button><Link to='/courses'> Explore Courses</Link></button> <button><a href='https://calendly.com/thinkclearsolutions/30min' target="_blank" rel="noopener noreferrer">Book Free Demo </a></button>
                        </div>
                    </motion.div>

                    <motion.div className={styles.HomeImg} initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <img src={contact} alt='contact' />
                    </motion.div>

                </div>
            </section>
        </>
     );
}

export default AboutContact;