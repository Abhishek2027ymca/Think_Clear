import React from 'react'
import styles from './Footer.module.css'
import logo from '../../../assets/Footer/logo.png'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";

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
                            <img src={logo} alt='logo' />
                            <h3>ThinkClear</h3>
                        </div>
                        <p>ThinkClear helps students from Classes 6–12 build strong concepts
                            in Maths and Science through clear explanations,
                            structured learning, regular tests, and personalized guidance.</p>
                        <div className={styles.SocialIcons}>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                            <FaTwitter />
                        </div>
                    </div>
                    {/* Quiks LInnks */}

                    <div className={styles.FooterQuciK}>
                        <h4>Quick Links</h4>
                        <div className={styles.FooterLinks}>
                            <span>Home</span>
                            <span>Courses</span>
                            <span>About Us</span>
                            <span>Contact</span>
                            <span>Policies</span>
                        </div>

                    </div>
                    {/* Quick */}
                           {/* <div className={styles.FooterQuciK}>
                        <h4>Privacy Policy</h4>
                        <div className={styles.FooterLinks}>
                            <span>Information collected from users</span>
                            <span>Purpose of data usage</span>
                            <span>Refund eligibility</span>
                            <span>Time period for refund</span>
                            <span>Conditions or limitations</span>
                        </div>

                    </div> */}
                    {/* Quick */}
                           <div className={styles.FooterQuciK}>
                        <h4>Contact Information</h4>
                        <div className={styles.FooterLinks}>
                            <span>+447575441703</span>
                            <span>info@thinkclear.in</span>
                            <span>WhatsApp Support</span>
                        </div>

                    </div>
                </div>
                {/* Links */}
                <div className={styles.LastLinks}>
                    <p>© 2026 ThinkClear. All Rights Reserved.</p>
                    <p>© Designed & Developed By Yuvocreations.com</p>
                </div>
            </section>
        </>
    );
}

export default Footer;