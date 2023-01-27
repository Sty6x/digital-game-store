import React, { useCallback, useContext, useEffect, useState } from "react";
import { shoppingContext } from "../app";
import CheckoutItems from "../components/Checkout/CheckoutItems";

const Checkout = () => {

    const { shoppingCart, _ } = useContext(shoppingContext)
    const [shoppingCartItems, setShoppingCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    // https://www.cheapshark.com/api/1.0/games?steamAppID= 

    function fetchGameList(cart) {
        return cart.map(item => {
            return fetch(`https://www.cheapshark.com/api/1.0/games?steamAppID=${item}`)
        })
    }
    useEffect(() => {
        Promise.all(fetchGameList(shoppingCart))
            .then(reponses => {
                reponses.map(res => res.json())
            }).then(parsedJsonData => {
                return setShoppingCartItems(prev => [...prev, parsedJsonData])
            }).then(_ => setLoading(!loading))
            .catch(err => {
                throw err
            })
    }, [])

    return (
        <div>
            {!loading && <CheckoutItems gameData={shoppingCartItems} />}
        </div>
    )
}

export default Checkout