import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
			setLoading((!loading));
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		fetchGameList();
	}, []);

	const DISPLAY_GAME_LIST = games.map((game) => {
		return <li key={game.steamAppID} className="shop-item"> <Link to={`/shop/${game.gameID}`}>{game.title}</Link> </li>;
	});

	return (
		<>
			<h1>Shop</h1>
			<ul className="shop-list">{!loading ? <> {DISPLAY_GAME_LIST}</> : <>loading is true</>}</ul>
		</>
	);
};

export default Shop;
