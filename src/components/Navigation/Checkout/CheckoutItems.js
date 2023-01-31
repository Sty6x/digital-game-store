import React from "react";
import "./checkoutItems.css"

const CheckoutItems = ({ gameData }) => {
    return (
        <div className="checkout-item-container">
            <div className="checkout-item-img-section">
                <div className="checkout-item-img-container">
                    <img className="checkout-item-img" alt="checkout item" src={gameData.thumb} />
                </div>
            </div>
            <div className="checkout-item-descAndoptions-section">
                <h2 className="checkout-item-title">{gameData.external}</h2>
                <button className="delete-item">delete</button>
            </div>
            <div className="checkout-item-price-section">
                <p>Price:</p>
                ${gameData.cheapest}
            </div>
        </div>)
}

export default CheckoutItems