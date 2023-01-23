import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShopItems from "../components/Items/ShopItems";

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

	return (
		<div className="shop-items-container">
			{!loading ? <ShopItems gameList={games} /> : <> Loading Game List </>}
		</div>
	);
};

export default Shop;
