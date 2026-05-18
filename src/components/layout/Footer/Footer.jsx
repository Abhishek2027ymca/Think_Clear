import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (

        <>
            <section className={styles.Footer}>
                {/* Line */}
                <div className={styles.FooterName}>
                    <div className={styles.FooterLine}></div>
                    <h1>IMPROVE YOUR FUTURE</h1>
                     <div className={styles.FooterLines}></div>
                </div>

                {/* footer */}

                <div className={styles.Footerwidth}>
                    {/* TextsPara */}
                    <div className={styles.FooterClass}>
                        <div className={styles.FooterImgText}>
                            <img />
                        </div>
                    </div>
                    {/* Quiks LInnks */}
                </div>
                {/*  */}
            </section>
        </>
    );
}

export default Footer;