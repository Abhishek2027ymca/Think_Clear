import './IBProgramSection.css'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

import mathsImg from '../../assets/courses/igcse/maths.jpg'
import physicsImg from '../../assets/courses/igcse/physics.jpg'
import chemistryImg from '../../assets/courses/igcse/chemistry.jpg'
import biologyImg from '../../assets/courses/igcse/biology.jpg'

const COURSES = [
  {
    id: 1,
    subject: 'maths',
    title: 'Mathematics',
    description:
      'Strengthen mathematical concepts and improve logical problem-solving confidence.',
    image: mathsImg,
  },
  {
    id: 2,
    subject: 'Physics',
    title: 'Physics',
    description:
      'Learn physics through clear theory explanations and practical numerical applications.',
    image: physicsImg,
  },
  {
    id: 3,
    subject: 'Chemistry',
    title: 'Chemistry',
    description:
      'Understand chemistry concepts through simplified explanations and guided practice.',
    image: chemistryImg,
  },
  {
    id: 4,
    subject: 'Biology',
    title: 'Biology',
    description:
      'Build strong understanding of biological processes with structured learning support.',
    image: biologyImg,
  },
]

export default function IGCSEProgramSection() {
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
              IGCSE <span>Programmer</span>
            </h2>

            <div className="ib-underline" />

            <p className="ib-description">
              Strong academic foundation with internationally recognized subjects
              and concept-based learning.
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

                {/* SUBJECT */}
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