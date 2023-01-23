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
				price: obj.price / 100,
				beforePrice: obj.price_high / 100,
			};
		});
	}

	function getDiscountPercentage({ price, beforePrice }) {
		console.log(price);
		const diff = price - beforePrice;
		const ave = (price + beforePrice) / 2;
		const discount = (diff / ave) * 100;
		console.log(diff, ave, discount);
		return setGameSpecs((prevState) => ({ ...prevState, discount: discount }));
	}
	useEffect(() => {
		Promise.allSettled([
			getRudimentaryDetails(gameDetails),
			getGenres(gameDetails.genres),
			getDeveloper(gameDetails.credits),
		]).then((data) => {
			setLoading(!loading);
		});
	}, []);

	useEffect(() => {
		if (!loading) {
			getDiscountPercentage(gameSpecs);
		}
	}, [loading]);

	const displayGenres =
		!loading &&
		gameSpecs.genres.map((genre) => {
			return (
				<li key={genre} className={genre}>
					{genre}
				</li>
			);
		});
	const displayDevsInformation = !loading ? (
		<ul className="item-dev-information-list">
			<li>Developer: {gameSpecs.devs[0]}</li>
			<li>Publisher: {gameSpecs.devs[1]}</li>
			<li className="item-release-date">Release Date: {gameSpecs.year}</li>
			<li>
				<a className="item-site" href={gameSpecs.site}>
					Website
				</a>
			</li>
		</ul>
	) : null;
	const displayPrices = !loading ? (
		<ul className="item-price-information-list">
			<li>Price: ${gameSpecs.price}</li>
			<li>Before: ${gameSpecs.beforePrice}</li>
		</ul>
	) : null;
	return (
		<div className="item-display-container">
			<span className="item-floating-sale">{gameSpecs.discount}</span>
			<div className="item-display-img-container">
				<img src={gameDetails.gifUrl} alt="game-image" />
			</div>
			<div className="item-display-contents">
				<div className="item-title-container">
					<h1 className="item-title">{gameDetails.title_formatted}</h1>
				</div>
				<div className="item-descriptions">
					{displayDevsInformation}

					{/* redirect to steam page if site is empty */}
				</div>
				<div className="item-pricing-container">{displayPrices}</div>
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
