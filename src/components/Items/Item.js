import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Item = () => {
	const { id } = useParams();
	const [gameTitle, setGameTitle] = useState({});
	const [loading, setLoading] = useState(true);

	async function fetchGameItem() {
		const fetchedGameApi = await fetch(`https://www.cheapshark.com/api/1.0/games?id=${id}`);
		const fetchedGame = await fetchedGameApi.json();
		setGameTitle(fetchedGame);
		setLoading(!loading);
	}

	useEffect(() => {
		fetchGameItem();
	}, []);

	return (
		<>
			Items Routed Here
			{loading ? <> Content Loading...</> : <img src={`${gameTitle.info.thumb}`} />}
		</>
	);
};

export default Item;
