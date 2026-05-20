import React from 'react'
import styles from './PoliciesContact.module.css'
import { motion } from 'framer-motion';
import kid from '../../assets/Policies/kid.png'

function PoliciesContact() {
    return (
        <>
            <section className={styles.HomeContact}>
                <div className={styles.HomeContactColor}>

                    {/* Text */}

                    <motion.div className={styles.HomeJoinText} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <h1>Join Our Team & Grow Together</h1>
                        <p>A complete combination of branding, website management, and communication
                             tools designed to support ThinkClear’s online success.</p>
                        <div className={styles.HomeBtn}>
                            <button>Explore Courses</button> <button>Book Free Demo </button>
                        </div>
                    </motion.div>

                    <motion.div className={styles.HomeImg} initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <img src={kid} alt='contact' />
                    </motion.div>

                </div>
            </section>

        </>
    );
}

export default PoliciesContact;