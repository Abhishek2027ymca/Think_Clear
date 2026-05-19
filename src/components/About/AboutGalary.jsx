import React from 'react'
import { useState } from 'react';
import styles from './AboutGalary.module.css'
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { AnimatePresence } from "framer-motion";
import learn1 from '../../assets/About/learn1.png'
import learning from '../../assets/About/learning.jpeg'
import student from '../../assets/About/student.jpeg'
import teaching from '../../assets/About/teaching.png'
import using from '../../assets/About/user.png'
import last from '../../assets/About/last.jpg'

const galleryData = [
    {
        id: 1,
        img: learn1
    },

    {
        id: 2,
        img: learning
    },

    {
        id: 3,
        img: student
    },

    {
        id: 4,
        img: teaching
    },

    {
        id: 5,
        img: using
    },

    {
        id: 6,
        img: last
    }
]

function AboutGalary() {


    const [startIndex, setStartIndex] = useState(0)

    const visibleCards = galleryData.slice(startIndex, startIndex + 4)

    const nextSlide = () => {
        if (startIndex < galleryData.length - 4) {
            setStartIndex(startIndex + 2)
        }
    }

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 2)
        }
    }
    return (
        <>
            <section className={styles.AboutGalary}>
                {/* Text */}

                <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} overlay
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
                    <h1>Inside  <span className={styles.HomeColor}>ThinkClear</span></h1>
                    <span className={styles.HomeLine}></span>
                    <p>A closer look at ThinkClear, where learning comes alive through collaboration, interaction,
                        and concept-driven teaching that builds clarity and confidence in students.</p>
                </motion.div>
                {/* Images */}



                <div className={styles.GalleryWrapper}>

                    {/* Gallery Cards */}

                    <div className={styles.GalleryContainer}>

                        {/* {
                            visibleCards.map((item) => (

                                <div className={styles.GalleryCard} key={item.id}>

                                    <img src={item.img} alt='gallery' />

                                </div>

                            ))
                        } */}


                        <AnimatePresence mode="wait">
                            {
                                visibleCards.map((item) => (

                                    <motion.div
                                        className={styles.GalleryCard}
                                        key={item.id}
                                        initial={{ opacity: 0, x: 80 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -80 }}
                                        transition={{ duration: 0.5 }}
                                    >

                                        <img src={item.img} alt='gallery' />

                                    </motion.div>

                                ))
                            }
                        </AnimatePresence>

                    </div>

                    {/* Left Arrow */}

                    {
                        startIndex > 0 && (
                            <button
                                className={`${styles.ArrowBtn} ${styles.LeftArrow}`}
                                onClick={prevSlide}
                            >
                                <ChevronLeft size={28} />
                            </button>
                        )
                    }

                    {/* Right Arrow */}

                    {
                        startIndex < galleryData.length - 4 && (
                            <button
                                className={`${styles.ArrowBtn} ${styles.RightArrow}`}
                                onClick={nextSlide}
                            >
                                <ChevronRight size={28} />
                            </button>
                        )
                    }

                </div>

            </section>
        </>
    );
}

export default AboutGalary;