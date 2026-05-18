import React from 'react'
import styles from './HomeStudent.module.css'
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'
import sneha from '../../assets/images/sneha.jpg'
import parent from '../../assets/images/parent.jpg'
import student from '../../assets/images/student.jpg'

const reviews = [
    {
        id: 1,
        title: 'Student Review',
        desc: '“ThinkClear made Maths easy to understand. The live classes and doubt sessions helped me improve my marks.”',
        img: student,
        name: 'Rahul',
        class: 'Class 10'
    },
    {
        id: 2,
        title: 'Parent Review',
        desc: '“The teaching approach is simple and effective. My child became more confident in studies after joining ThinkClear.”',
        img: parent,
        name: 'Parent',
        class: 'Class 8 Student'
    },
    {
        id: 3,
        title: 'Student Review',
        desc: '“The recorded classes helped me revise anytime before exams. Very useful and easy to follow.”',
        img: sneha,
        name: 'Sneha',
        class: 'Class 12'
    }
]

function HomeStudent() {
    return (
        <>
            <section className={styles.HomeStudent}>

                <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Student & <span className={styles.HomeColor}>Parent Testimonials</span></h1>
                    <span className={styles.HomeLine}></span>
                    <p>Hear from students and parents who experienced better understanding, improved
                        confidence, and academic growth with ThinkClear.</p>
                </motion.div>


                <div className={styles.ReviewContainer}>

                    {
                        reviews.map((item) => (
                            <div className={styles.ReviewCard} key={item.id}>

                                <h3>{item.title}</h3>

                                <p className={styles.Description}>
                                    {item.desc}
                                </p>

                                <div className={styles.BottomSection}>

                                    <div className={styles.Profile}>
                                        <img src={item.img} alt={item.name} />

                                        <div>
                                            <h4>{item.name}</h4>
                                            <span>{item.class}</span>
                                        </div>
                                    </div>

                                    <div className={styles.Rating}>
                                        <div className={styles.Stars}>
                                            <Star fill="#F4B400" color="#F4B400" size={16} />
                                            <Star fill="#F4B400" color="#F4B400" size={16} />
                                            <Star fill="#F4B400" color="#F4B400" size={16} />
                                            <Star fill="#F4B400" color="#F4B400" size={16} />
                                            <Star fill="#F4B400" color="#F4B400" size={16} />
                                        </div>

                                        <span>5.0 Ratings</span>
                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>


            </section>
        </>
    );
}

export default HomeStudent;