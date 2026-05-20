import { Link } from 'react-router-dom'
import demoGirl from '../../assets/images/book-demo-girl.png'
import styles from './BookDemo.module.css'
import { motion } from 'framer-motion';

export default function BookDemo() {
  return (
   <>
        <section className={styles.HomeContact}>
                <div className={styles.HomeContactColor}>

                    {/* Text */}

                    <motion.div className={styles.HomeJoinText} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <h1>Book Your Free Demo Class</h1>
                        <p>Start your learning journey with expert guidance 
                          and interactive classes designed for student success.</p>
                        <div className={styles.HomeBtn}>
                            <button>Explore Courses</button> <button>Book Free Demo </button>
                        </div>
                    </motion.div>

                    <motion.div className={styles.HomeImg} initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <img src={demoGirl} alt='contact' />
                    </motion.div>

                </div>
            </section>
   </>
  )
}