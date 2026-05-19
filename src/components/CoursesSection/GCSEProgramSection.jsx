import './IBProgramSection.css'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

import mathsImg from '../../assets/courses/gcse/maths.jpg'
import scienceImg from '../../assets/courses/gcse/science.jpg'
import physicsImg from '../../assets/courses/gcse/physics.jpg'
import chemistryImg from '../../assets/courses/gcse/chemistry.jpg'

const COURSES = [
  {
    id: 1,
    subject: 'maths',
    title: 'Mathematics',
    description:
      'Develop strong numerical reasoning and exam-solving techniques for GCSE success.',
    image: mathsImg,
  },
  {
    id: 2,
    subject: 'Science',
    title: 'Combined Science',
    description:
      'Learn integrated science concepts with clear explanations and revision support.',
    image: scienceImg,
  },
  {
    id: 3,
    subject: 'Physics',
    title: 'Physics',
    description:
      'Build understanding of forces, energy, motion, and scientific applications.',
    image: physicsImg,
  },
  {
    id: 4,
    subject: 'Chemistry',
    title: 'Chemistry',
    description:
      'Explore chemical reactions, equations, and practical scientific concepts clearly.',
    image: chemistryImg,
  },
]

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
    <section className="ib-section">

      <div className="ib-container">

        {/* HEADER */}
        <div className="ib-header">

          <div className="ib-header-left">

            <h2 className="ib-title">
              GCSE <span>Programmer</span>
            </h2>

            <div className="ib-underline" />

            <p className="ib-description">
              Comprehensive subject preparation designed to build academic
              confidence and exam success.
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