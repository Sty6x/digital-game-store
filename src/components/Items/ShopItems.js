import React from "react";
import { Link } from "react-router-dom";

const ShopItems = ({ gameList }) => {
	const DISPLAY_GAME_LIST = gameList.map((game) => {
		return (
			<li key={game.steamAppID} className="shop-item">
				<Link to={`/shop/${game.steamAppID}`}>{game.title}</Link>
			</li>
		);
	});

	return (
		<>
			<h1>SHOP ITEMS</h1>
			{DISPLAY_GAME_LIST}
		</>
	);
};

export default ShopItems;
