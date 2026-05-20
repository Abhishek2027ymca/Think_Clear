import React from 'react'
import { motion } from 'framer-motion';
import styles from './PoliciesGrow.module.css'
import {
  ArrowUpRight,
  Megaphone,
  MessageCircleMore,
  Hand
} from "lucide-react";
import img1 from '../../assets/Policies/img1.png'
import img2 from '../../assets/Policies/img2.png'
import img3 from '../../assets/Policies/img3.png'


function PoliciesGrow() {
  return (
    <>
      <section className={styles.PoliciesGrow}>
        {/* TExt */}

        <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          <h1>Grow <span className={styles.HomeColor}>ThinkClear</span></h1>
          <span className={styles.HomeLine}></span>
          <p>Set up social media, advertising platforms, payment systems, and
            audience strategies to build a powerful online learning brand.</p>
        </motion.div>

        {/* cards */}

        <motion.div className={styles.PoliciesCards} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          {/*  */}
          <div className={styles.Policies2}>
            <div className={styles.card1}>
              <h1>Learn & Connect with ThinkClear
                on Instagram & Facebook</h1>
            </div>

            {/*  */}
            <div className={styles.card2}>
              <div className={styles.iconBoxBlue}>
                <MessageCircleMore size={30} />
              </div>

              <h3 className={styles.smallTitle}>
                Parent & Student Engagement
              </h3>

              <p className={styles.smallText}>
                Build trust with students and parents through
                educational content, success stories and
                personalized learning experiences.
              </p>

            </div>
          </div>

          {/*  */}

          <div className={styles.middlecard}>
            <div className={styles.Combine}>
              <div className={styles.cardText}>
                <div className={styles.PoliTitle}>
                  <h1>Secure Course Enrollment</h1>
                </div>
                <div className={styles.arrow}>
                  <ArrowUpRight size={18} />
                </div>

                {/*  */}
              </div>
              <p>Complete course enrollment with secure Razorpay or
                Stripe payments and bank transfer support for a smooth learning experience.</p>
            </div>
            {/*  */}
            <div className={styles.MiddleWidth}>
              <div className={styles.MiddleImg}>
                <img src={img2} alt='error' />
              </div>
            </div>
          </div>

          {/*  */}

          <div className={styles.Policies2}>
            <div className={styles.card2}>
              <div className={styles.iconsBoxBlue}>
                <Megaphone size={30} />
              </div>

              <h3 className={styles.smallTitle}>
                Student Growth Campaigns
              </h3>

              <p className={styles.smallText}>
                Plan affordable, location-based marketing campaigns
                to help more students discover and learn about ThinkClear courses.
              </p>

            </div>

            {/*  */}
            <div className={styles.cards1}>
            </div>

          </div>
        </motion.div>

      </section>
    </>
  );
}

export default PoliciesGrow;