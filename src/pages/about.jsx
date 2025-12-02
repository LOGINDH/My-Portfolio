import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faCalendar,
	faMapMarkerAlt,
	faPhone,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
	faBehance,
	faFacebookF,
	faTwitter,
	faDribbble,
	faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

import Sidebar from "../components/common/sidebar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content about-page-container">
				<div className="content-wrapper">
					<Sidebar active="about" />

					<motion.div
						className="about-main-content"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
					>
						<div className="about-top-section">
							<motion.h1
								className="about-brand"
								initial={{ x: -50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
							>
								About
							</motion.h1>
							<div className="about-top-spacer"></div>
						</div>

						<div className="about-card-container">
							<div className="about-card">
								<motion.div
									className="about-card-left"
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ delay: 0.4, type: "spring" }}
								>
									<div className="brush-stroke-container">
										<div className="brush-stroke-mask">
											<img
												src="about-profile.png"
												alt="profile"
												className="profile-image-brush"
											/>
										</div>

										{/* Floating Icons */}
										<motion.div
											className="floating-icon icon-ai"
											animate={{ y: [0, -10, 0] }}
											transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
										>
											Ai
										</motion.div>
										<motion.div
											className="floating-icon icon-ps"
											animate={{ y: [0, -15, 0] }}
											transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
										>
											Ps
										</motion.div>
										<motion.div
											className="floating-icon icon-figma"
											animate={{ y: [0, -12, 0] }}
											transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
										>
											<FontAwesomeIcon icon={faFigma} />
										</motion.div>
									</div>
								</motion.div>

								<motion.div
									className="about-card-right"
									initial={{ x: 50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.6, type: "spring" }}
								>
									<h2 className="profile-name">{INFO.about.details.name.toUpperCase()}</h2>
									<h3 className="profile-role">ATTRACTIVE DESIGNER AND DEVELOPER</h3>

									<div className="profile-details">
										<div className="detail-item">
											<div className="detail-icon">
												<FontAwesomeIcon icon={faUser} />
											</div>
											<div className="detail-content">
												<span className="detail-label">Name : </span>
												<span className="detail-value">{INFO.about.details.name}</span>
											</div>
										</div>

										<div className="detail-item">
											<div className="detail-icon">
												<FontAwesomeIcon icon={faCalendar} />
											</div>
											<div className="detail-content">
												<span className="detail-label">Date of birth : </span>
												<span className="detail-value">{INFO.about.details.dob}</span>
											</div>
										</div>

										<div className="detail-item">
											<div className="detail-icon">
												<FontAwesomeIcon icon={faMapMarkerAlt} />
											</div>
											<div className="detail-content">
												<span className="detail-label">Address : </span>
												<span className="detail-value">{INFO.about.details.address}</span>
											</div>
										</div>

										<div className="detail-item">
											<div className="detail-icon">
												<FontAwesomeIcon icon={faPhone} />
											</div>
											<div className="detail-content">
												<span className="detail-label">Phone : </span>
												<span className="detail-value">{INFO.about.details.phone}</span>
											</div>
										</div>

										<div className="detail-item">
											<div className="detail-icon">
												<FontAwesomeIcon icon={faEnvelope} />
											</div>
											<div className="detail-content">
												<span className="detail-label">Email : </span>
												<span className="detail-value">{INFO.about.details.email}</span>
											</div>
										</div>
									</div>

									<div className="objective-section">
										<div className="objective-checkbox"></div>
										<h3 className="objective-title">Objective</h3>
										<p className="objective-text">
											{INFO.about.description}
										</p>
									</div>
								</motion.div>
							</div>
						</div>

						<motion.div
							className="about-footer-socials"
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<div className="social-icon-circle"><FontAwesomeIcon icon={faBehance} /></div>
							<div className="social-icon-circle"><FontAwesomeIcon icon={faFacebookF} /></div>
							<div className="social-icon-circle"><FontAwesomeIcon icon={faTwitter} /></div>
							<div className="social-icon-circle"><FontAwesomeIcon icon={faDribbble} /></div>
							<div className="social-icon-circle"><FontAwesomeIcon icon={faSkype} /></div>
						</motion.div>

						<motion.div
							className="about-page-footer-actions"
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 1.0 }}
						>
							<div className="action-item">
								<div className="action-icon">🖨️</div>
								<span>Print</span>
							</div>
							<div className="action-item">
								<div className="action-icon">📄</div>
								<span>Download</span>
							</div>
						</motion.div>

						<div className="about-copyright">
							© 2025 Logindh. All rights reserved.
						</div>

					</motion.div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
