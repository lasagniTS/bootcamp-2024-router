import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";

import HomeElement from "./pages/home";
import ProfileElement from "./pages/profile";

// const HomeElement = lazy(() => import("./pages/home"));
// const ProfileElement = lazy(() => import("./pages/profile"));

export const App = () => {
	return (
		<BrowserRouter>
	    <Routes>
			<Route path="/" element={<HomeElement/>} />
			<Route path="/profile" element={<ProfileElement/>}/>
		</Routes>
	</BrowserRouter>
	);
}
