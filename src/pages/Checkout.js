import React, { useCallback, useContext, useEffect, useState } from "react";
import { shoppingContext } from "../app";
import CheckoutItems from "../components/Checkout/CheckoutItems";

const Checkout = () => {

    const { shoppingCart, _ } = useContext(shoppingContext)
    const [shoppingCartItems, setShoppingCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    // https://www.cheapshark.com/api/1.0/games?steamAppID= 

    function fetchGameList(cart) {
        return Promise.all(cart.map(async item => {
            const fetchAPI = await fetch(`https://www.cheapshark.com/api/1.0/games?steamAppID=${item}`)
            const data = await fetchAPI.json()
            return data[0]
        }))
    }
    useEffect(() => {
        fetchGameList(shoppingCart).then(responses => {
            console.log(responses)
            return responses
        })
    }, [])

    const displayCheckoutItems = shoppingCartItems.map(item => {
        return (<CheckoutItems gameData={item} />)
    })
    return (
        <div>
            {!loading && displayCheckoutItems}
        </div>
    )
}

export default Checkout