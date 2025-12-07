
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import INFO from "../data/user";
import SEO from "../data/seo";
import Sidebar from "../components/common/sidebar";
import HeroImage from "./hero_new.png";

import "./styles/homepage.css";

import { motion, useAnimation } from "framer-motion";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: "fixed",
		top: "30px",
		left: "30px",
		zIndex: 999,
	};

	const text = "LOGINDH";
	const controls = useAnimation();

	useEffect(() => {
		const animate = async () => {
			// Reset to hidden state instantly
			await controls.set("hidden");
			// Animate to visible state
			await controls.start("visible");
		};

		animate();

		const interval = setInterval(() => {
			animate();
		}, 3000);

		return () => clearInterval(interval);
	}, [controls]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const letterVariants = {
		hidden: { opacity: 0, filter: "blur(10px)" },
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			transition: {
				duration: 0.8,
				ease: "easeInOut",
			},
		},
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={INFO.homepage.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<div className="homepage-container">
					{/* Top Left Logo */}

					<div className="homepage-main-layout">
						{/* Left Sidebar Navigation */}
						<Sidebar active="home" />

						{/* Center Content */}
						<div className="homepage-center">
							<div className="hero-section">
								<div className="hero-image-container">
									<div className="yellow-shape"></div>
									<img
										src={HeroImage}
										alt="Hero"
										className="hero-image"
									/>
								</div>
								<div className="hero-text-content">
									<div className="role-label">
										DESIGNER / DEVELOPER
									</div>
									<motion.h1
										className="hero-name"
										variants={containerVariants}
										initial="hidden"
										animate={controls}
									>
										{text.split("").map((char, index) => (
											<motion.span
												key={index}
												variants={letterVariants}
											>
												{char}
											</motion.span>
										))}
									</motion.h1>
								</div>
								<div className="background-number">01</div>
							</div>

							<div className="services-section">
								<div className="service-item">
									<h3>01</h3>
									<h4>UI/UX Design</h4>
									<p>
										Creating intuitive and engaging user
										experiences.
									</p>
								</div>
								<div className="service-item">
									<h3>02</h3>
									<h4>Web Development</h4>
									<p>
										Building responsive and performant web
										applications.
									</p>
								</div>
								<div className="service-item">
									<h3>03</h3>
									<h4>Graphic Design</h4>
									<p>
										Designing visual content to communicate
										messages.
									</p>
								</div>
							</div>

							<div className="view-works-btn">
								<a href="/projects">VIEW ALL WORKS</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
