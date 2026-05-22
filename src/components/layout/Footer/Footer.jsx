import React from 'react'
import styles from './Footer.module.css'
import logo from '../../../assets/Footer/logo.png'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";
import { Link } from 'react-router-dom'

function Footer() {
    return (

        <>
            <section className={styles.Footer}>
                {/* Line */}
                <div className={styles.FooterName}>
                    <div className={styles.FooterLine}></div>
                    <div className={styles.marquee}>
                        <div className={styles.track}>
                            <h1>IMPROVE YOUR FUTURE</h1>
                            <h1>IMPROVE YOUR FUTURE</h1>
                            <h1>IMPROVE YOUR FUTURE</h1>
                        </div>
                    </div>
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

                    {/* <div className={styles.FooterQuciK}>
                        <h4>Quick Links</h4>
                        <div className={styles.FooterLinks}>
                            <Link to='/'><span>Home</span></Link>
                            <Link to='/courses'><span>Courses</span></Link>
                            <Link to='/about'><span>About Us</span></Link>
                            <Link to='/contact'><span>Contact</span></Link>
                            <Link to='/policies'><span>Policies</span></Link>
                        </div>

                    </div> */}
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
                    {/* <div className={styles.FooterQuciK}>
                        <h4>Courses</h4>
                        <div className={styles.FooterLinks}>
                            <span>Class 6–8 Foundation</span>
                            <span>Class 9–10 Academic Courses</span>
                            <span>Class 11–12 Science Stream</span>
                            <span>Maths & Science Special Programs</span>
                        </div>

                    </div> */}


                    {/* Quick */}
                    <div className={styles.flexFooter}>
                        {/*  */}
                        <div className={styles.FooterQuciK}>
                            <h4>Quick Links</h4>
                            <div className={styles.FooterLinks}>
                                <Link to='/'><span>Home</span></Link>
                                <Link to='/courses'><span>Courses</span></Link>
                                <Link to='/about'><span>About Us</span></Link>
                                <Link to='/contact'><span>Contact</span></Link>
                                <Link to='/policies'><span>Policies</span></Link>
                            </div>

                        </div>

                        {/*  */}
                        <div className={styles.FooterQuciK}>
                            <h4>Contact Information</h4>
                            <div className={styles.FooterLinks}>
                                <a href="https://wa.me/447575441703"><span>+447575441703</span></a>
                                {/* <a href="mailto:contact@thinkclearsolutions.com?subject=Inquiry&body=Hello ThinkClear Solutions,"><span>contact@thinkclearsolutions.com</span></a> */}
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@thinkclearsolutions.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span>contact@thinkclearsolutions.com</span>
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yadavcharu11@gmail.com"
                                    target="_blank"
                                    rel="noreferrer">
                                    <span> yadavcharu11@gmail.com</span>
                                </a>
                                <span>WhatsApp Support</span>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Links */}
                <div className={styles.LastLinks}>
                    <p>© 2026 ThinkClear. All Rights Reserved.</p>
                    <p><a href='https://www.yuvocreations.com/'>© Designed & Developed By Yuvocreations.com</a></p>
                </div>
            </section>
        </>
    );
}

export default Footer;