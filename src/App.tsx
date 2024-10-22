import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";

export const App = () => {
	return (
		<BrowserRouter>
	    <Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/profile" element={<Profile/>}/>
		</Routes>
	</BrowserRouter>
	);
}
