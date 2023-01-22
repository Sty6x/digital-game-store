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

	//use Promise.allSettled to make load finish for all extracted informations
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
		for (let site in obj.sites) {
			gameSite = obj.sites[site].url;
		}
		setGameSpecs((prev) => {
			return {
				...prev,
				steamAppID: obj.sku,
				site: gameSite,
				year: obj.year,
				totalReviews: obj.user_reviews_total,
				userRating: obj.user_reviews_positive,
			};
		});
	}
	useEffect(() => {
		Promise.allSettled([
			getRudimentaryDetails(gameDetails),
			getGenres(gameDetails.genres),
			getDeveloper(gameDetails.credits),
		]).then((data) => {
			setLoading(!loading);
			console.log(gameSpecs);
			console.log(gameDetails);
		});
	}, []);

	const displayDevNames =
		!loading &&
		gameSpecs.devs.map((dev) => {
			return <p>{dev}</p>;
		});
	const displayGenres =
		!loading &&
		gameSpecs.genres.map((genre) => {
			return (
				<li key={genre} className={genre}>
				{genre}	
				</li>
			);
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
					{displayDevNames}
					<p>{gameSpecs.year}</p>
					{/* redirect to steam page if site is empty */}
					<a href={gameSpecs.site}>Website</a>
				</div>
				<div className="item-ratings">
					<div className="item-rating item-steam-rating">
						<h4>Steam Rating: </h4>
						<div>
							<h4 className="item-rating-score">{gameSpecs.userRating}%</h4>
						</div>
					</div>
					<div className="item-rating item-metacritic-score">
						<h4>Total Reviews:</h4>
						<div>
							<h4 className="item-rating-score">{gameSpecs.totalReviews}</h4>
						</div>
					</div>
					<ul className="item-genres">
						
						{displayGenres}

					</ul>
				</div>
			</div>
		</div>
	);
};
export default ItemDisplay;
