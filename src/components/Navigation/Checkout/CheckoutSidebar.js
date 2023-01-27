import React, { useContext, useEffect, useState } from "react";
import { shoppingContext } from "../../../app";
import CheckoutItems from "./CheckoutItems";

const CheckoutSidebar = ({ sideBarRef, shoppingCartItems }) => {
    const { shoppingCart, _ } = useContext(shoppingContext)

    // https://www.cheapshark.com/api/1.0/games?steamAppID= 

    const displayCheckoutItems = (shoppingCart.length !== 0) ? shoppingCartItems.map(item => {
        return (<CheckoutItems key={item.steamAppID} gameData={item} />)
    }) : <>Shopping cart is empty</>


    return (
        <div ref={sideBarRef} className="checkout-sidebar-inactive checkout-sidebar">
            <div className="checkout-contents-container">
                {displayCheckoutItems}
            </div>
        </div>
    )
}

export default CheckoutSidebar 