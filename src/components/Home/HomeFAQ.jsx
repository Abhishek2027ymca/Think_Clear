import React from 'react'
import { useState } from 'react'
import styles from './HomeFAQ.module.css'
import { motion } from 'framer-motion';
import {
    Plus,
    X
} from 'lucide-react'
import kid from '../../assets/images/kids.png'
function HomeFAQ() {
    const [activeId, setActiveId] = useState(2)

    const toggleFaq = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    const faqData = [
        {
            id: 1,
            question: 'Which classes does ThinkClear provide coaching for?',
            answer: 'We provide coaching for students from Classes 6 to 12 with concept-focused learning and expert guidance.'
        },

        {
            id: 2,
            question: 'Are the classes live or recorded?',
            answer: 'We provide both live interactive classes and recorded sessions so students can learn and revise anytime.'
        },

        {
            id: 3,
            question: 'What subjects are available at ThinkClear?',
            answer: 'ThinkClear offers Maths, Science, Physics, Chemistry, Biology, and other academic subjects.'
        },

        {
            id: 4,
            question: 'Do students get doubt-solving support?',
            answer: 'Yes, dedicated doubt-solving sessions are available to help students understand every topic clearly.'
        },

        {
            id: 5,
            question: 'Is a demo class available before enrollment?',
            answer: 'Yes, students can attend a demo class before enrollment to experience our teaching approach.'
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
                    <p>Find answers to common questions about ThinkClear’s courses,
                        learning approach, classes, and student support.</p>
                </motion.div>

                <div className={styles.FaqContainer}>

                    {/* Left Image */}
                    <motion.div className={styles.FaqImage} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <img
                            src={kid}
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
    );
}

export default HomeFAQ;