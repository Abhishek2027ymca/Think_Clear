import styles from './IBProgramSection.module.css'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import mathImg from '../../assets/courses/maths.jpg'
import physicsImg from '../../assets/courses/physics.jpg'
import chemistryImg from '../../assets/courses/chemistry.jpg'
import biologyImg from '../../assets/courses/biology.jpg'
import { motion } from 'framer-motion';
import { Check } from "lucide-react";
import IB from '../../assets/Footer/ib.jpg'
import GST from '../../assets/Footer/GST.jpg'
export default function IBProgramSection() {
  const sliderRef = useRef();

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 350;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 350;
  };


  return (
    <>

      <section className={styles.FreeDemoSection}>
        <motion.div className={styles.HomeAboutText} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          <h1>Middle School <span className={styles.HomeColor}>(Grades 6–10)</span></h1>
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
              <h1>IB MYP Curriculum</h1>
            </motion.div>
            <p className={styles.para}>Develop analytical thinking, conceptual
              understanding, and real-world problem-solving skills through interactive
              and inquiry-based learning methods. Our teaching approach combines concept-based
              learning, interactive live classes, and real-world application examples to make learning
              engaging and practical. Students receive continuous support through activities, assessments,
              personalized doubt-solving sessions, and regular progress
              tracking to ensure steady academic growth and confidence.</p>
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
              <h1>GCSE / IGCSE  Curriculum</h1>
            </motion.div>
            <p className={styles.para}>Our GCSE / IGCSE Curriculum provides 
              structured preparation designed to build strong subject mastery, 
              effective exam techniques, and deep conceptual understanding 
              aligned with international curriculum standards. Through topic-wise 
              lessons, exam-oriented teaching methods, practice worksheets, assignments, 
              and regular assessments with mock tests, students gain the skills and 
              confidence needed for academic success. Recorded revision sessions and 
              personalized one-to-one academic support further ensure 
              continuous learning, clarity, and performance improvement throughout the program.</p>
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