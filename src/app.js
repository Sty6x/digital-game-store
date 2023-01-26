import React from "react";
import RouterSwitch from "./pages/RouterSwitch";
import { createContext, useState } from "react";

export const shoppingContext = createContext();

const App = () => {

	const [shoppingCart, setShoppingCart] = useState([]);
	function addToCart(item) {
        console.log(item, shoppingCart)
		return setShoppingCart((prevState) => [...prevState, item]);
	}

	return (
		<shoppingContext.Provider value={{ shoppingCart, addToCart }}>
			<RouterSwitch />
		</shoppingContext.Provider>
	);
};

export default App;
