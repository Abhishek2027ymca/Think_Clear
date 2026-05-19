import styles from './TeachingApproachSection.module.css'
import { motion } from 'framer-motion';
import {
  Lightbulb,
  ListOrdered,
  BrainCircuit,
  Headphones
} from 'lucide-react'
export default function TeachingApproachSection() {
  const supportData = [
    {
      id: 1,
      icon: <Lightbulb size={30} strokeWidth={1.8} />,
      title: 'Simplified Concept Learning',
      desc: 'Complex topics are explained in simple and easy-to-understand teaching methods for better learning.'
    },

    {
      id: 2,
      icon: <ListOrdered size={30} strokeWidth={1.8} />,
      title: 'Step-by-Step Guidance',
      desc: 'Students learn concepts gradually with structured lessons and detailed explanations.'
    },

    {
      id: 3,
      icon: <BrainCircuit size={30} strokeWidth={1.8} />,
      title: 'Practical Problem Solving',
      desc: 'Regular exercises and real examples improve analytical and problem-solving abilities.'
    },

    {
      id: 4,
      icon: <Headphones size={30} strokeWidth={1.8} />,
      title: 'Academic Support',
      desc: 'Revision sessions, doubt solving, and practice tests ensure consistent improvement.'
    }
  ]
  return (

    <>

      <section className={styles.TeachingApproachSection}>
        <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          <h1>Our Teaching <span className={styles.HomeColor}>Approach</span></h1>
          <span className={styles.HomeLine}></span>
          <p>Student-focused learning with simplified concepts,
            interactive teaching, and continuous academic support.</p>
        </motion.div>



        <div className={styles.CardContainer}>

          {
            supportData.map((item) => (

              <div className={styles.Card} key={item.id}>

                <div className={styles.IconBox}>
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>

            ))
          }

        </div>
      </section>
    </>
  )
}