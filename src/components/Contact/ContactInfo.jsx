import { MessageCircle, Mail, Headphones } from 'lucide-react'
import styles from './ContactInfo.module.css'
import { ChevronRight } from "lucide-react";
import { motion } from 'framer-motion';
export default function ContactInfo() {
  return (
    <>
      <section className={styles.contactInfoSection}>

        {/* Section Header */}
        {/* <div className={styles.contactInfoHeader}>
          <h2 className={styles.contactInfoTitle}>Contact Information</h2>
          <div className={styles.contactInfoUnderline} />

          <p className={styles.contactInfoDesc}>
            We're here to assist students and parents with admissions, classes, and
            support. Contact us anytime through phone, WhatsApp, or email.
          </p>
        </div> */}
        <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          <h1>Contact <span className={styles.HomeColor}>Information</span></h1>
          <span className={styles.HomeLine}></span>
          <p>We’re here to assist students and parents with admissions,
            classes, and support. Contact us anytime through phone, WhatsApp, or email.</p>
        </motion.div>

        {/* Main Card */}
        <div className={styles.contactInfoCard}>

          {/* Left: Form */}
          <div className={styles.contactFormSide}>
            <h3 className={styles.contactFormTitle}>SEND A MESSAGE</h3>

            <div className={styles.contactFormUnderline} />

            <p className={styles.contactFormDesc}>
              Have questions about admissions or classes? Send us a message anytime.
            </p>

            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className={styles.contactForm}
            >
              {/* Row 1 */}
              <div className={styles.contactFormRow}>

                <div className={styles.contactFormGroup}>
                  <label>First Name</label>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className={styles.contactFormGroup}>
                  <label>Last Name</label>

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>

              </div>

              {/* Row 2 */}
              <div className={styles.contactFormRow}>

                <div className={styles.contactFormGroup}>
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    required
                  />
                </div>

                <div className={styles.contactFormGroup}>
                  <label>Mobile no.</label>

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter your Mobile No."
                    required
                  />
                </div>

              </div>

              {/* Select Class */}
              <div className={`${styles.contactFormGroup} ${styles.fullWidth}`}>
                <label>Select Class</label>

                <div className={styles.contactSelectWrapper}>

                  <select name="class" required defaultValue="">
                    <option value="" disabled>
                      Select your class
                    </option>

                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>

                  <span className={styles.contactSelectArrow}>▾</span>

                </div>
              </div>

              {/* Message */}
              <div className={`${styles.contactFormGroup} ${styles.fullWidth}`}>
                <label>Message</label>

                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows={4}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className={styles.contactFormSubmitRow}>

                {/* <button type="submit" className={styles.contactSubmitBtn}>

                  <span className={styles.contactSubmitIconWrapper}>
                    <span className={styles.contactSubmitIcon}>›</span>
                  </span>

                  <span className={styles.contactSubmitText}>
                    Book Free Demo
                  </span>

                </button> */}
                <button type="submit" className={styles.demoBtn}>
                  <span className={styles.iconBox}>
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </span>

                  <span className={styles.text}>Book Free Demo</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side */}
          <div className={styles.contactRightSide}>

            {/* Info Box */}
            <div className={styles.contactInfoBox}>

              <h3 className={styles.contactInfoBoxTitle}>
                Hi! we are always
                <br />
                here to help you
              </h3>

              <div className={styles.contactInfoItems}>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/447575441703"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactInfoItem}
                >
                  <div className={styles.contactInfoIcon}>
                    <MessageCircle size={22} color="#fff" />
                  </div>

                  <div>
                    <p className={styles.contactInfoItemTitle}>
                      SMS / Whatsapp
                    </p>

                    <p className={styles.contactInfoItemValue}>
                      +447575441703
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@thinkclear.in"
                  className={styles.contactInfoItem}
                >
                  <div className={styles.contactInfoIcon}>
                    <Mail size={22} color="#fff" />
                  </div>

                  <div>
                    <p className={styles.contactInfoItemTitle}>
                      Email:
                    </p>

                    <p className={styles.contactInfoItemValue}>
                      info@thinkclear.in
                    </p>
                  </div>
                </a>

                {/* Hotline */}
                <a
                  href="tel:+447575441703"
                  className={styles.contactInfoItem}
                >
                  <div className={styles.contactInfoIcon}>
                    <Headphones size={22} color="#fff" />
                  </div>

                  <div>
                    <p className={styles.contactInfoItemTitle}>
                      Hotline:
                    </p>

                    <p className={styles.contactInfoItemValue}>
                      +447575441703
                    </p>
                  </div>
                </a>

              </div>

              {/* Social Icons */}
              <div className={styles.contactSocialIcons}>

                {/* Facebook */}
                <a href="#" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a href="#" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>

              </div>
            </div>

            {/* Google Map */}
            <div className={styles.contactMap}>
              <iframe
                title="ThinkClear Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3558!2d72.8997!3d19.0506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627b5555555%3A0xabcdef!2sEkta+Crest%2C+Union+Park%2C+Chembur%2C+Mumbai!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}