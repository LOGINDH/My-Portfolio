import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { AnimatePresence } from "framer-motion";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import PageTransition from "./components/common/pageTransition";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	const location = useLocation();

	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={
						<PageTransition>
							<Homepage />
						</PageTransition>
					} />
					<Route path="/about" element={
						<PageTransition>
							<About />
						</PageTransition>
					} />
					<Route path="/projects" element={
						<PageTransition>
							<Projects />
						</PageTransition>
					} />
					<Route path="/articles" element={
						<PageTransition>
							<Articles />
						</PageTransition>
					} />
					<Route path="/article/:slug" element={
						<PageTransition>
							<ReadArticle />
						</PageTransition>
					} />
					<Route path="/contact" element={
						<PageTransition>
							<Contact />
						</PageTransition>
					} />
					<Route path="*" element={
						<PageTransition>
							<Notfound />
						</PageTransition>
					} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
