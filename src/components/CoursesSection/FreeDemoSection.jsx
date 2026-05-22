import styles from './FreeDemoSection.module.css'
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react'
import demoImage from '../../assets/images/free-demo.jpg'

export default function FreeDemoSection() {
  return (
    <>
      <section className={styles.FreeDemoSection}>
        {/* Text */}
        <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          <h1>Experience a Free <span className={styles.HomeColor}> Demo Class</span></h1>
          <span className={styles.HomeLine}></span>
        </motion.div>

        {/* Flex */}
        <div className={styles.FreeDemoSectionFlex}>

          {/* para */}

          <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
            <motion.div className={styles.AboutText} initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} overlay
              transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
              <h1>Free Demo Learning Experience</h1>
            </motion.div>
            <p className={styles.para}>Join a free demo session at ThinkClear to explore our
              teaching methods, course structure, and interactive learning environment before
              enrollment. Students of Classes 6–12 can experience live interactive demo classes,
              subject-wise trial sessions, doubt interaction opportunities, and concept-based learning
              with expert teacher guidance before joining the full course.</p>
            <button className={styles.demoBtn}>
              <span className={styles.iconBox}>
                <ChevronRight size={20} strokeWidth={2.5} />
              </span>

              <span className={styles.text}><a href='https://calendly.com/thinkclearsolutions/30min' target="_blank" rel="noopener noreferrer">Book Free Demo</a></span>
            </button>
          </motion.div>

          {/* img */}
          <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

            <img src={demoImage} alt="teacher" />

          </motion.div>

        </div>
      </section>
    </>
  )
}