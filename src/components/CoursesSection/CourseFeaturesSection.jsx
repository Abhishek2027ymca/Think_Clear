import './CourseFeaturesSection.css'

import { ArrowRight } from 'lucide-react'

import doubtImg from '../../assets/images/courses/features/doubt-support.jpg'
import notesImg from '../../assets/images/courses/features/notes-material.jpg'
import testsImg from '../../assets/images/courses/features/tests.jpg'

const FEATURES = [
  {
    id: 1,
    title: 'Doubt Support',
    description:
      'Students receive dedicated doubt-solving sessions to clarify concepts and improve subject understanding through teacher guidance.',
    image: doubtImg,
  },
  {
    id: 2,
    title: 'Notes & Study Material',
    description:
      'Well-structured notes, assignments, and learning materials are provided for effective preparation and revision.',
    image: notesImg,
  },
  {
    id: 3,
    title: 'Tests & Assessments',
    description:
      'Regular tests and assessments help students track progress, improve performance, and build exam confidence.',
    image: testsImg,
  },
]

export default function CourseFeaturesSection() {
  return (
    <section className="features-section">

      <div className="features-container">

        {/* HEADER */}
        <div className="features-header">

          <h2 className="features-title">
            Course <span>Features</span>
          </h2>

          <div className="features-underline" />

          <p className="features-description">
            Our courses provide academic support through interactive learning,
            study materials, and regular assessments for better student
            performance.
          </p>

        </div>

        {/* CARDS */}
        <div className="features-grid">

          {FEATURES.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="feature-card"
            >

              {/* IMAGE */}
              <div className="feature-image-wrapper">

                <img
                  src={image}
                  alt={title}
                  className="feature-image"
                />

              </div>

              {/* CONTENT */}
              <div className="feature-content">

                <h3 className="feature-title">
                  {title}
                </h3>

                <p className="feature-text">
                  {description}
                </p>

                {/* BUTTON */}
                <button className="feature-btn">

                  <div className="feature-btn-icon">
                    <ArrowRight size={18} />
                  </div>

                  <span>Enroll Now</span>

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}