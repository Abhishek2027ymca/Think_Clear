import React from 'react'
import styles from './HomeChoose.module.css'
import {
    BookOpen,
    GraduationCap,
    Video,
    ClipboardCheck,
    MessageCircleQuestion,
    BadgeDollarSign,
    Timer
} from 'lucide-react'
import { motion } from 'framer-motion';



const features = [
    {
        id: 1,
        icon: <BookOpen style={{ fontWeight: "500" }} size={42} />,
        title: 'Concept Clarity Focused',
        desc: 'We simplify difficult topics and help students understand concepts deeply instead of memorizing answers.'
    },
    {
        id: 2,
        icon: <GraduationCap size={42} />,
        title: 'Expert Mentorship',
        desc: 'Learn from experienced teachers who guide students personally at every step.'
    },
    {
        id: 3,
        icon: <Timer size={42} />,
        title: 'Crash Courses',
        desc: 'Complete 10–15 focused sessions with concept revision, doubt-clearing support, and exam-oriented preparation for better performance.'
    },
    {
        id: 4,
        icon: <ClipboardCheck size={42} />,
        title: 'Regular Tests & Progress',
        desc: 'Weekly tests, assignments, and performance reports help students stay consistent.'
    },
    {
        id: 5,
        icon: <MessageCircleQuestion size={42} />,
        title: 'Doubt Support',
        desc: 'Dedicated doubt-solving sessions ensure no student is left behind.'
    },
    {
        id: 6,
        icon: <BadgeDollarSign style={{ fontWeight: "500" }} size={42} />,
        title: 'Affordable Quality Education',
        desc: 'High-quality learning experience designed for every student at an affordable price.'
    }
]
function HomeChoose() {
    return (<>
        <section className={styles.HomeChoose}>
            <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} overlay
                transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                <h1>Why Choose <span className={styles.HomeColor}>ThinkClear</span></h1>
                <span className={styles.HomeLine}></span>
                <p>We don't just teach we build understanding.
                    Every concept, every session, designed to make you think clearly.</p>
            </motion.div>

            <div className={styles.FeatureContainer}>
                {
                    features.map((item) => (
                        <motion.div className={styles.FeatureCard} key={item.id} initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} overlay
                            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                            <div className={styles.IconBox}>
                                <span className={styles.icon}>{item.icon}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))
                }
            </div>

        </section>
    </>);
}

export default HomeChoose;