import React from 'react'
import styles from './HomeContact.module.css'
import {Link} from  'react-router-dom'
import { motion } from 'framer-motion';
import contact from '../../assets/images/contact.png'

function HomeContact() {
    return (
        <>
            <section className={styles.HomeContact}>
                <div className={styles.HomeContactColor}>

                    {/* Text */}

                    <motion.div className={styles.HomeJoinText} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <h1>Ready to Improve Your Learning?</h1>
                        <p>Join ThinkClear today and start learning with expert guidance, clear explanations,
                            structured support, regular practice, and continuous academic improvement.</p>
                        <div className={styles.HomeBtn}>
                          <button><Link to='/courses'>Explore Courses</Link></button> <button>Book Free Demo </button>
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

export default HomeContact;