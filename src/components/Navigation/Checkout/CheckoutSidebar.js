import React, { useContext, useEffect, useState } from "react";
import { shoppingContext } from "../../../app";
import CheckoutItems from "./CheckoutItems";

const CheckoutSidebar = ({ sideBarRef, shoppingCartItems }) => {

    // https://www.cheapshark.com/api/1.0/games?steamAppID= 

    const displayCheckoutItems = shoppingCartItems.map(item => {
        return (<CheckoutItems key={item.steamAppID} gameData={item} />)
    })


    return (
        <div ref={sideBarRef} className="checkout-sidebar">
            <div className="checkout-contents-container">
                {displayCheckoutItems}
            </div>
        </div>
    )
}

export default CheckoutSidebar 