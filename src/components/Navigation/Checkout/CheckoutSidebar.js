import React, { useContext, useEffect, useState } from "react";
import { shoppingContext } from "../../../app";
import CheckoutItems from "./CheckoutItems";
import "./checkout.css"

const CheckoutSidebar = ({ totalPrice, sideBarRef, shoppingCartItems }) => {
    const { shoppingCart, _ } = useContext(shoppingContext)


    const displayCheckoutItems = (shoppingCart.length !== 0) ? shoppingCartItems.map(item => {
        return (<CheckoutItems key={item.steamAppID} gameData={item} />)
    }) : <>Shopping cart is empty...</>

    return (
        <div ref={sideBarRef} className="checkout-sidebar-inactive checkout-sidebar">
            <h1 className="checkout-header">Shopping cart</h1>
            <div className="checkout-contents-container">
                {displayCheckoutItems}
            </div>
            <div className="checkout-btn-price">
                <button className="checkout-btn" type="button"><a href="/">Checkout</a></button>
                <p className="total-price">Total price: ${Math.round(totalPrice * 100) / 100}</p>
            </div>
        </div>
    )
}

export default CheckoutSidebar 