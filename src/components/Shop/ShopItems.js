import React from "react";
import { Link } from "react-router-dom";
import "./ShopCSS/shopItems.css";

const ShopItems = ({ game }) => {
	console.log(game);
	return (
		<div className="shop-items-container">
			<div className="shop-items-img-container">
				<img className="shop-items-img" src="..." alt="Video Game Thumbnail" />
			</div>
			<div className="shop-items-information-container">
				<h3 className="shop-items-title">Game Title</h3>
				<p className="shop-items-price">
					$9.99 <span className="shop-items-original-price">$39.99</span>
				</p>
				<div className="shop-items-options">
					<button className="shop-items-buy-btn" type="button">BUY</button>
					<button className="shop-items-add-btn" type="button">🛒</button>
				</div>
			</div>
		</div>
	);
};

export default ShopItems;