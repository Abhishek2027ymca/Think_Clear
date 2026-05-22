import styles from './GCSEProgramSection.module.css'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

import mathsImg from '../../assets/courses/gcse/maths.jpg'
import scienceImg from '../../assets/courses/gcse/science.jpg'
import physicsImg from '../../assets/courses/gcse/physics.jpg'
import chemistryImg from '../../assets/courses/gcse/chemistry.jpg'
import { motion } from 'framer-motion';
import { Check } from "lucide-react";
import IB from '../../assets/Footer/studentss.jpg'
import GST from '../../assets/Footer/learnings.jpg'

export default function GCSEProgramSection() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -325 : 325,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <section className={styles.FreeDemoSection}>
        <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          <h1>Senior Secondary  <span className={styles.HomeColor}>(Grades 11–12)</span></h1>
          <span className={styles.HomeLine}></span>
        </motion.div>

        <div className={styles.FreeDemoSectionFlex}>
          <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
            <motion.div className={styles.AboutText} initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} overlay
              transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
              <h1>IBDP  Curriculum</h1>
            </motion.div>
            <p className={styles.para}>Our International Baccalaureate Diploma 
              Programme coaching is designed to develop analytical thinking, 
              conceptual understanding, research skills, and academic excellence 
              through a comprehensive and student-focused learning approach. Using
               inquiry-based teaching methods, concept-focused explanations, and real-world
                application strategies, students gain deeper subject clarity and independent 
                learning abilities. Personalized doubt-solving sessions and continuous performance
                 tracking further ensure consistent academic
               progress and confidence throughout the IBDP journey.</p>
            <button className={styles.demoBtn}>
              <span className={styles.iconBox}>
                <ChevronRight size={20} strokeWidth={2.5} />
              </span>

              <span className={styles.text}><a href='https://calendly.com/thinkclearsolutions/30min' target="_blank" rel="noopener noreferrer">Book Free Demo</a></span>
            </button>
          </motion.div>

          {/* Img */}
          <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

            <img src={IB} alt="teacher" />

          </motion.div>
        </div>


        <div className={styles.FreeDemoSectionFlex}>
          {/* Img */}
          <motion.div className={styles.ImageWrapper} initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

            <img src={GST} alt="teacher" />
          </motion.div>

          {/* Para */}
          <motion.div className={styles.AboutTextPa} initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
            <motion.div className={styles.AboutText} initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} overlay
              transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
              <h1>•	A Levels Curriculum</h1>
            </motion.div>
            <p className={styles.para}>Our A Levels Program offers advanced
               academic preparation focused on strengthening subject mastery, 
               analytical thinking, problem-solving abilities, and exam performance
               through structured and student-focused guidance. With topic-wise learning, 
               numerical and analytical practice sessions, and exam-oriented teaching methods,
                students build strong conceptual understanding and confidence in every subject.
                 The program also includes regular mock assessments, recorded revision sessions,
                  one-to-one doubt clarification, and continuous performance improvement support 
              to help students achieve consistent academic success.</p>
            <button className={styles.demoBtn}>
              <span className={styles.iconBox}>
                <ChevronRight size={20} strokeWidth={2.5} />
              </span>

              <span className={styles.text}><a href='https://calendly.com/thinkclearsolutions/30min' target="_blank" rel="noopener noreferrer">Book Free Demo</a></span>
            </button>
          </motion.div>


        </div>

      </section>

    </>
  )
}