import React from "react";
import "./checkoutItems.css"

const CheckoutItems = ({ gameData }) => {
    console.log(gameData)
    return (<div> {gameData.external} </div>)
}

export default CheckoutItems