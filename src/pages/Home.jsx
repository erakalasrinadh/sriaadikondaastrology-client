import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import WhatsAppButton from '../components/WhatsAppButton';
import About from './About';
import Services from './Services';
import Certificates from '../components/Certificates';
import Gallery from './Gallery';
import Contact from './Contact';
import Testimonials from '../components/Testimonials';
import '../styles/global.css';

const Home = () => {

    return (
        <div className="home-page">
            <Helmet>
                <title>Best Astrologer in Telangana & Andhra Pradesh | Sri Aadikonda Astrology</title>
                <meta name="description" content="Looking for the best astrologer in Telangana and Andhra Pradesh? Consult Sri Aadikonda for accurate horoscope reading, marriage astrology, and vastu consultation. Online consultation available." />
                <meta name="keywords" content="Best astrologer in Telangana, Best astrologer in Andhra Pradesh, Online astrology consultation India, Telugu astrologer, Vedic astrologer, Horoscope reading, Kundli analysis, Marriage astrology, Career astrology, Love problem solution astrology, Vastu consultation, Spiritual remedies, Astrologer in Hyderabad, Astrologer in Vijayawada" />
                <link rel="canonical" href="https://www.sriaadikondaastrology.com/" />
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Best Astrologer in Telangana & Andhra Pradesh
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Sri Aadikonda Astrology - Trusted Vedic Astrologer for Horoscope Reading, Marriage Matching, and Spiritual Remedies.
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <Link to="services" smooth={true} duration={500} className="btn">View Services</Link>
                        <a href="https://wa.me/919381182565" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            Chat on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="seo-intro py-5" style={{ padding: '60px 0', background: '#fff' }}>
                <div className="container">
                    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                        <div className="col-md-12" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                            <h2 style={{ color: '#d35400', marginBottom: '20px' }}>Welcome to Sri Aadikonda Jyothisyalayam</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Are you facing challenges in your personal or professional life? <strong>Sri Aadikonda Astrology</strong> offering expert guidance based on ancient <strong>Vedic astrology</strong>. Recognized as the <strong>best astrologer in Telangana</strong> and <strong>Andhra Pradesh</strong>, Sri Aadikonda provides accurate <strong>horoscope reading</strong> and effective <strong>spiritual remedies</strong> to help you overcome obstacles.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                Whether you are looking for a <strong>Telugu astrologer</strong> for <strong>Kundli analysis</strong>, <strong>marriage astrology</strong>, or <strong>career prediction</strong>, we are here to assist you. Our services are available deeply across <strong>Hyderabad, Vijayawada, Visakhapatnam, Warangal, and Guntur</strong>.
                            </p>
                            <div style={{ marginTop: '30px' }}>
                                <h3>Why Choose Us for Online Astrology Consultation?</h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                                    <li>✅ <strong>30+ Years Experience</strong></li>
                                    <li>✅ <strong>100% Confidential</strong></li>
                                    <li>✅ <strong>Video/Phone Consultation</strong></li>
                                    <li>✅ <strong>Trusted by 1 Lakh+ Clients</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <About />
            </section>

            <section id="services" style={{ background: '#f9f9f9' }}>
                <Services />
            </section>

            <section id="certificates">
                <Certificates />
            </section>

            <section id="gallery" style={{ background: '#f9f9f9' }}>
                <Gallery />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>

            <section id="contact" style={{ background: '#f9f9f9' }}>
                <Contact />
            </section>

            <WhatsAppButton />
        </div>
    );
};

export default Home;
