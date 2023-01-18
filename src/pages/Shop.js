import React, { useEffect, useState } from "react";

const Shop = () => {
	let [games, setGames] = useState([]);
	let [loading, setLoading] = useState(true);
	console.log(loading);
	async function fetchItems() {
		try {
			const itemsData = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1", {
				mode: "cors",
			});
			const items = await itemsData.json();
			console.log(items)
			setGames([...items]);
			console.log(games)
			setLoading((loading = false));
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		fetchItems();
	}, []);

	const displayGames = games.map((game)=>{
		return <li>{game.title} </li>
	}) 

	return (
		<>
			<h1>Shop</h1>
			{!loading ? <> {displayGames}</> : <>loading is true</>}
		</>
	);
};

export default Shop;
