import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import Checkout from "./Checkout";
import HomePage from "./HomePage";
import Shop from "./Shop";
import ItemDetails from "./ItemDetails";
const RouterSwitch = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/shop" element={<Shop />} />
					{/* <Route path="/checkout" element={<Checkout />} /> */}
					<Route path="/shop/:id" element={<ItemDetails />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default RouterSwitch;
