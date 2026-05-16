import React from 'react'
import styles from './HomeOffer.module.css'
import Inter from '../../assets/images/IB.jpeg'
import IGCSE from '../../assets/images/IGCSE.jpeg'
import Level from  '../../assets/images/Level.jpeg'
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

function HomeOffer() {
    const courseItems = [
        {
            id: 1,
            img: Inter,
            title: "International Baccalaureate",
            desc: "Explore internationally recognized IB subjects designed to build analytical thinking, research skills, and global understanding."
        },
        {
            id: 2,
            img: IGCSE,
            title: "IGCSE / GCSE",
            desc: "Strong concept-based learning aligned with Cambridge and Edexcel standards for academic excellence and exam confidence."
        },
        {
            id: 3,
            img: Level,
            title: "A Level",
            desc: "Advanced subject-focused preparation for university admissions and competitive academic pathways worldwide."
        }
    ]
    return (
        <>
            <section className={styles.HomeOffer}>
                <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>International Curricula <span className={styles.HomeColor}>We Offer</span></h1>
                    <span className={styles.HomeLine}></span>
                    <p>Explore globally recognized curricula designed to build
                        strong academic foundations, critical
                        thinking, and subject mastery for international success.</p>
                </motion.div>


                {/* Cards */}
                <div className={styles.CourseContainer}>
                    {
                        courseItems.map((item) => (
                            <div className={styles.CourseCard} key={item.id}>
                                <img src={item.img} alt={item.title} />

                                <div className={styles.CourseContent}>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>

                                    <button>View More</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
        </>
    );
}

export default HomeOffer;