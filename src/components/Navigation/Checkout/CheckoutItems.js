import React from "react";
import "./checkoutItems.css"

const CheckoutItems = ({ gameData }) => {

    return (<div className="checkout-item-container">
        <div className="checkout-item-img-section">
            <div className="checkout-item-img-container">
                <img className="checkout-item-img" alt="checkout item" />
            </div>
        </div>
        <div className="checkout-item-descAndoptions-section">
            <h2 className="checkout-item-title">Dawn of War</h2>
            <button >delete</button>
        </div>
        <div className="checkout-item-price-section">

        </div>
    </div>)
}

export default CheckoutItems