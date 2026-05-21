import { motion } from 'framer-motion';
import { CloudMoonRain, Dot, ChevronRight, MoveRight } from 'lucide-react';
import contactStudent from '../../assets/images/contact-hero.png'
import styles from './hero.module.css'
import {Link} from 'react-router-dom'
export default function ContactHero() {
  return (
    <>
      <section className={styles.HomeBanner}>
        <div className={styles.HomeBannerSpace}>
          {/* text */}
          <motion.div className={styles.HomeTextValue} initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
            <motion.div className={styles.HomePadding} initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} overlay
              transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
              <Dot style={{ color: "white" }} size={30} />
              <span>Let’s Connect</span>
            </motion.div>
            <h1>Need Help Choosing <br />the Right Course?</h1>
            <p>We’re here to help students and parents with admissions and support. 
              Feel free to contact us through call, WhatsApp, or the contact form below.</p>
            <div className={styles.HomeBtn}>
             <Link to='/courses'><button>Explore Courses</button></Link> <button>Book Free Demo    <MoveRight /></button>
            </div>
          </motion.div>
          {/* Image */}

          {/* <div className={styles.BannerImage}>
                                <div className={styles.ImageSection}>
                                    <img  src={Hero} alt='hero' />
                                </div>
                            </div> */}

          <motion.div className={styles.BannerImage} initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} overlay
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}>
            <div className={styles.ImageSection}>
              <img src={contactStudent} alt='hero' />
            </div>
          </motion.div>
        </div>
      </section>

    </>
  )
}