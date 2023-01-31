import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Checkout from "./Checkout";
import HomePage from "./HomePage";
import Shop from "./Shop";
import ItemDetails from "./ItemDetails";
import { useRef } from "react";
const RouterSwitch = () => {

	const foregroundRef = useRef()
	return (
		<>
			<BrowserRouter>
				<div ref={foregroundRef} ></div>
				<NavBar foregroundRef={foregroundRef} />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/shop/:id" element={<ItemDetails />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default RouterSwitch;
