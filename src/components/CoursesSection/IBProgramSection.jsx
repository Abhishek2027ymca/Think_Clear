import styles from './IBProgramSection.module.css'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import mathImg from '../../assets/courses/maths.jpg'
import physicsImg from '../../assets/courses/physics.jpg'
import chemistryImg from '../../assets/courses/chemistry.jpg'
import biologyImg from '../../assets/courses/biology.jpg'
import { motion } from 'framer-motion';

const COURSES = [
  {
    id: 1,
    subject: 'maths',
    title: 'Mathematics AA/AI',
    description:
      'Build advanced problem-solving and analytical skills through structured IB mathematics learning.',
    image: mathImg,
  },
  {
    id: 2,
    subject: 'Physics',
    title: 'Physics',
    description:
      'Understand core physics concepts with practical applications and exam-focused preparation.',
    image: physicsImg,
  },
  {
    id: 3,
    subject: 'Chemistry',
    title: 'Chemistry',
    description:
      'Master chemistry concepts through clear explanations, numerical practice, and structured learning.',
    image: chemistryImg,
  },
  {
    id: 4,
    subject: 'Biology',
    title: 'Biology',
    description:
      'Learn biological systems and scientific concepts with interactive and organized lessons.',
    image: biologyImg,
  },
  {
    id: 5,
    subject: "Maths",
    title: "Mathematics HL",
    description:
      "Advanced IB mathematics with conceptual and practical learning.",
    image: mathImg,
  },
  {
    id: 6,
    subject: "Physics",
    title: "Physics HL",
    description:
      "Explore deeper physics concepts and scientific applications.",
    image: physicsImg,
  },
  {
    id: 7,
    subject: "Chemistry",
    title: "Chemistry HL",
    description:
      "Structured chemistry learning with concepts and practice.",
    image: chemistryImg,
  },
]

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

      <section className={styles.IBProgramSection}>

        <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          <h1>International Baccalaureate <span className={styles.HomeColor}>Programmer</span></h1>
          <span className={styles.HomeLine}></span>
          <p>Internationally recognized curriculum focused on critical
            thinking, analytical skills, and global learning.</p>
        </motion.div>



        <div className={styles.courseSection}>

          <div className={styles.navigation}>

            <button
              className={styles.navBtn}
              onClick={slideLeft}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className={styles.navBtnDark}
              onClick={slideRight}
            >
              <ChevronRight size={20} />
            </button>

          </div>

          <div className={styles.slider} ref={sliderRef}>

            {COURSES.map((course) => (
              <div className={styles.card} key={course.id}>

                <div className={styles.imageWrapper}>
                  <img
                    src={course.image}
                    alt=""
                    className={styles.image}
                  />

                  <span className={styles.tag}>
                    {course.subject}
                  </span>

                </div>

                <div className={styles.content}>

                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                </div>

                <div className={styles.BtnFlex}>
                <button className={styles.enrollBtn}>
                  Enroll Now
                  <ArrowRight size={18} />
                </button>
                </div>

              </div>
            ))}

          </div>
        </div>

      </section>
    </>
  )
}