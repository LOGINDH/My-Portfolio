import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";



import Card from "../common/card";

import "./style/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="SKILLS"
				body={
					<div className="skill-body">
						<div className="work">
							<img
								src="./react.png"
								alt="React"
								className="work-image"
							/>
							<div className="work-title">React</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./java.png"
								alt="Java"
								className="work-image"
							/>
							<div className="work-title">Java</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>

						
						<div className="work">
							<img
								src="./c.png"
								alt="C"
								className="work-image"
							/>
							<div className="work-title">C</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>

						
						<div className="work">
							<img
								src="./python.png"
								alt="Python"
								className="work-image"
							/>
							<div className="work-title">Python</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>

						
						<div className="work">
							<img
								src="./c++.png"
								alt="C++"
								className="work-image"
							/>
							<div className="work-title">C++</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>

						
						<div className="work">
							<img
								src="./html.png"
								alt="HTML"
								className="work-image"
							/>
							<div className="work-title">html</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>

						
						<div className="work">
							<img
								src="./css.png"
								alt="css"
								className="work-image"
							/>
							<div className="work-title">CSS</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
