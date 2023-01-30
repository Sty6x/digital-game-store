import React, { useContext, useEffect, useState } from "react";
import { shoppingContext } from "../../../app";
import CheckoutItems from "./CheckoutItems";
import "./checkout.css"

const CheckoutSidebar = ({ sideBarRef, shoppingCartItems }) => {
    const { shoppingCart, _ } = useContext(shoppingContext)


    const displayCheckoutItems = (shoppingCart.length !== 0) ? shoppingCartItems.map(item => {
        return (<CheckoutItems key={item.steamAppID} gameData={item} />)
    }) : <>Shopping cart is empty</>


    return (
        <div ref={sideBarRef} className="checkout-sidebar-inactive checkout-sidebar">
            <h1 className="checkout-header">Shopping cart</h1>
            <div className="checkout-contents-container">
                {displayCheckoutItems}
            </div>
        </div>
    )
}

export default CheckoutSidebar 