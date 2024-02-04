import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, liveLinkText, liveLink } =
		props;

	return (
		<React.Fragment>
			<div className="project">
				<>
					<div className="project-container">
						<div className="project-logo d-flex justify-content-between">
							{logo.map((Logo, i) => (
								<img
									src={Logo}
									alt="logo"
									key={Logo}
									className="mx-2"
								/>
							))}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<a href={link} className="project-link-text">
								{linkText}
							</a>
						</div>

						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<Link to={liveLink} className="project-link-text">
								{liveLinkText}
							</Link>
						</div>
					</div>
				</>
			</div>
		</React.Fragment>
	);
};

export default Project;
