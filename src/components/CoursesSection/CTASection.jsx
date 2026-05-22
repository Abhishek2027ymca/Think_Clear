import styles from './CTASection.module.css'
import { motion } from 'framer-motion';
import ctaStudent from '../../assets/images/cta-student.png'
import {Link} from 'react-router-dom'
export default function CTASection() {
  return (
    <>

      <section className={styles.HomeContact}>
        <div className={styles.HomeContactColor}>

          {/* Text */}

          <motion.div className={styles.HomeJoinText} initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
            <h1>Start Your Journey with ThinkClear</h1>
            <p>Join structured academic programs designed to improve
              understanding, confidence, and performance for Classes 6–12.</p>
            <div className={styles.HomeBtn}>
            <button> <Link to='/about'> Explore About</Link></button> <button><a href='https://calendly.com/thinkclearsolutions/30min' target="_blank" rel="noopener noreferrer">Book Free Demo</a> </button>
            </div>
          </motion.div>

          <motion.div className={styles.HomeImg} initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
            <img src={ctaStudent} alt='contact' />
          </motion.div>

        </div>
      </section>
    </>
  )
}