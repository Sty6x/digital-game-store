import React from "react";
import "./checkoutItems.css"

const CheckoutItems = ({ gameData }) => {

    return (<div className="checkout-items-container">
        {gameData.external}
    </div>)
}

export default CheckoutItems