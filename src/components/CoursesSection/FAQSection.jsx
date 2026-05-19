import './FAQSection.css'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

import faqImage from '../../assets/images/faq-image.jpg'

const FAQS = [
  {
    id: 1,
    question: 'Are classes live or recorded?',
    answer:
      'All classes are conducted live with interactive sessions. Recorded sessions are also provided for revision and missed classes.',
  },
  {
    id: 2,
    question: 'Is study material included?',
    answer:
      'Yes, notes, assignments, and study materials are included with every course for better learning, revision, and exam preparation support.',
  },
  {
    id: 3,
    question: 'Do you provide doubt support?',
    answer:
      'Dedicated doubt-solving sessions and teacher support are available regularly for all enrolled students.',
  },
  {
    id: 4,
    question: 'Can students attend a demo class?',
    answer:
      'Yes, students can attend a free demo class before enrollment to understand our teaching methodology and learning environment.',
  },
  {
    id: 5,
    question: 'Are tests conducted regularly?',
    answer:
      'Regular tests, assessments, and revision practices are conducted to track student progress and improve performance.',
  },
]

export default function FAQSection() {
  const [activeId, setActiveId] = useState(2)

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="faq-section">

      <div className="faq-container">

        {/* HEADER */}
        <div className="faq-header">

          <h2 className="faq-title">
            Frequently Asked <span>Questions</span>
          </h2>

          <div className="faq-underline" />

          <p className="faq-description">
            Find answers to common questions about our courses, learning
            methods, demo classes, study materials, and student support
            services.
          </p>

        </div>

        {/* MAIN CONTENT */}
        <div className="faq-content">

          {/* LEFT IMAGE */}
          <div className="faq-image-wrapper">

            <img
              src={faqImage}
              alt="FAQ Student"
              className="faq-image"
            />

          </div>

          {/* RIGHT FAQ */}
          <div className="faq-list">

            {FAQS.map(({ id, question, answer }) => {
              const isOpen = activeId === id

              return (
                <div
                  key={id}
                  className={`faq-item ${isOpen ? 'faq-item-active' : ''}`}
                >

                  {/* QUESTION */}
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(id)}
                  >

                    <span>{question}</span>

                    <div className="faq-icon">
                      {isOpen ? <X size={22} /> : <Plus size={22} />}
                    </div>

                  </button>

                  {/* ANSWER */}
                  <div
                    className={`faq-answer-wrapper ${
                      isOpen ? 'faq-answer-open' : ''
                    }`}
                  >

                    <p className="faq-answer">
                      {answer}
                    </p>

                  </div>

                </div>
              )
            })}

          </div>

        </div>

      </div>

    </section>
  )
}