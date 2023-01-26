import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ShopCSS/shopItems.css";
import addCartPng from "../../assets/img/add-cart.png"
import { shoppingContext } from "../../app";

const ShopItems = ({ game }) => {

	const { _, addToCart } = useContext(shoppingContext);

	return (
		<div className="shop-items-container">
			<div className="shop-items-img-container">
				<Link to={`/shop/${game.steamAppID}`}>
					<img
						className="shop-items-img"
						src={game.thumb}
						alt="Video Game Thumbnail"
					/>
				</Link>
			</div>
			<div className="shop-items-information-container">
				<h3 className="shop-items-title">{game.title}</h3>
				<p className="shop-items-price">
					${game.salePrice} <span className="shop-items-original-price">${game.normalPrice}</span>
				</p>
				<div className="shop-items-options">
					<button className="shop-items-buy-btn" type="button">
						BUY
					</button>
					<button onClick={() => {
						addToCart(game.steamAppID)
					}} className="shop-items-add-btn" type="button" />
				</div>
			</div>
		</div>
	);
};

export default ShopItems;
