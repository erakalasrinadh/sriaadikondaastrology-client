import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import '../styles/global.css';

const About = () => {
    return (
        <div className="page-container">
            <Helmet>
                <title>About Sri Aadikonda - Renowned Vedic Astrologer | Experience & Vision</title>
                <meta name="description" content="Learn about Sri Aadikonda, a renowned Vedic Astrologer with 30+ years of experience. Guiding souls towards destiny with accurate predictions and remedies." />
                <meta name="keywords" content="about sri aadikonda, vedic astrologer biography, astrology experience, famous astrologer profile, spiritual guide" />
                <link rel="canonical" href="https://www.sriaadikondaastrology.com/about" />
            </Helmet>
            <div className="container">
                <motion.div
                    className="about-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="about-image">
                        <img src="/assets/Hero/hero.JPG" alt="Sri Aadikonda" />
                    </div>
                    <div className="about-content">
                        <h1>About Sri Aadikonda</h1>
                        <p className="lead">Guiding souls towards their true destiny with 30+ years of Vedic wisdom.</p>
                        <p>
                            Sri Aadikonda is a highly respected **Vedic Astrologer** known for his accurate predictions and effective remedies.
                            With a deep understanding of ancient scriptures, he specializes in **matchmaking**, **career guidance**, **financial stability**, and **health-related issues**.
                        </p>
                        <p>
                            His mission is to bring clarity and peace to individuals confused by life's challenges.
                            Having consulted over **1 Lakh clients**, his expertise is trusted across **Hyderabad, Vijayawada, Visakhapatnam, Warangal, and Guntur**.
                        </p>
                        <div className="credentials">
                            <div className="credential-item">
                                <h3>30+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="credential-item">
                                <h3>1 Lakh+</h3>
                                <p>Satisfied Clients</p>
                            </div>
                            <div className="credential-item">
                                <h3>5000+</h3>
                                <p>Poojas Performed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
