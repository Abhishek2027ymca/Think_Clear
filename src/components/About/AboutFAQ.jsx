import React from 'react'
import { useState } from 'react';
import styles from './AboutFAQ.module.css'
import { motion } from 'framer-motion';
import {
    Plus,
    X
} from 'lucide-react'
import styding from '../../assets/About/studying.png'


function AboutFAQ() {


    const [activeId, setActiveId] = useState(2)

    const toggleFaq = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    const faqData = [
        {
            id: 1,
            question: 'What is ThinkClear?',
            answer: 'ThinkClear is a learning initiative focused on concept clarity, confidence-building, and curiosity-driven education for international curriculum students.'
        },

        {
            id: 2,
            question: 'Which curricula does ThinkClear support?',
            answer: 'ThinkClear supports international curricula including IB (IBDP), IGCSE, GCSE, A-Level, and middle school science programs.'
        },

        {
            id: 3,
            question: 'What makes ThinkClear different from traditional learning?',
            answer: 'ThinkClear focuses on understanding, curiosity, and confidence instead of memorisation-based learning.'
        },

        {
            id: 4,
            question: 'Who is the founder of ThinkClear?',
            answer: 'ThinkClear was founded by Charu Yadav, an international curriculum educator and science mentor with over a decade of teaching experience.'
        },

        {
            id: 5,
            question: 'Is a demo class available before enrollment?',
            answer: 'Yes, ThinkClear offers interactive online learning sessions for students across different countries and international curricula.'
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
                    <p>Get quick answers about ThinkClear, our approach, and how we help 
                        students learn with clarity, confidence, and curiosity..</p>
                </motion.div>

                <div className={styles.FaqContainer}>

                    {/* Left Image */}
                    <motion.div className={styles.FaqImage} initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} overlay
                        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                        <img
                            src={styding}
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

export default AboutFAQ;