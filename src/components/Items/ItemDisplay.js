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
		const diff = beforePrice - price;
		const discount = (diff / beforePrice) * 100;
		return setGameSpecs((prevState) => ({ ...prevState, discount: Math.floor(discount) }));
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
			console.log(gameSpecs);
			console.log(gameDetails);
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
			<li>
				Developer: <span className="item-dev-info">{gameSpecs.devs[0]} </span>
			</li>
			<li>
				Publisher:<span className="item-dev-info">{gameSpecs.devs[1]}</span>
			</li>
			<li className="item-release-date">
				Release Date: <span className="item-dev-info">{gameSpecs.year}</span>
			</li>
			<li>
				Visit Their Website:
				<a className="item-site" href={gameSpecs.site}>
					Website 🌐
				</a>
			</li>
		</ul>
	) : null;

	const displayPrices = !loading ? <p className="item-display-price">${gameSpecs.price} <span className="item-display-price-before">${gameSpecs.beforePrice}</span></p> : null;

	return (
		<div className="item-display-container">
			<div className="item-display-floating-sale">
				<p>
					-{gameSpecs.discount}% <span className="item-floating-sale-span"></span>
				</p>
			</div>
			<div className="item-display-img-container">
				<img src={gameDetails.gifUrl} alt="game-image" />
			</div>
			<div className="item-display-contents">
				<div className="item-content item-title-container">
					<h1 className="item-title">{gameDetails.title_formatted}</h1>
				</div>

				<div className="item-content item-pricing-container">{displayPrices}</div>
				<div className="item-content item-btn-options">
					<button className="item-btn-buy" type="button">
						BUY NOW
					</button>
					<button className="item-btn-add" type="button">
						ADD TO CART
					</button>
				</div>
				<div className="item-content item-ratings">
					<div className="item-rating item-steam-rating">
						<h4 className="item-rating-score">Steam Ratings: {gameSpecs.userRating}%</h4>
					</div>
					<div className="item-rating item-total-reviews-container">
						<h4 className="item-rating-score">Total Reviews: {gameSpecs.totalReviews}</h4>
					</div>
				</div>
				{/* <div className="item-content item-genres-container">
					<ul className="item-genres">Genres: {displayGenres} </ul>
				</div> */}
				<div className="item-content item-descriptions">
					{displayDevsInformation}
					{/* redirect to steam page if site is empty */}
				</div>
			</div>
		</div>
	);
};
export default ItemDisplay;
