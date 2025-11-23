import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;

	// Format date: if `date` is an ISO string parse and format it,
	// otherwise fall back to the provided string.
	const formattedDate = (() => {
		if (!date) return "";
		const parsed = new Date(date);
		if (isNaN(parsed)) return date;
		return parsed.toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
	})();

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{formattedDate}</div>
				</div>

				<Link to={link}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						<div className="article-link">
							Read Article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Article;
