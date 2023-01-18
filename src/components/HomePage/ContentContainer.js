import React from "react";
import { useEffect, useState } from "react";

const ContentContainer = () => {
	const [gameList, setGameList] = useState([]);
	let [sortedGameList, setSortedGameList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [subLoad, setSubLoad] = useState(true);

	async function fetchGameList() {
		const FETCHED_GAME_LIST = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1`);
		const FETCHED_GAMES = await FETCHED_GAME_LIST.json();
		setGameList(FETCHED_GAMES);
		setLoading(!loading);
	}

	useEffect(() => {
		fetchGameList();
	}, []);

	useEffect(() => {
		if (!loading) {
			console.log("fetch loading done");
			console.log(gameList);
			getSortedGameList(10);
		}
	}, [loading]);

	const sortedGames = gameList.sort((game1, game2) =>
		game1.metacriticScore < game2.metacriticScore
			? 1
			: game1.metacriticScore > game2.metacriticScore
			? -1
			: 0
	);

	function getSortedGameList(n, arr = sortedGames) {
		for (let i = 0; i < n; i++) {
			// tmpArr.push(arr[i]);
			setSortedGameList((prevSorted) => [...prevSorted, arr[i]]);
		}
		setSubLoad(!subLoad);
	}

	useEffect(() => {
		if (!subLoad) {
			console.log("subload done");
			console.log(sortedGameList);
		}
	}, [subLoad]);

	const DISPLAY_GAME_LIST = sortedGameList.map((game) => {
		return <li key={game.steamAppID}> {game.title}</li>;
	});
	return <>{subLoad ? <>LOADING CONTENTS...</> : DISPLAY_GAME_LIST}</>;
};
export default ContentContainer;
