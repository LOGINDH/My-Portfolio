import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";
import Sidebar from "../components/common/sidebar";
import InfiniteMenu from "../components/projects/infiniteMenu";

import FloatingShapes from "../components/common/floatingShapes";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	// Map projects to InfiniteMenu format
	const projectItems = React.useMemo(() => INFO.projects.map(project => ({
		image: project.logo,
		link: project.link,
		title: project.title,
		description: project.description
	})), []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Work | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content projects-page-container">
				<FloatingShapes />
				<div className="content-wrapper" style={{ position: 'relative', zIndex: 1 }}>
					<Sidebar active="projects" />

					<motion.div
						className="projects-main-content"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
					>
						<div className="projects-top-section">
							<motion.h1
								className="projects-brand"
								initial={{ y: -50, opacity: 0, scale: 0.8 }}
								animate={{ y: 0, opacity: 1, scale: 1 }}
								transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 10 }}
							>
								Work
							</motion.h1>
							<div className="projects-top-spacer"></div>
						</div>

						<div className="projects-container">
							<motion.div
								className="title projects-title"
								initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
								animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
								transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
							>
								Things I’ve made trying to put my dent in the
								universe.
							</motion.div>


							<motion.div
								className="projects-list"
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
								style={{ height: '600px' }} // Ensure height for canvas
							>
								<InfiniteMenu items={projectItems} />
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
