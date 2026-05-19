import './FreeDemoSection.css'

import { ArrowRight } from 'lucide-react'
import demoImage from '../../assets/images/free-demo.jpg'

export default function FreeDemoSection() {
  return (
    <section className="free-demo-section">

      <div className="free-demo-container">

        {/* TOP TITLE */}
        <div className="free-demo-heading-wrapper">

          <h2 className="free-demo-title">
            Experience a Free <span>Demo Class</span>
          </h2>

          <div className="free-demo-underline" />

        </div>

        {/* CONTENT */}
        <div className="free-demo-content">

          {/* LEFT */}
          <div className="free-demo-left">

            <h3 className="free-demo-subtitle">
              Free Demo Learning Experience
            </h3>

            <p className="free-demo-description">
              Join a free demo session at ThinkClear to explore our teaching
              methods, course structure, and interactive learning environment
              before enrollment. Students of Classes 6–12 can experience live
              interactive demo classes, subject-wise trial sessions, doubt
              interaction opportunities, and concept-based learning with expert
              teacher guidance before joining the full course.
            </p>

            {/* BUTTON */}
            <button className="free-demo-btn">

              <div className="free-demo-btn-icon">
                <ArrowRight size={20} />
              </div>

              <span>Book Free Demo</span>

            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="free-demo-image-wrapper">

            <img
              src={demoImage}
              alt="Free Demo"
              className="free-demo-image"
            />

          </div>

        </div>

      </div>

    </section>
  )
}