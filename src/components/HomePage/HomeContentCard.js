import React, { useEffect } from "react";
import contentCardStyles from "./ContentCard.module.css";
const HomeContentCard = ({ gameData }) => {
	return (
		<li id={`${gameData.internalName}-list`} className={`${contentCardStyles.cardList}`}>
			<div id="home-card-container" className={`${contentCardStyles.homeCardContainer}`}>
				<div className={`${contentCardStyles.homeCardImageContainer}`} id="home-card-image-cont">
					<img src={gameData.thumb} className={`${contentCardStyles.homeCardImage}`} />
				</div>
				<div id="home-card-textNprice-container" className={`${contentCardStyles.textNpriceDisplay}`}>
					<div id="home-card-textNtitle" className={`home-card-contents ${contentCardStyles.style}`}>
						<div className="home-cards" id="home-card-title">
							<h3>{gameData.title}</h3>
							<h4 className="home-card-title-score-ratings">${gameData.salePrice}</h4>
						</div>
						<div className="home-cards" id="home-card-steam-ratings">
							<h4>Steam Rating: </h4>
							<h4 className="home-card-title-score-ratings">{gameData.steamRatingPercent}%</h4>
						</div>
						<div className="home-cards" id="home-card-score">
							<h4>Metacritic Score:</h4>
							<h4 className="home-card-title-score-ratings">{gameData.metacriticScore}</h4>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
export default HomeContentCard;
