import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMugHot, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Sidebar from "../components/common/sidebar";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	// Mock visitor count animation
	const [visitors, setVisitors] = useState(0);
	useEffect(() => {
		const target = 482;
		let start = 0;
		const duration = 2000;
		const increment = target / (duration / 16);

		const timer = setInterval(() => {
			start += increment;
			if (start >= target) {
				setVisitors(target);
				clearInterval(timer);
			} else {
				setVisitors(Math.floor(start));
			}
		}, 16);
		return () => clearInterval(timer);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content contact-page-container">
				<Sidebar active="contact" />

				<div className="contact-main-content">

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.1
								}
							}
						}}
						className="contact-content-wrapper"
					>
						{/* Header */}
						<motion.h1
							className="contact-title-large"
							variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
						>
							Contact
						</motion.h1>

						{/* Intro Text */}
						<motion.p
							className="contact-intro-text"
							variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
						>
							Feel free to email me at <a href={`mailto:${INFO.main.email}`} className="email-link">{INFO.main.email}</a> for tech discussions, business opportunities, or just to say hello—I'd love to hear from you!
						</motion.p>

						{/* Action Buttons */}
						<motion.div
							className="contact-actions"
							variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
						>
							<motion.a
								href={`mailto:${INFO.main.email}`}
								className="contact-btn btn-email"
								whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
								whileTap={{ scale: 0.95 }}
							>
								<FontAwesomeIcon icon={faEnvelope} /> Email
							</motion.a>

							<motion.a
								href={INFO.socials.linkedin}
								target="_blank"
								className="contact-btn btn-linkedin"
								whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
								whileTap={{ scale: 0.95 }}
							>
								<FontAwesomeIcon icon={faLinkedin} /> LinkedIn
							</motion.a>

							<motion.a
								href={INFO.socials.github}
								target="_blank"
								className="contact-btn btn-github"
								whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
								whileTap={{ scale: 0.95 }}
							>
								<FontAwesomeIcon icon={faGithub} /> GitHub
							</motion.a>

							<motion.a
								href="#"
								className="contact-btn btn-coffee"
								whileHover={{ scale: 1.05, translateY: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
								whileTap={{ scale: 0.95 }}
							>
								<FontAwesomeIcon icon={faMugHot} /> Buy me a coffee
							</motion.a>
						</motion.div>

						{/* Visitor Counter */}
						<motion.div
							className="visitor-counter"
							variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
						>
							TOTAL VISITORS <span className="counter-number">{visitors}</span>
						</motion.div>

						{/* Footer Section */}
						<motion.div
							className="contact-footer-block"
							variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } } }}
						>
							<div className="footer-columns">
								<div className="footer-col">
									<h3>Links</h3>
									<ul>
										<li><a href="#">Buy me a coffee</a></li>
										<li><a href={INFO.socials.github} target="_blank" rel="noreferrer">Github</a></li>
									</ul>
								</div>
								<div className="footer-col">
									<h3>Pages</h3>
									<ul>
										<li><a href="/projects">Projects</a></li>
										<li><a href="/skills">Skills</a></li>
									</ul>
								</div>
								<div className="footer-col">
									<h3>Location</h3>
									<div className="footer-location">
										Erode, India<br />
										Remote Available
									</div>
								</div>
							</div>
							<div className="footer-bottom-msg">
								<div className="footer-copyright">
									&copy; 2025 Logindh. All Rights Reserved.
								</div>
							</div>
						</motion.div>

					</motion.div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
