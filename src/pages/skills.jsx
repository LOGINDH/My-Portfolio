import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faCode, faVideo } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faStackOverflow,
    faHackerrank,
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faJava,
    faPython
} from "@fortawesome/free-brands-svg-icons";
import Sidebar from "../components/common/sidebar";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/skills.css";

const Skills = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "skills");

    const getSkillIcon = (title) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes("html")) return faHtml5;
        if (lowerTitle.includes("css")) return faCss3Alt;
        if (lowerTitle.includes("java") && !lowerTitle.includes("script")) return faJava;
        if (lowerTitle.includes("javascript")) return faJs;
        if (lowerTitle.includes("react")) return faReact;
        if (lowerTitle.includes("python")) return faPython;
        if (lowerTitle.includes("video")) return faVideo;
        return faCode; // Default for C, C++
    };

    const getSkillColor = (title) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes("html")) return "#e34c26";
        if (lowerTitle.includes("css")) return "#264de4";
        if (lowerTitle.includes("javascript")) return "#f0db4f";
        if (lowerTitle.includes("react")) return "#61dafb";
        if (lowerTitle.includes("java") && !lowerTitle.includes("script")) return "#007396";
        if (lowerTitle.includes("python")) return "#3776ab";
        return "#333";
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Skills | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content skills-page-container">
                <div className="content-wrapper">
                    <Sidebar active="skills" />

                    <div className="skills-main-content">

                        {/* Top Section: Header */}
                        <div className="skills-header-section">
                            <motion.h1
                                className="skills-title-simple"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                Skills
                            </motion.h1>
                        </div>

                        {/* Bottom Section: Dark Content */}
                        <div className="skills-content">
                            <div className="skills-list-container">
                                <div className="skills-list-grid">
                                    {INFO.skills.list.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            className="skill-item"
                                            initial={{ opacity: 0, y: -40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 15,
                                                delay: index * 0.08
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 3,
                                                transition: { type: "spring", stiffness: 300, damping: 15 }
                                            }}
                                        >
                                            <div className="skill-icon" style={{ color: getSkillColor(skill.title) }}>
                                                <FontAwesomeIcon icon={getSkillIcon(skill.title)} />
                                            </div>
                                            <div className="skill-name">{skill.title}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                className="coding-profiles-container"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.15,
                                            delayChildren: 0.2
                                        }
                                    }
                                }}
                            >
                                {/* StackOverflow Card */}
                                <motion.a
                                    href="#"
                                    target="_blank"
                                    className="profile-card card-stackoverflow magical-card"
                                    variants={{
                                        hidden: { opacity: 0, y: 50, scale: 0.9 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: { type: "spring", stiffness: 100, damping: 12 }
                                        }
                                    }}
                                    whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 40px rgba(244, 128, 36, 0.2)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="profile-card-header">
                                        <div className="profile-icon">
                                            <FontAwesomeIcon icon={faStackOverflow} />
                                        </div>
                                        <div>
                                            <div className="profile-name">Stackflow</div>
                                            <div className="profile-link">stackoverflow.com/users/logindh</div>
                                        </div>
                                    </div>
                                    <div className="profile-stats">
                                        <div className="stat-item">
                                            <span className="stat-value">1,200</span>
                                            <span className="stat-label">Reputation</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">2</span>
                                            <span className="stat-label">Gold</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">8</span>
                                            <span className="stat-label">Silver</span>
                                        </div>
                                    </div>
                                    <div className="card-shine"></div>
                                </motion.a>

                                {/* GitHub Card */}
                                <motion.a
                                    href={INFO.socials.github}
                                    target="_blank"
                                    className="profile-card card-github magical-card"
                                    variants={{
                                        hidden: { opacity: 0, y: 50, scale: 0.9 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: { type: "spring", stiffness: 100, damping: 12 }
                                        }
                                    }}
                                    whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="profile-card-header">
                                        <div className="profile-icon">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </div>
                                        <div>
                                            <div className="profile-name">GitHub</div>
                                            <div className="profile-link">{INFO.socials.github.replace("https://", "")}</div>
                                        </div>
                                    </div>
                                    <div className="profile-stats">
                                        <div className="stat-item">
                                            <span className="stat-value">12</span>
                                            <span className="stat-label">Repos</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">10</span>
                                            <span className="stat-label">Followers</span>
                                        </div>
                                    </div>
                                    <div className="card-shine"></div>
                                </motion.a>

                                {/* HackerRank Card */}
                                <motion.a
                                    href={INFO.socials.hackerrank}
                                    target="_blank"
                                    className="profile-card card-hackerrank magical-card"
                                    variants={{
                                        hidden: { opacity: 0, y: 50, scale: 0.9 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: { type: "spring", stiffness: 100, damping: 12 }
                                        }
                                    }}
                                    whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 40px rgba(46, 200, 102, 0.2)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="profile-card-header">
                                        <div className="profile-icon">
                                            <FontAwesomeIcon icon={faHackerrank} />
                                        </div>
                                        <div>
                                            <div className="profile-name">HackerRank</div>
                                            <div className="profile-link">hackerrank.com/logindh</div>
                                        </div>
                                    </div>
                                    <div className="profile-stats">
                                        <div className="stat-item">
                                            <span className="stat-value">5</span>
                                            <span className="stat-label">Badges</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">450</span>
                                            <span className="stat-label">Points</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">4★</span>
                                            <span className="stat-label">Python</span>
                                        </div>
                                    </div>
                                    <div className="card-shine"></div>
                                </motion.a>

                                {/* LeetCode Card */}
                                <motion.a
                                    href="#"
                                    target="_blank"
                                    className="profile-card card-leetcode magical-card"
                                    variants={{
                                        hidden: { opacity: 0, y: 50, scale: 0.9 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: { type: "spring", stiffness: 100, damping: 12 }
                                        }
                                    }}
                                    whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 40px rgba(255, 161, 22, 0.2)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="profile-card-header">
                                        <div className="profile-icon">
                                            <FontAwesomeIcon icon={faCode} />
                                        </div>
                                        <div>
                                            <div className="profile-name">LeetCode</div>
                                            <div className="profile-link">leetcode.com/logindh</div>
                                        </div>
                                    </div>
                                    <div className="profile-stats">
                                        <div className="stat-item">
                                            <span className="stat-value">120</span>
                                            <span className="stat-label">Solved</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">NA</span>
                                            <span className="stat-label">Rank</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">3.5%</span>
                                            <span className="stat-label">Top</span>
                                        </div>
                                    </div>
                                    <div className="card-shine"></div>
                                </motion.a>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Skills;
