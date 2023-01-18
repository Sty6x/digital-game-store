import React, { useEffect } from "react";

const Shop = () => {
	async function fetchItems() {
		const itemsData = await fetch("https://api.skinport.com/v1/items", {
			mode: "cors",
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
