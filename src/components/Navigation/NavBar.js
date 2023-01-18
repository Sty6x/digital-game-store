import React from "react";
import { Link } from "react-router-dom";
import navStyles from "./Navigation.module.css";
const NavBar = () => {
	const pageLinks = [
		{ path: "", url: "Home" },
		{ path: "shop", url: "Shop" },
		{ path: "checkout", url: "Checkout" },
	];
	const DISPLAY_LINKS = pageLinks.map((pageLink) => {
		return (
			<li className="links" key={pageLink.url}>
				<Link to={`/${pageLink.path}`}>{pageLink.url}</Link>{" "}
			</li>
		);
	});
	return (
		<div className={`nav-container ${navStyles.navContDisplay}`}>
			<h1 className={`logo ${navStyles.logoFont}`}><Link to={'/'}>GAME DEALS</Link></h1>
			<ul className={`nav-links ${navStyles.linksGap} ${navStyles.linksMargin} ${navStyles.linksFont} ${navStyles.linksDisplay}`}>{DISPLAY_LINKS}</ul>
		</div>
	);
};

export default NavBar;
