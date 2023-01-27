import React from "react";
import "./checkoutItems.css"

const CheckoutItems = ({ gameData }) => {
    console.log(gameData)
    return (<> {gameData.external} </>)
}

export default CheckoutItems