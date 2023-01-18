import React from "react";
import { useEffect, useState } from "react";

const ContentContainer = () => {
	const [gameList, setGameList] = useState([]);
	let [sortedGameList, setSortedGameList] = useState([]);
	const [loading, setLoading] = useState(true);

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
            console.log('loading done')
			getSortedGameList(5);
		}
	}, [loading]);

	const sortedGames = gameList.sort((game1, game2) =>
		game1.savings < game2.savings ? 1 : game1.savings > game2.savings ? -1 : 0
	);

	function getSortedGameList(n, arr = sortedGames) {
		const tmpArr = [];
		for (let i = 0; i < n; i++) {
			tmpArr.push(arr[i]);
		}
		setSortedGameList(() => {
			sortedGameList = [...tmpArr];
			console.log(sortedGameList);
		});
	}

	const DISPLAY_GAMES = sortedGameList.map((game) => {
		return <li key={game.steamAppID}>{game.title}</li>;
	});
	return (
		<>
			{loading ? (
				<>LOADING CONTENTS...</>
			) : (
				<>
					DONE!
					{DISPLAY_GAMES}
				</>
			)}
		</>
	);
};
export default ContentContainer;
