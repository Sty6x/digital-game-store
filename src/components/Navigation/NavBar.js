import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	const pageLinks = [{path:"", url:"Home" },{path:"shop", url:"Shop"},{path:"checkout",url:"Checkout"}];
	const displayLinks = pageLinks.map((pageLink) => {
		return (
			<li className="links" key={pageLink.url}>
				<Link to={`/${pageLink.path}`}>{pageLink.url}</Link>{" "}
			</li>
		);
	});
	return (
		<>
			<ul className="nav-links">
				{displayLinks}
			</ul>
		</>
	);
};

export default NavBar;
