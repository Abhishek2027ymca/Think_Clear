import styles from './FAQSection.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion';
import {
  Plus,
  X
} from 'lucide-react'
import faqImage from '../../assets/images/faq-image.jpg'


export default function FAQSection() {
  const [activeId, setActiveId] = useState(2)

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  const faqData = [
    {
      id: 1,
      question: 'Are classes live or recorded?',
      answer: 'We provide both live interactive classes and recorded sessions for revision.'
    },

    {
      id: 2,
      question: 'Is study material included?',
      answer: 'Yes, notes, assignments, and study materials are included with every course for better learning, revision, and exam preparation support.'
    },

    {
      id: 3,
      question: 'Do you provide doubt support?',
      answer: 'Yes, students receive dedicated doubt-solving assistance.'
    },

    {
      id: 4,
      question: 'Can students attend a demo class?',
      answer: 'Yes, free demo classes are available before enrollment.'
    },

    {
      id: 5,
      question: 'Are tests conducted regularly?',
      answer: 'Yes, weekly tests and assessments are conducted to track progress.'
    }
  ]

  return (
    <>
      <section className={styles.HomeFAQ}>

        <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} overlay
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
          <h1>Frequently Asked <span className={styles.HomeColor}>Questions</span></h1>
          <span className={styles.HomeLine}></span>
          <p>Find answers to common questions about our courses, learning methods, demo
            classes, study materials, and student support services.</p>
        </motion.div>

        <div className={styles.FaqContainer}>

          {/* Left Image */}
          <motion.div className={styles.FaqImage} initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
            <img
              src={faqImage}
              alt='faq'
            />
          </motion.div>

          {/* Right FAQ */}
          <motion.div className={styles.FaqContent} initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

            {
              faqData.map((item) => (

                <div
                  key={item.id}
                  className={`${styles.FaqCard} ${activeId === item.id ? styles.Active : ''
                    }`}
                >

                  <div
                    className={styles.Question}
                    onClick={() => toggleFaq(item.id)}
                  >

                    <h3>{item.question}</h3>

                    <div className={styles.IconBox}>
                      {
                        activeId === item.id
                          ? <X size={22} strokeWidth={2.5} />
                          : <Plus size={22} strokeWidth={2.5} />
                      }
                    </div>

                  </div>

                  <div
                    className={`${styles.AnswerWrapper} ${activeId === item.id
                      ? styles.ShowAnswer
                      : ''
                      }`}
                  >
                    <p>{item.answer}</p>
                  </div>

                </div>

              ))
            }

          </motion.div>

        </div>

      </section>
    </>
  )
}