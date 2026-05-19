import './TeachingApproachSection.css'

import {
  Lightbulb,
  ListOrdered,
  BrainCircuit,
  Headphones,
} from 'lucide-react'

const APPROACHES = [
  {
    id: 1,
    icon: <Lightbulb size={30} strokeWidth={1.8} />,
    title: 'Simplified Concept Learning',
    description:
      'Complex topics are explained in simple and easy-to-understand teaching methods for better learning.',
  },
  {
    id: 2,
    icon: <ListOrdered size={30} strokeWidth={1.8} />,
    title: 'Step-by-Step Guidance',
    description:
      'Students learn concepts gradually with structured lessons and detailed explanations.',
  },
  {
    id: 3,
    icon: <BrainCircuit size={30} strokeWidth={1.8} />,
    title: 'Practical Problem Solving',
    description:
      'Regular exercises and real examples improve analytical and problem-solving abilities.',
  },
  {
    id: 4,
    icon: <Headphones size={30} strokeWidth={1.8} />,
    title: 'Academic Support',
    description:
      'Revision sessions, doubt solving, and practice tests ensure consistent improvement.',
  },
]

export default function TeachingApproachSection() {
  return (
    <section className="teaching-section">

      <div className="teaching-container">

        {/* HEADER */}
        <div className="teaching-header">

          <h2 className="teaching-title">
            Our Teaching <span>Approach</span>
          </h2>

          <div className="teaching-underline" />

          <p className="teaching-description">
            Student-focused learning with simplified concepts, interactive
            teaching, and continuous academic support.
          </p>

        </div>

        {/* CARDS */}
        <div className="teaching-grid">

          {APPROACHES.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="teaching-card"
            >

              {/* ICON */}
              <div className="teaching-icon-box">
                {icon}
              </div>

              {/* TITLE */}
              <h3 className="teaching-card-title">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p className="teaching-card-description">
                {description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}