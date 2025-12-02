import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo";
import INFO from "../../data/user";
import "./styles/sidebar.css";

const Sidebar = ({ active }) => {
    const location = useLocation();

    return (
        <div className="sidebar-container">
            <div className="sidebar-logo">
                <Logo width={80} link={false} />
            </div>

            <ul className="sidebar-menu">
                <li className={active === "home" ? "active" : ""}>
                    <Link to="/">
                        Home
                        {active === "home" && (
                            <span className="nav-arrow">
                                <i className="fa fa-arrow-right"></i>
                            </span>
                        )}
                    </Link>
                </li>
                <li className={active === "about" ? "active" : ""}>
                    <Link to="/about">
                        About
                        {active === "about" && (
                            <span className="nav-arrow">
                                <i className="fa fa-arrow-right"></i>
                            </span>
                        )}
                    </Link>
                </li>
                <li className={active === "projects" ? "active" : ""}>
                    <Link to="/projects">
                        Works
                        {active === "projects" && (
                            <span className="nav-arrow">
                                <i className="fa fa-arrow-right"></i>
                            </span>
                        )}
                    </Link>
                </li>
                <li className={active === "experience" ? "active" : ""}>
                    <Link to="/experience">
                        Experience
                        {active === "experience" && (
                            <span className="nav-arrow">
                                <i className="fa fa-arrow-right"></i>
                            </span>
                        )}
                    </Link>
                </li>
                <li className={active === "education" ? "active" : ""}>
                    <Link to="/education">
                        Education
                        {active === "education" && (
                            <span className="nav-arrow">
                                <i className="fa fa-arrow-right"></i>
                            </span>
                        )}
                    </Link>
                </li>
                <li className={active === "references" ? "active" : ""}>
                    <Link to="/references">
                        References
                        {active === "references" && (
                            <span className="nav-arrow">
                                <i className="fa fa-arrow-right"></i>
                            </span>
                        )}
                    </Link>
                </li>
                <li className={active === "contact" ? "active" : ""}>
                    <Link to="/contact">
                        Contact
                        {active === "contact" && (
                            <span className="nav-arrow">
                                <i className="fa fa-arrow-right"></i>
                            </span>
                        )}
                    </Link>
                </li>
            </ul>

            <div className="sidebar-footer">
                <div className="footer-contact">
                    <a href={`mailto:${INFO.main.email}`}>
                        {INFO.main.email}
                    </a>
                </div>
                <div className="footer-socials">
                    <a
                        href={INFO.socials.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-github"></i>
                    </a>
                    <a
                        href={INFO.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a
                        href={INFO.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                        href={INFO.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
