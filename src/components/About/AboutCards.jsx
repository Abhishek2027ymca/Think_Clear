import React from 'react'
import { ArrowRight } from 'lucide-react'
import styles from './AboutCards.module.css'
import card1 from '../../assets/About/cards1.png'
import card2 from '../../assets/About/card2.png'
import card3 from '../../assets/About/card3.png'
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'



const learningData = [
    {
        id: 1,
        img: card1,
        title: 'From Fear to Confidence',
        desc: 'Helping students learn with confidence and self-belief.'
    },

    {
        id: 2,
        img: card2,
        title: 'From Memorisation to Understanding',
        desc: 'Making concepts clear, meaningful, and easy to understand.'
    },

    {
        id: 3,
        img: card3,
        title: 'Passive studying to active curiosity.',
        desc: 'Encouraging students to explore, question, and think independently.'
    }
]

function AboutCards() {
    return (
        <>

            <section className={styles.AboutCards}>
                {/* text */}

                <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Transforming the Way <span className={styles.HomeColor}>Students Learn</span></h1>
                    <span className={styles.HomeLine}></span>
                    <p>At ThinkClear, learning helps students move beyond fear and memorisation by building confidence,
                        curiosity, and deeper understanding through engaging learning experiences.</p>
                </motion.div>
                {/* cards */}
                <div className={styles.CardContainer}>

                    {
                        learningData.map((item) => (

                            <motion.div className={styles.Card} key={item.id} initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} overlay
                                transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>

                                <div className={styles.CardImage}>
                                    <img className={styles.Img} src={item.img} alt={item.title} />
                                </div>

                                <div className={styles.CardContent}>

                                    <h3>{item.title}</h3>

                                    <p>{item.desc}</p>

                                  <Link to='/contact'>  <button className={styles.demoBtn}>

                                        <span className={styles.iconBox}>
                                            <ArrowRight size={18} />
                                        </span>

                                        <span className={styles.text}>
                                            Enroll Now
                                        </span>

                                    </button></Link>

                                </div>

                            </motion.div>

                        ))
                    }

                </div>
            </section>
        </>
    );
}

export default AboutCards;