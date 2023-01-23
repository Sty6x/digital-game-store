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
				price: obj.price,
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

	const displayGenres =
		!loading &&
		gameSpecs.genres.map((genre) => {
			return (
				<li key={genre} className={genre}>
					{genre}
				</li>
			);
		});
	const displayDevsAndPubs = !loading ? (
		<>
			<p>Developer: {gameSpecs.devs[0]}</p>
			<p>Publisher: {gameSpecs.devs[1]}</p>
		</>
	) : null;
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
					{displayDevsAndPubs}
					<p className="item-release-date">Release Date: {gameSpecs.year}</p>
					{/* redirect to steam page if site is empty */}
					<a className="item-site" href={gameSpecs.site}>
						Website
					</a>
				</div>
				<div className="item-ratings">
					<div className="item-rating item-steam-rating">
						<h4 className="item-rating-score">
							Steam Ratings: {gameSpecs.userRating}%
						</h4>
					</div>
					<div className="item-rating item-total-reviews-container">
						<h4 className="item-rating-score">
							Total Reviews: {gameSpecs.totalReviews}
						</h4>
					</div>
				</div>
				<div className="item-genres-container">
					<ul className="item-genres">Genres: {displayGenres}</ul>
				</div>
			</div>
		</div>
	);
};
export default ItemDisplay;
