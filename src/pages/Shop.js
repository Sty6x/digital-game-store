import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
	let [games, setGames] = useState([]);
	let [loading, setLoading] = useState(true);
	async function fetchItems() {
		try {
			const itemsData = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1", {
				mode: "cors",
			});
			const items = await itemsData.json();
			console.log(items);
			setGames([...items]);
			setLoading((loading = false));
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		fetchItems();
	}, []);

	const displayGames = games.map((game) => {
		return <li key={game.steamAppID} className="shop-item"> <Link to={`/shop/${game.gameID}`}>{game.title}</Link> </li>;
	});

	return (
		<>
			<h1>Shop</h1>
			<ul className="shop-list">{!loading ? <> {displayGames}</> : <>loading is true</>}</ul>
		</>
	);
};

export default Shop;
