import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopItems from "../components/Shop/ShopItems";
import "../components/Shop/ShopCSS/shop.css";
const Shop = () => {
	const [games, setGames] = useState([]);
	const [loading, setLoading] = useState(true);
	async function fetchGameList() {
		try {
			const FETCHED_GAME_LIST = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1", {
				mode: "cors",
			});
			const GAMES = await FETCHED_GAME_LIST.json();
			console.log(GAMES);
			setGames([...GAMES]);
			setLoading(!loading);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		fetchGameList();
	}, []);

	const DISPLAY_GAME_LIST = games.map((game) => {
		return (
			<li key={game.steamAppID} className="shop-item">
				<ShopItems game={game} />
			</li>
		);
	});

	return (
		<div className="shop-container">
			<div className="shop-content-container">
				<h1 className="shop-container-title">GAME LIST</h1>
				{!loading ? <ul className="shop-item-list"> {DISPLAY_GAME_LIST}</ul> : <> Loading Game List </>}
			</div>
		</div>
	);
};

export default Shop;
