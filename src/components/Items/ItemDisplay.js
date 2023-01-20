import React, { useEffect, useState } from "react";
import "./ItemCSS/itemDisplay.css";

const ItemDisplay = ({ gameDetails }) => {
	const [devName, setDevName] = useState([]);
	const [loading, setLoad] = useState(true);

	function getDeveloperObj(credits) {
		const tempArr = [];
		for (let dev in credits) {
			tempArr.push(Object.values(credits[dev])[0].name);
		}
		setDevName(tempArr);
	}

	useEffect(() => {
		getDeveloperObj(gameDetails.credits);
	}, []);

	const displayDevNames = devName.map(dev=>{
		return <p>{dev}</p>
	})
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
					<p>Genres</p>
					{displayDevNames}
					<p>Credits</p>
					<p>Date</p>
					<p>Source Profile</p>
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
