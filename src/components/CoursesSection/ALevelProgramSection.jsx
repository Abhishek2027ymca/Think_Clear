import styles from './ALevelProgramSection.module.css'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import mathsImg from '../../assets/images/maths.jpg'
import Biologyg from '../../assets/images/biology.jpg'
import physicsImg from '../../assets/images/physcis.jpg'
import chemistryImg from '../../assets/images/chemistry.jpg'
import { motion } from 'framer-motion';


const courses = [
  {
    id: 1,
    subject: "maths",
    title: "Mathematics",
    description:
      "Master algebra, geometry, trigonometry, and calculus with step-by-step guidance and conceptual clarity.",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000",
  },
  {
    id: 2,
    subject: "Biology",
    title: "Biology",
    description:
      "Explore human physiology, genetics, and life science concepts through visual learning and detailed explanations.",
    image: Biologyg,
  },
  {
    id: 3,
    subject: "Physics",
    title: "Physics",
    description:
      "Develop understanding of motion, force, energy, electricity, and modern physics through interactive explanations.",
    image:physicsImg,
  },
  {
    id: 4,
    subject: "Chemistry",
    title: "Chemistry",
    description:
      "Learn physical, organic, and inorganic chemistry with simplified explanations and practical examples.",
    image:chemistryImg,
  },
];


export default function ALevelProgramSection() {
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
      <section className={styles.ALevelProgramSection}>

        <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          <h1>Explore Our <span className={styles.HomeColor}>Core Subjects</span></h1>
          <span className={styles.HomeLine}></span>
          <p>Structured subject programs that strengthen concepts,
            problem-solving, and academic performance.</p>
        </motion.div>


        <motion.div className={styles.container} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          {courses.map((course) => (
            <div className={styles.card} key={course.id}>
              <div className={styles.imageWrapper}>
                <img src={course.image} alt={course.title} />

                <span className={styles.tag}>
                  {course.subject}
                </span>
              </div>

              <div className={styles.content}>
                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <button className={styles.button}>
                  Enroll Now
                  <span>➜</span>
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  )
}