import React, { useEffect } from "react";

const Shop = () => {
	async function fetchItems() {
		const itemsData = await fetch("https://api.warframe.market/v1/items", {
			mode: "no-cors",
		});
		// const items = await itemsData.json()
		console.log(itemsData);
	}
	useEffect(() => {
		fetchItems();
	}, []);

	return <div>Shop</div>;
};

export default Shop;
