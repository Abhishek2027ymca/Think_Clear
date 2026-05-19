import styles from './CourseFeaturesSection.module.css'
import { ArrowRight } from 'lucide-react'
import doubtImg from '../../assets/courses/features/doubt-support.jpg'
import notesImg from '../../assets/courses/features/notes-material.jpg'
import testsImg from '../../assets/courses/features/tests.jpg'
import { motion } from 'framer-motion';

const learningData = [
  {
    id: 1,
    img: doubtImg,
    title: 'Doubt Support',
    desc: 'Students receive dedicated doubt-solving sessions to clarify concepts and improve subject understanding through teacher guidance.'
  },

  {
    id: 2,
    img: notesImg,
    title: 'Notes & Study Material',
    desc: 'Well-structured notes, assignments, and learning materials are provided for effective preparation and revision.'
  },

  {
    id: 3,
    img: testsImg,
    title: 'Passive studying to active curiosity.',
    desc: 'Regular tests and assessments help students track progress, improve performance, and build exam confidence.'
  }
]

export default function CourseFeaturesSection() {
  return (
    <>
      <section className={styles.AboutCards}>
        {/* text */}

        <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          <h1>Course <span className={styles.HomeColor}>Features</span></h1>
          <span className={styles.HomeLine}></span>
          <p>Our courses provide academic support through interactive learning, 
            study materials, and regular assessments for better student performance.</p>
        </motion.div>
        {/* cards */}
        <div className={styles.CardContainer}>

          {
            learningData.map((item) => (

              <motion.div className={styles.Card} key={item.id} initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} overlay
                transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                <div className={styles.CardImage}>
                  <img className={styles.Img} src={item.img} alt={item.title} />
                </div>

                <div className={styles.CardContent}>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <button className={styles.demoBtn}>

                    <span className={styles.iconBox}>
                      <ArrowRight size={18} />
                    </span>

                    <span className={styles.text}>
                      Enroll Now
                    </span>

                  </button>

                </div>

              </motion.div>

            ))
          }

        </div>
      </section>
    </>
  )
}