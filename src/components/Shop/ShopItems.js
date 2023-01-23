import React from "react";
import { Link } from "react-router-dom";

const ShopItems = ({ game }) => {
	console.log(game)
	return (
		<>
		{game.title}	
		</>
	);
};

export default ShopItems;
