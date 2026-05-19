import './CTASection.css'

import ctaStudent from '../../assets/images/cta-student.png'

export default function CTASection() {
  return (
    <section className="cta-section">

      <div className="cta-container">

        {/* LEFT CONTENT */}
        <div className="cta-content">

          <h2 className="cta-title">
            Start Your Journey with ThinkClear
          </h2>

          <p className="cta-description">
            Join structured academic programs designed to improve
            understanding, confidence, and performance for Classes 6–12.
          </p>

          {/* BUTTONS */}
          <div className="cta-buttons">

            <button className="cta-btn cta-btn-primary">
              Enroll Now
            </button>

            <button className="cta-btn cta-btn-secondary">
              Book Free Demo
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="cta-image-wrapper">

          <img
            src={ctaStudent}
            alt="ThinkClear Student"
            className="cta-image"
          />

        </div>

      </div>

    </section>
  )
}