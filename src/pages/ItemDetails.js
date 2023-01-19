import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDisplay from "../components/Items/ItemDisplay";
import "../components/Items/ItemCSS/itemDetails.css"
const ItemDetails = () => {
	const { id } = useParams();
	const [gameTitle, setGameTitle] = useState({});
	const [loading, setLoading] = useState(true);

	async function fetchGameDetails() {
		const fetchedGameApi = await fetch(`https://barter.vg/steam/app/${id}/json`);
		const fetchedGame = await fetchedGameApi.json();
		setGameTitle(fetchedGame);
		setLoading(!loading);
		console.log(fetchedGame);
	}

	useEffect(() => {
		fetchGameDetails();
	}, []);

	return (
		<div className="item-detail-main-container">
			<ItemDisplay />
		</div>
	);
};

export default ItemDetails;
