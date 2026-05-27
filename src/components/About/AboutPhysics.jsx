import React from 'react'
import {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import styles from './AboutPhysics.module.css'
import { ChevronLeft, ChevronRight } from "lucide-react";

import biologyImg from "../../assets/About/biology.jpg";
import mathsImg from "../../assets/About/maths1.jpg";
import physicsImg from "../../assets/About/physics.jpg";

const teachers = [
    {
        id: 1,
        name: "Kirti Nagpal",
        subject: "Biology",
        description:
            "An accomplished IB educator with 9+ years of experience teaching IB DP, MYP, IGCSE, and CAIE Biology and Environmental Systems & Societies (ESS). Skilled in inquiry-based and concept-driven learning, curriculum planning, assessment moderation, and interdisciplinary teaching aligned with IB frameworks. Experienced in supervising Extended Essays, mentoring Internal Assessments, integrating Theory of Knowledge (TOK), and fostering student-centered learning environments. Recognized for strong leadership in programme development, academic integrity implementation, and holistic learner growth across international school settings.",
        image: biologyImg
    },
    {
        id: 2,
        name: "Mridula Mondal",
        subject: "Mathematics",
        description:
            "A passionate mathematics educator and learning facilitator with experience in private tutoring, international curriculum support, and innovative pedagogy. Adept at designing engaging, student-focused learning experiences that encourage critical thinking and problem-solving. Experienced in teaching students across ICSE, CBSE, and Cambridge/IGCSE curricula, with a strong foundation in educational psychology, child protection practices, and technology-integrated learning. Combines technical expertise with effective communication and mentoring skills to create impactful academic outcomes for diverse learners globally.",
        image: mathsImg
    },
    {
        id: 3,
        name: "Mrinalini",
        subject: "Physics",
        description:
            "Dedicated and passionate educator with over 10 years of teaching experience in Science and Mathematics for senior secondary and graduation-level students. Holds a Bachelor’s degree in Electronics & Communication Engineering with prior industry experience as a Project Engineer at Wipro Technologies. Skilled in simplifying complex concepts, mentoring students, and creating result-oriented learning environments. Known for strong commitment, analytical thinking, and excellent communication skills.",
        image: physicsImg
    }
];



function AboutPhysics() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % teachers.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + teachers.length) % teachers.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>


            <section className={styles.AboutMath}>
                <div className={styles.teacherSection}>
                    <div className={styles.topContent}>
                        <h2 className={styles.heading}>Our Expert <span className={styles.HomeColor}>Teachers</span></h2>
                        <span className={styles.HomeLine}></span>
                        <p className={styles.shortDescription}>
                            Meet our experienced educators dedicated to creating engaging,
                            student-focused learning experiences across international curricula.
                        </p>
                    </div>

                    <div className={styles.teacherSections}>
                        <div className={styles.sliderWrapper}>
                            {teachers.map((teacher, index) => (
                                <div
                                    key={teacher.id}
                                    className={`${styles.card} ${index === current ? styles.active : styles.hidden
                                        }`}
                                >
                                    <div className={styles.leftContent}>
                                        <span className={styles.subject}>{teacher.subject}</span>

                                        <h2>{teacher.name}</h2>

                                        <p>{teacher.description}</p>
                                    </div>

                                    <div className={styles.rightImage}>
                                        <img src={teacher.image} alt={teacher.name} />
                                    </div>
                                </div>
                            ))}

                            <button className={styles.prevBtn} onClick={prevSlide}>
                                <ChevronLeft size={28} />
                            </button>

                            <button className={styles.nextBtn} onClick={nextSlide}>
                                <ChevronRight size={28} />
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutPhysics;