import React, { useCallback, useContext, useEffect } from "react";
import { shoppingContext } from "../app";
import CheckoutItems from "../components/Checkout/CheckoutItems";

const Checkout = () => {

    const { shoppingCart, _ } = useContext(shoppingContext)
    // https://www.cheapshark.com/api/1.0/games?steamAppID= 
    useEffect(() => {

    }, [])

    return (
        <div>
            <CheckoutItems />
        </div>
    )
}

export default Checkout