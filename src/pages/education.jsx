import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/common/sidebar";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/education.css";

const Education = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "education") || { description: "My Education", keywords: [] };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Education | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content education-page-container">
                <div className="content-wrapper">
                    <Sidebar active="education" />

                    <div className="education-main-content">

                        <div className="education-header">
                            <motion.h1
                                className="education-title"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Education
                            </motion.h1>
                        </div>

                        <div className="education-timeline">
                            {/* Animated Vertical Line */}
                            <motion.div
                                className="timeline-line"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                style={{
                                    position: 'absolute',
                                    left: '29px',
                                    top: '30px',
                                    bottom: '30px',
                                    width: '2px',
                                    backgroundColor: '#FFC107',
                                    zIndex: 0,
                                    transformOrigin: 'bottom'
                                }}
                            />

                            {/* Creativity Card (Top/Future) */}
                            {/* Creativity Card (Top/Future) */}
                            <motion.div
                                className="timeline-item"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 2.5, type: "spring", stiffness: 50 }}
                            >
                                <motion.div
                                    className="timeline-icon"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    style={{ backgroundColor: '#FF5722', color: '#fff' }}
                                >
                                    <FontAwesomeIcon icon={faLightbulb} />
                                </motion.div>
                                <motion.div
                                    className="timeline-card"
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="education-degree">
                                        Learning & Creativity <span className="education-year">Present</span>
                                    </div>
                                    <div className="education-school">
                                        Exploration & Innovation
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* College Card (Middle) */}
                            <motion.div
                                className="timeline-item"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5, type: "spring", stiffness: 50 }}
                            >
                                <motion.div
                                    className="timeline-icon"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                >
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </motion.div>
                                <motion.div
                                    className="timeline-card"
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="education-degree">
                                        BE CSE <span className="education-year">2024 - 2028</span>
                                    </div>
                                    <div className="education-school">
                                        KSR COLLEGE OF ENGINEERING tamilnadu
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* School Card (Bottom) */}
                            <motion.div
                                className="timeline-item"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
                            >
                                <motion.div
                                    className="timeline-icon"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                >
                                    <FontAwesomeIcon icon={faSchool} />
                                </motion.div>
                                <motion.div
                                    className="timeline-card"
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="education-degree">
                                        Higher Secondary (12th) <span className="education-year">2023 - 2024</span>
                                    </div>
                                    <div className="education-school">
                                        VANI VIDHYALAYA
                                    </div>
                                </motion.div>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Education;
