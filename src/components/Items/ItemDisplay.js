import React from "react";
import "./ItemCSS/itemDisplay.css";

const ItemDisplay = () => {
	return (
		<div className="item-display-container">
			<div className="item-display-img-container">
				<img src="" alt="game-image" />
			</div>
			<div className="item-display-contents">
				<div className="item-title-container">
					<h1 className="item-title">Title</h1>
				</div>
				<div className="item-descriptions">
					<p>Genres</p>
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
