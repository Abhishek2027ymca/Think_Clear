// import React from 'react'
// import { useState } from 'react';
// import styles from './AboutGalary.module.css'
// import { motion } from 'framer-motion';
// import { ChevronRight, ChevronLeft } from 'lucide-react'
// import { AnimatePresence } from "framer-motion";
// import learn1 from '../../assets/About/laptop.png'
// import learning from '../../assets/About/learning1.png'
// import student from '../../assets/About/student1.png'
// import teaching from '../../assets/About/teaching1.png'
// import using from '../../assets/About/user.png'
// import last from '../../assets/About/bus.png'
// import video1 from '../../assets/About/video1.mp4'
// import video2 from '../../assets/About/video2.mp4'

// // const galleryData = [
// //     {
// //         id: 1,
// //         img: learn1
// //     },

// //     {
// //         id: 2,
// //         img: learning
// //     },

// //     {
// //         id: 3,
// //         img: student
// //     },

// //     {
// //         id: 4,
// //         img: teaching
// //     },

// //     {
// //         id: 5,
// //         img: using
// //     },

// //     {
// //         id: 6,
// //         img: last
// //     },
// // ]


// const galleryData = [
//     {
//         id: 1,
//         type: "image",
//         src: learn1
//     },

//     {
//         id: 2,
//         type: "video",
//         src: video2
//     },

//     {
//         id: 3,
//         type: "image",
//         src: learning
//     },

//     {
//         id: 4,
//         type: "image",
//         src: student
//     },

//     {
//         id: 5,
//         type: "video",
//         src: video1
//     },

//     {
//         id: 6,
//         type: "image",
//         src: teaching
//     },

//     {
//         id: 7,
//         type: "image",
//         src: using
//     },

//     {
//         id: 8,
//         type: "image",
//         src: last
//     },
// ]

// function AboutGalary() {


//     const [startIndex, setStartIndex] = useState(0)

//     const visibleCards = galleryData.slice(startIndex, startIndex + 4)

//     const nextSlide = () => {
//         if (startIndex < galleryData.length - 4) {
//             setStartIndex(startIndex + 2)
//         }
//     }

//     const prevSlide = () => {
//         if (startIndex > 0) {
//             setStartIndex(startIndex - 2)
//         }
//     }
//     return (
//         <>
//             <section className={styles.AboutGalary}>
//                 {/* Text */}

//                 <motion.div className={styles.HomeText} initial={{ opacity: 0, y: 100 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }} overlay
//                     transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
//                     <h1>Inside  <span className={styles.HomeColor}>ThinkClear</span></h1>
//                     <span className={styles.HomeLine}></span>
//                     <p>A closer look at ThinkClear, where learning comes alive through collaboration, interaction,
//                         and concept-driven teaching that builds clarity and confidence in students.</p>
//                 </motion.div>
//                 {/* Images */}



//                 <div className={styles.GalleryWrapper}>

//                     {/* Gallery Cards */}

//                     <div className={styles.GalleryContainer}>

//                         {/* {
//                             visibleCards.map((item) => (

//                                 <div className={styles.GalleryCard} key={item.id}>

//                                     <img src={item.img} alt='gallery' />

//                                 </div>

//                             ))
//                         } */}


//                         {/* <AnimatePresence mode="wait">
//                             {
//                                 visibleCards.map((item) => (

//                                     <motion.div
//                                         className={styles.GalleryCard}
//                                         key={item.id}
//                                         initial={{ opacity: 0, x: 80 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         exit={{ opacity: 0, x: -80 }}
//                                         transition={{ duration: 0.5 }}
//                                     >

//                                         <img src={item.img} alt='gallery' />

//                                     </motion.div>

//                                 ))
//                             }
//                         </AnimatePresence> */}

//                         <AnimatePresence mode="wait">
//                             {
//                                 visibleCards.map((item) => (

//                                     <motion.div
//                                         className={styles.GalleryCard}
//                                         key={item.id}
//                                         initial={{ opacity: 0, x: 80 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         exit={{ opacity: 0, x: -80 }}
//                                         transition={{ duration: 0.5 }}
//                                     >

//                                         {
//                                             item.type === "video" ? (

//                                                 <video
//                                                     src={item.src}
//                                                     autoPlay
//                                                     muted
//                                                     loop
//                                                     playsInline
//                                                 />

//                                             ) : (

//                                                 <img src={item.src} alt='gallery' />

//                                             )
//                                         }

//                                     </motion.div>

//                                 ))
//                             }
//                         </AnimatePresence>

//                     </div>

//                     {/* Left Arrow */}

//                     {
//                         startIndex > 0 && (
//                             <button
//                                 className={`${styles.ArrowBtn} ${styles.LeftArrow}`}
//                                 onClick={prevSlide}
//                             >
//                                 <ChevronLeft size={28} />
//                             </button>
//                         )
//                     }

//                     {/* Right Arrow */}

//                     {
//                         startIndex < galleryData.length - 4 && (
//                             <button
//                                 className={`${styles.ArrowBtn} ${styles.RightArrow}`}
//                                 onClick={nextSlide}
//                             >
//                                 <ChevronRight size={28} />
//                             </button>
//                         )
//                     }

//                 </div>

//             </section>
//         </>
//     );
// }

// export default AboutGalary;



import React, { useState } from 'react'
import styles from './AboutGalary.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, X } from 'lucide-react'

import learn1 from '../../assets/About/laptop.png'
import learning from '../../assets/About/learning1.png'
import student from '../../assets/About/student1.png'
import teaching from '../../assets/About/teaching1.png'
import using from '../../assets/About/user.png'
import last from '../../assets/About/bus.png'

import video1 from '../../assets/About/video1.mp4'
import video2 from '../../assets/About/video2.mp4'

const galleryData = [
    {
        id: 1,
        type: "image",
        src: learn1
    },

    {
        id: 2,
        type: "video",
        src: video2
    },

    {
        id: 3,
        type: "image",
        src: learning
    },

    {
        id: 4,
        type: "image",
        src: student
    },

    {
        id: 5,
        type: "video",
        src: video1
    },

    {
        id: 6,
        type: "image",
        src: teaching
    },

    {
        id: 7,
        type: "image",
        src: using
    },

    {
        id: 8,
        type: "image",
        src: last
    },
]

function AboutGalary() {

    const [startIndex, setStartIndex] = useState(0)

    const [selectedItem, setSelectedItem] = useState(null)

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

                <motion.div
                    className={styles.HomeText}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
                >

                    <h1>
                        Inside <span className={styles.HomeColor}>ThinkClear</span>
                    </h1>

                    <span className={styles.HomeLine}></span>

                    <p>
                        A closer look at ThinkClear, where learning comes alive
                        through collaboration, interaction, and concept-driven
                        teaching that builds clarity and confidence in students.
                    </p>

                </motion.div>

                {/* Gallery */}

                <div className={styles.GalleryWrapper}>

                    <div className={styles.GalleryContainer}>

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
                                        onClick={() => setSelectedItem(item)}
                                    >

                                        {
                                            item.type === "video" ? (

                                                <video
                                                    src={item.src}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                />

                                            ) : (

                                                <img
                                                    src={item.src}
                                                    alt="gallery"
                                                />

                                            )
                                        }

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

                {/* Popup */}

                <AnimatePresence>

                    {
                        selectedItem && (

                            <motion.div
                                className={styles.PopupOverlay}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedItem(null)}
                            >

                                <motion.div
                                    className={styles.PopupContent}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={(e) => e.stopPropagation()}
                                >

                                    {/* Close Button */}

                                    <button
                                        className={styles.CloseBtn}
                                        onClick={() => setSelectedItem(null)}
                                    >

                                        <X size={28} />

                                    </button>

                                    {
                                        selectedItem.type === "video" ? (

                                            <video
                                                src={selectedItem.src}
                                                controls
                                                autoPlay
                                                loop
                                            />

                                        ) : (

                                            <img
                                                src={selectedItem.src}
                                                alt="popup"
                                            />

                                        )
                                    }

                                </motion.div>

                            </motion.div>

                        )
                    }

                </AnimatePresence>

            </section>
        </>
    )
}

export default AboutGalary