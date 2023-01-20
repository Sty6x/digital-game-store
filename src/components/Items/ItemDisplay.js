import React, { useEffect, useState } from "react";
import "./ItemCSS/itemDisplay.css";

const ItemDisplay = ({ gameDetails }) => {
	let [gameSpecs, setGameSpecs] = useState({});
	const [loading, setLoading] = useState(true);

	function getDeveloper(credits) {
		const tempArr = [];
		for (let dev in credits) {
			tempArr.push(Object.values(credits[dev])[0].name);
		}
		setGameSpecs((prev) => {
			return { ...prev, devs: tempArr };
			// console.log(prev);
		});
	}

	//use Promise.setAll to make load finish for all datas
	function getGenres(genresObj) {
		const tmpGenreArr = [];
		for (let genre in genresObj) {
			console.log(genresObj[genre].name);
			tmpGenreArr.push(genresObj[genre].name);
		}
		setGameSpecs((prev) => {
			return { ...prev, genres: tmpGenreArr };
		});
	}
	function getRudimentaryDetails(obj) {
		let gameSite = "";
		for(let site in obj.sites){
			gameSite = obj.sites[site].url
		}
		setGameSpecs((prev) => {
			return { ...prev ,steamAppID:obj.sku,site:gameSite,year:obj.year};
		});
	}
	useEffect(() => {
		Promise.allSettled([getRudimentaryDetails(gameDetails),getGenres(gameDetails.genres), getDeveloper(gameDetails.credits)]).then(
			(data) => {
				setLoading(!loading);
			}
		);
	}, []);

	const displayDevNames =
		!loading &&
		gameSpecs.devs.map((dev) => {
			return <p>{dev}</p>;
		});

	return (
		<div className="item-display-container">
			<div className="item-display-img-container">
				<img src={gameDetails.gifUrl} alt="game-image" />
			</div>
			<div className="item-display-contents">
				<div className="item-title-container">
					<h1 className="item-title">{gameDetails.title_formatted}</h1>
				</div>
				<div className="item-descriptions">
					<p>{gameSpecs.genres}</p>
					{displayDevNames}
					<p>{gameSpecs.year}</p>
					<a href={gameSpecs.site}>Website</a>
				</div>
				{/* get ratings from shark API */}
				<div className="item-ratings">
					<div className="item-rating item-steam-rating">
						<h4>Steam Rating: </h4>
						<div>
							<h4 className="item-rating-score">90%</h4>
						</div>
					</div>
					<div className="item-rating item-metacritic-score">
						<h4>Metacritic Score:</h4>
						<div>
							<h4 className="item-rating-score">54</h4>
						</div>
					</div>
					<div className="item-rating">
						<p className="item-steam-reviews"> MOSTLY POSITIVE</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ItemDisplay;
