import './IBProgramSection.css'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

import mathsImg from '../../assets/courses/alevel/maths.jpg'
import furtherMathsImg from '../../assets/courses/alevel/further-maths.jpg'
import physicsImg from '../../assets/courses/alevel/physics.jpg'
import chemistryImg from '../../assets/courses/alevel/chemistry.jpg'

const COURSES = [
  {
    id: 1,
    subject: 'maths',
    title: 'Mathematics',
    description:
      'Master advanced mathematical concepts and problem-solving techniques confidently.',
    image: mathsImg,
  },
  {
    id: 2,
    subject: 'maths',
    title: 'Further Mathematics',
    description:
      'Develop deeper analytical and advanced mathematical reasoning skills.',
    image: furtherMathsImg,
  },
  {
    id: 3,
    subject: 'Physics',
    title: 'Physics',
    description:
      'Study advanced physics concepts with practical applications and numerical mastery.',
    image: physicsImg,
  },
  {
    id: 4,
    subject: 'Chemistry',
    title: 'Chemistry',
    description:
      'Build strong conceptual understanding for organic, physical, and inorganic chemistry.',
    image: chemistryImg,
  },
]

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
    <section className="ib-section">

      <div className="ib-container">

        {/* HEADER */}
        <div className="ib-header">

          <div className="ib-header-left">

            <h2 className="ib-title">
              A Level <span>Programmer</span>
            </h2>

            <div className="ib-underline" />

            <p className="ib-description">
              Advanced subject specialization focused on university preparation
              and deeper academic understanding.
            </p>

          </div>

          {/* NAVIGATION */}
          <div className="ib-nav-buttons">

            <button
              onClick={() => scroll('left')}
              className="ib-nav-btn ib-nav-btn-light"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scroll('right')}
              className="ib-nav-btn ib-nav-btn-dark"
            >
              <ChevronRight size={22} />
            </button>

          </div>

        </div>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="ib-cards-row"
        >

          {COURSES.map(({ id, subject, title, description, image }) => (
            <div
              key={id}
              className="ib-card"
            >

              {/* IMAGE */}
              <div className="ib-card-image-wrapper">

                <img
                  src={image}
                  alt={title}
                  className="ib-card-image"
                />

                <div className="ib-subject-badge">
                  {subject}
                </div>

              </div>

              {/* CONTENT */}
              <div className="ib-card-content">

                <h3 className="ib-card-title">
                  {title}
                </h3>

                <p className="ib-card-description">
                  {description}
                </p>

                <button className="ib-enroll-btn">
                  Enroll Now
                  <ArrowRight size={17} />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}