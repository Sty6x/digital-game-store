import React from "react";
import contentCardStyles from "./ContentCard.module.css"
const HomeContentCard = ({ gameData }) => {
	return (
		<li id={`${gameData.internalName}-list`} className={`${contentCardStyles.cardList}`}>
			<div id="home-card-container" className={`${contentCardStyles.homeCardContainer}`}>
				<div className={`${contentCardStyles.homeCardImageContainer}`} id="home-card-image-cont">
					<img src={gameData.thumb} className={`${contentCardStyles.homeCardImage}`} />
				</div>
				<div id="home-card-textNprice-container" className={`${contentCardStyles.textNpriceDisplay}`}>
					<div id="home-card-textNtitle">
						<h3>{gameData.title}</h3>
						<h4>Steam Rating: </h4>
						<h4>Metacritic Score:</h4>
					</div>
					<div id="home-card-priceNcritics">
                        <h4>${gameData.salePrice}</h4>
                        <h4>{gameData.steamRatingPercent}%</h4>
                        <h4>{gameData.metacriticScore}</h4>
                    </div>
				</div>
			</div>
		</li>
	);
};
export default HomeContentCard;
