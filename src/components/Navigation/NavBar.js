import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { shoppingContext } from "../../app";
import navStyles from "./Navigation.module.css";
const NavBar = () => {
	const sideBarRef = useRef(null)
	const { shoppingCart, _ } = useContext(shoppingContext);
	const pageLinks = [
		{ path: "", url: "Home" },
		{ path: "shop", url: "Shop" },
		// { path: "checkout", url: "Checkout" },
	];

	const DISPLAY_LINKS = pageLinks.map((pageLink) => {
		return (
			<li className="links" key={pageLink.url}>
				<Link to={`/${pageLink.path}`}>{pageLink.url}</Link>{" "}
			</li>
		);
	});

	function sideBarActivity(ref) {
		if (ref.current.classList.contains(navStyles.checkoutSidebarActive)) {
			ref.current.classList.replace(`${navStyles.checkoutSidebarActive}`, `${navStyles.chechoutSidebarInactive}`)
		} else {

			ref.current.classList.replace(`${navStyles.chechoutSidebarInactive}`, `${navStyles.checkoutSidebarActive}`)
		}
		console.log(ref.current)
	}

	return (

		<div className={`nav-container ${navStyles.size} ${navStyles.navContDisplay}`}>
			<div className={navStyles.innerCont}>
				<h1 className={`logo ${navStyles.logoFont}`}><Link to={'/'}>GAME DEALS</Link></h1>
				<ul className={`nav-links ${navStyles.linksGap} ${navStyles.linksMargin} ${navStyles.linksFont} ${navStyles.linksDisplay}`}>{DISPLAY_LINKS}
					{shoppingCart.length !== 0 && <span className={navStyles.floatItemsCart}>{shoppingCart.length}</span>}
					<button onClick={() => {
						sideBarActivity(sideBarRef)
					}} className={navStyles.checkoutBtn} >CHECKOUT</button>
				</ul>
			</div>
			<div ref={sideBarRef} className={navStyles.checkoutSidebarActive}></div>
		</div>
	);
};

export default NavBar;
