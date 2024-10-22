// @ts-ignore

import { useState, lazy, Suspense } from "react";
import "./App.css";
import React from "react";
// import Home from "./pages/home";
// import Profile from "./pages/profile";
const Loading = () => {
	return <div>Loading...</div>;
};

const Route = ({ path, element }: any) => {
	return (
		<Suspense fallback={<Loading />}>
			<div>I'm rendering</div>
			{element}
		</Suspense>
	);
};

const Router = ({ children }: any) => {
	// biome-ignore lint/complexity/noForEach: <explanation>
	children.forEach((child: any) => {
		if (!(child.type.name === "Route")) {
			throw new Error("Child type not found");
		}
	});

	// Route = "/"
	const [route, setRoute] = useState(window.location.pathname);

	// selectedRouteComponent = <Route path="/" element={<Home />} />
	const selectedRouteComponent = children.find((child: any) => child.props.path === route);
	console.log(selectedRouteComponent);
	// elementToRender = <Home />
	const elementToRender = selectedRouteComponent.props.element;

	return <>{selectedRouteComponent}</>;
};

const Home = lazy(
	() =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(import("./pages/home"));
			}, 5000);
		}),
);
const Profile = lazy(() => import("./pages/profile"));

export const App = () => {
	return (
		<>
			<Router>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
			</Router>
		</>
	);
};
