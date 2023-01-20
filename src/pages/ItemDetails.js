import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDisplay from "../components/Items/ItemDisplay";
import "../components/Items/ItemCSS/itemDetails.css";
const ItemDetails = () => {
	const { id } = useParams();
	const [gameTitle, setGameTitle] = useState({});
	const [loading, setLoading] = useState(true);

	async function fetchGameDetails() {
		const fetchedGameApi = await fetch(`https://barter.vg/steam/app/${id}/json`);
		const fetchedGame = await fetchedGameApi.json();
		const fetchedGametitle = fetchedGame.title_formatted;
		try {
			const fetchGiphyApi = await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=6C6Bv7RmIvF06uPUz6RVMaQgiWxSQiKd&q=${fetchedGametitle}&limit=1&offset=0&rating=pg-13&lang=en`
			);
			const fetchedGif = await fetchGiphyApi.json();
			const gifURL = fetchedGif.data[0].images.original.url;
			console.log(gifURL);
			console.log(fetchedGif);

			setGameTitle({ ...fetchedGame, gifUrl: gifURL });
		} catch (error) {
			console.log(error);
			setGameTitle({
				...fetchedGame,
				gifUrl:
					"https://media4.giphy.com/media/26xBIygOcC3bAWg3S/giphy.gif?cid=d0d88be6zlcq4zav6q5cvardgbgw4j160mj6v33wdp8vjjos&rid=giphy.gif&ct=g",
			});
		}

		setLoading(!loading);
	}

	useEffect(() => {
		fetchGameDetails();
	}, []);

	useEffect(() => {
		if (!loading) {
			console.log("loading done");
			console.log(gameTitle);
		}
	}, [loading]);
	return (
		// pass the fetched data from api to item display as props
		<div className="item-detail-main-container">
			{loading ? <>LOADING ITEM DETAILS...</> : <ItemDisplay gameDetails={gameTitle} />}
		</div>
	);
};

export default ItemDetails;
