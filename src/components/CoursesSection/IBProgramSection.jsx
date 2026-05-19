import './IBProgramSection.css'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

import mathImg from '../../assets/courses/maths.jpg'
import physicsImg from '../../assets/courses/physics.jpg'
import chemistryImg from '../../assets/courses/chemistry.jpg'
import biologyImg from '../../assets/courses/biology.jpg'

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
]

export default function IBProgramSection() {
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

          {/* LEFT */}
          <div className="ib-header-left">

            <h2 className="ib-title">
              International Baccalaureate{' '}
              <span>Programmer</span>
            </h2>

            <div className="ib-underline" />

            <p className="ib-description">
              Internationally recognized curriculum focused on critical thinking,
              analytical skills, and global learning.
            </p>

          </div>

          {/* RIGHT */}
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