import './CoursesHero.css'

import { ArrowRight } from 'lucide-react'
import coursesHero from '../../assets/images/courses-hero.png'

export default function CoursesHero() {
  return (
    <section className="courses-hero-section">

      <div className="courses-hero-container">

        {/* LEFT CONTENT */}
        <div className="courses-hero-left">

          {/* Badge */}
          <div className="courses-hero-badge">

            <span className="courses-hero-badge-dot" />

            <span className="courses-hero-badge-text">
              Enroll in ThinkClear Courses Today
            </span>

          </div>

          {/* Heading */}
          <h1 className="courses-hero-title">
            Comprehensive Learning
            <br />
            Programs for Classes 6–12
          </h1>

          {/* Description */}
          <p className="courses-hero-description">
            Structured learning programs for Classes 6–12 designed to improve
            concept clarity, confidence, and academic performance with expert
            guidance.
          </p>

          {/* Buttons */}
          <div className="courses-hero-buttons">

            {/* Explore */}
            <button className="courses-hero-btn">
              Explore Courses
            </button>

            {/* Demo */}
            <button className="courses-hero-btn">
              Book Free Demo
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="courses-hero-right">

          <img
            src={coursesHero}
            alt="ThinkClear student"
            className="courses-hero-image"
          />

        </div>

      </div>

    </section>
  )
}