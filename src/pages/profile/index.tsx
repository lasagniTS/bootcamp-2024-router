import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";

export const Profile = () => {
	return (
		<>
			<Navbar transparent={true} />
			<main className="profile-page">
				<section className="relative block" style={{ height: "500px" }}>
					<div
						className="absolute top-0 h-full w-full bg-center bg-cover"
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
						}}
					>
						<span id="blackOverlay" className="absolute h-full w-full bg-black opacity-50" />
					</div>
					<div
						className="pointer-events-none absolute top-auto right-0 bottom-0 left-0 w-full overflow-hidden"
						style={{ height: "70px" }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<title>C</title>
							<polygon className="fill-current text-gray-300" points="2560 0 2560 100 0 100" />
						</svg>
					</div>
				</section>
				<section className="relative bg-gray-300 py-16">
					<div className="container mx-auto px-4">
						<div className="-mt-64 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
							<div className="px-6">
								<div className="flex flex-wrap justify-center">
									<div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
										<div className="relative">
											<img
												alt="..."
												src={"/assets/img/team-2-800x800.jpg"}
												className="-m-16 -ml-20 lg:-ml-16 absolute h-auto rounded-full border-none align-middle shadow-xl"
												style={{ maxWidth: "150px" }}
											/>
										</div>
									</div>
									<div className="w-full px-4 lg:order-3 lg:w-4/12 lg:self-center lg:text-right">
										<div className="mt-32 px-3 py-6 sm:mt-0">
											<button
												className="mb-1 rounded bg-pink-500 px-4 py-2 font-bold text-white text-xs uppercase shadow outline-none hover:shadow-md focus:outline-none active:bg-pink-600 sm:mr-2"
												type="button"
												style={{ transition: "all .15s ease" }}
											>
												Connect
											</button>
										</div>
									</div>
									<div className="w-full px-4 lg:order-1 lg:w-4/12">
										<div className="flex justify-center py-4 pt-8 lg:pt-4">
											<div className="mr-4 p-3 text-center">
												<span className="block font-bold text-gray-700 text-xl uppercase tracking-wide">22</span>
												<span className="text-gray-500 text-sm">Friends</span>
											</div>
											<div className="mr-4 p-3 text-center">
												<span className="block font-bold text-gray-700 text-xl uppercase tracking-wide">10</span>
												<span className="text-gray-500 text-sm">Photos</span>
											</div>
											<div className="p-3 text-center lg:mr-4">
												<span className="block font-bold text-gray-700 text-xl uppercase tracking-wide">89</span>
												<span className="text-gray-500 text-sm">Comments</span>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-12 text-center">
									<h3 className="mb-2 mb-2 font-semibold text-4xl text-gray-800 leading-normal">Jenna Stones</h3>
									<div className="mt-0 mb-2 font-bold text-gray-500 text-sm uppercase leading-normal">
										<i className="fas fa-map-marker-alt mr-2 text-gray-500 text-lg" /> Los Angeles, California
									</div>
									<div className="mt-10 mb-2 text-gray-700">
										<i className="fas fa-briefcase mr-2 text-gray-500 text-lg" />
										Solution Manager - Creative Tim Officer
									</div>
									<div className="mb-2 text-gray-700">
										<i className="fas fa-university mr-2 text-gray-500 text-lg" />
										University of Computer Science
									</div>
								</div>
								<div className="mt-10 border-gray-300 border-t py-10 text-center">
									<div className="flex flex-wrap justify-center">
										<div className="w-full px-4 lg:w-9/12">
											<p className="mb-4 text-gray-800 text-lg leading-relaxed">
												An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based
												Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate
												feel with a solid groove structure. An artist of considerable range.
											</p>
											{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
											<a href="#pablo" className="font-normal text-pink-500" onClick={(e) => e.preventDefault()}>
												Show more
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};
