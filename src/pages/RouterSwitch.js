import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

const RouterSwitch = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
                    <Route path="/" element={<HomePage/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default RouterSwitch;
