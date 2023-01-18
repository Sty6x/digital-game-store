import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Checkout from "./Checkout";
import HomePage from "./HomePage";
import Shop from "./Shop";
import Item from "../components/Items/Item";

const RouterSwitch = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/shop/:id" element={<Item/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default RouterSwitch;
