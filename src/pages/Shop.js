import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopItems from "../components/Shop/ShopItems";
import "../components/Shop/ShopCSS/shop.css"
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
				<Link to={`/shop/${game.steamAppID}`}>
					<ShopItems game={game}/>
				</Link>
			</li>
		);
	});

	return (
		<div className="shop-container">
			<h1>GAME LIST</h1>
			{!loading ? <ul className="shop-item-list"> {DISPLAY_GAME_LIST}</ul>: <> Loading Game List </>}
		</div>
	);
};

export default Shop;
