import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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
	faFigma,
} from "@fortawesome/free-brands-svg-icons";

import Sidebar from "../components/common/sidebar";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	// Mouse Parallax Logic
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const smoothX = useSpring(x, { stiffness: 100, damping: 30 });
	const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;
		x.set((clientX - centerX) / 30); // Sensitivity
		y.set((clientY - centerY) / 30);
	};

	// Transform for icons (different depths)
	const iconX1 = useTransform(smoothX, (val) => val * -1.5);
	const iconY1 = useTransform(smoothY, (val) => val * -1.5);

	const iconX2 = useTransform(smoothX, (val) => val * 2);
	const iconY2 = useTransform(smoothY, (val) => val * 2);

	const iconX3 = useTransform(smoothX, (val) => val * 1);
	const iconY3 = useTransform(smoothY, (val) => val * -1);


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

			<div
				className="page-content about-page-container"
				onMouseMove={handleMouseMove}
			>
				<div className="content-wrapper">
					<Sidebar active="about" />

					<motion.div
						className="about-main-content"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
					>
						{/* Particles removed for cleaner professional look */}

						<div className="about-top-section">
							<motion.h1
								className="about-brand"
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
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

										{/* Floating Icons with Parallax */}
										<motion.div
											className="floating-icon icon-ai"
											style={{ x: iconX1, y: iconY1 }}
											animate={{ rotate: [0, 10, -10, 0] }}
											transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
										>
											Ai
										</motion.div>
										<motion.div
											className="floating-icon icon-ps"
											style={{ x: iconX2, y: iconY2 }}
											animate={{ rotate: [0, -5, 5, 0] }}
											transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
										>
											Ps
										</motion.div>
										<motion.div
											className="floating-icon icon-figma"
											style={{ x: iconX3, y: iconY3 }}
											animate={{ rotate: [0, 15, -15, 0] }}
											transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
										>
											<FontAwesomeIcon icon={faFigma} />
										</motion.div>
									</div>
								</motion.div>

								<motion.div
									className="about-card-right"
									initial={{ x: 100, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.6, type: "spring", stiffness: 60 }}
								>
									<motion.h2
										className="profile-name"
										whileHover={{ scale: 1.05, originX: 0 }}
									>
										{INFO.about.details.name.toUpperCase()}
									</motion.h2>
									<h3 className="profile-role">ATTRACTIVE DESIGNER AND DEVELOPER</h3>

									<div className="profile-details">
										<div className="detail-item">
											<div className="detail-icon"><FontAwesomeIcon icon={faUser} /></div>
											<div className="detail-content">
												<span className="detail-label">Name : </span>
												<span className="detail-value">{INFO.about.details.name}</span>
											</div>
										</div>

										<div className="detail-item">
											<div className="detail-icon"><FontAwesomeIcon icon={faCalendar} /></div>
											<div className="detail-content">
												<span className="detail-label">Date of birth : </span>
												<span className="detail-value">{INFO.about.details.dob}</span>
											</div>
										</div>

										<div className="detail-item">
											<div className="detail-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
											<div className="detail-content">
												<span className="detail-label">Address : </span>
												<span className="detail-value">{INFO.about.details.address}</span>
											</div>
										</div>

										<div className="detail-item">
											<div className="detail-icon"><FontAwesomeIcon icon={faPhone} /></div>
											<div className="detail-content">
												<span className="detail-label">Phone : </span>
												<span className="detail-value">{INFO.about.details.phone}</span>
											</div>
										</div>

										<div className="detail-item">
											<div className="detail-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
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
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							<div className="social-icon-circle"><FontAwesomeIcon icon={faBehance} /></div>
							<div className="social-icon-circle"><FontAwesomeIcon icon={faFacebookF} /></div>
							<div className="social-icon-circle"><FontAwesomeIcon icon={faTwitter} /></div>
							<div className="social-icon-circle"><FontAwesomeIcon icon={faDribbble} /></div>
							<div className="social-icon-circle"><FontAwesomeIcon icon={faSkype} /></div>
						</motion.div>

						{/* Footer actions removed for professional simplicity */}

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
