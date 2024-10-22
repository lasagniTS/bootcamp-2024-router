import { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = (props: { transparent: boolean }) => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	
	return (
		<>
			<nav
				className={`${
					props.transparent ? "absolute top-0 z-50 w-full" : "relative bg-white shadow-lg shadow-lg"
				} flex flex-wrap items-center justify-between px-2 py-3 `}
			>
				<div className="container mx-auto flex flex-wrap items-center justify-between px-4">
					<div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
						<Link to ="/" className={`${props.transparent ? "text-white" : "text-gray-800"} mr-4 inline-block whitespace-nowrap py-2 font-bold text-sm uppercase leading-relaxed`}>
						Tailwind Starter Kit
						</Link>
						<button
							className="block cursor-pointer rounded border border-transparent border-solid bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<span className={`${props.transparent ? "text-white" : "text-gray-800"}`}>Menu</span>
						</button>
					</div>
					<div
						className={`flex-grow items-center bg-white lg:flex lg:bg-transparent lg:shadow-none${navbarOpen ? " block rounded shadow-lg" : " hidden"}`}
						id="example-navbar-warning"
					>
						<ul className="mr-auto flex list-none flex-col lg:flex-row">
							<li className="flex items-center">
							
									<Link to ="/profile" className={`${
										props.transparent
											? "text-gray-800 lg:text-white lg:hover:text-gray-300"
											: "text-gray-800 hover:text-gray-600"
									} flex items-center px-3 py-4 font-bold text-xs uppercase lg:py-2`}>
									<i
										className={`${
											props.transparent ? "text-gray-500 lg:text-gray-300" : "text-gray-500"
										} far fa-file-alt mr-2 text-lg leading-lg`}
									/>{" "}
									Docs
									</Link> 
							</li>
						</ul>
						<ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
							<li className="flex items-center">
								<button
									className={`${
										props.transparent
											? "bg-white text-gray-800 active:bg-gray-100"
											: "bg-pink-500 text-white active:bg-pink-600"
									} mb-3 ml-3 rounded px-4 py-2 font-bold text-xs uppercase shadow outline-none hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0`}
									type="button"
									style={{ transition: "all .15s ease" }}
								>
									<i className="fas fa-arrow-alt-circle-down" /> Todo Detail
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
