import React, { useState, useContext, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { shoppingContext } from "../../app";
import navStyles from "./Navigation.module.css";
import CheckoutSidebar from "./Checkout/CheckoutSidebar";


const NavBar = () => {
	const sideBarRef = useRef()
	const { shoppingCart, _ } = useContext(shoppingContext);
	const pageLinks = [
		{ path: "", url: "Home" },
		{ path: "shop", url: "Shop" },
		// { path: "checkout", url: "Checkout" },
	];

	const [totalPrice, setTotalPrice] = useState(0);
	const [shoppingCartItems, setShoppingCartItems] = useState([]);
	const [loading, setLoading] = useState(true);

	const DISPLAY_LINKS = pageLinks.map((pageLink) => {
		return (
			<li className="links" key={pageLink.url}>
				<Link to={`/${pageLink.path}`}>{pageLink.url}</Link>
			</li>
		);
	});

	function sideBarActivity(ref) {
		const sideBar = ref.current
		if (sideBar.classList.contains("checkout-sidebar-inactive")) {
			sideBar.classList.add("checkout-sidebar-active")
			sideBar.classList.remove("checkout-sidebar-inactive")
		}
		else {
			sideBar.classList.add("checkout-sidebar-inactive")
			setTimeout(() => {
				sideBar.classList.remove("checkout-sidebar-active")
				console.log('done')
			}, 155)
		}
		console.log(sideBar)
	}

	function fetchGameList(cart) {
		return Promise.all(cart.map(async item => {
			const fetchAPI = await fetch(`https://www.cheapshark.com/api/1.0/games?steamAppID=${item}`)
			const data = await fetchAPI.json()
			return data[0]
		}))
	}

	function updateCheckoutItems() {
		fetchGameList(shoppingCart).then(responses => {
			return responses
		}).then(parsedJsonData => {
			setShoppingCartItems(prev => parsedJsonData)
		}).then(_ => {
			setLoading(!loading)
		}).then(() => {
			console.log("shopping cart updated")
			console.log(shoppingCartItems)
		})
	}

	function getTotalPrice(cart) {
		let totalPrice = 0;
		for (const item of cart) {
			totalPrice = Number(item.cheapest)
		}
		return setTotalPrice(prev => prev + totalPrice)
	}


	useEffect(() => {
		getTotalPrice(shoppingCartItems)
	}, [shoppingCartItems])

	useEffect(() => {
		fetchGameList(shoppingCart)
	}, [shoppingCart])



	return (
		<div className={`nav-container ${navStyles.size} ${navStyles.navContDisplay}`}>
			<div className={navStyles.innerCont}>
				<h1 className={`logo ${navStyles.logoFont}`}><Link to={'/'}>GAME DEALS</Link></h1>
				<ul className={`nav-links ${navStyles.linksGap} ${navStyles.linksMargin} ${navStyles.linksFont} ${navStyles.linksDisplay}`}>{DISPLAY_LINKS}
					{shoppingCart.length !== 0 && <span className={navStyles.floatItemsCart}>{shoppingCart.length}</span>}
					<button onClick={() => {
						updateCheckoutItems()
						sideBarActivity(sideBarRef)
					}} className={navStyles.checkoutBtn} >CHECKOUT</button>
				</ul>
			</div>
			<CheckoutSidebar sideBarRef={sideBarRef} totalPrice={totalPrice} shoppingCartItems={shoppingCartItems} />
		</div>
	);
};

export default NavBar;
