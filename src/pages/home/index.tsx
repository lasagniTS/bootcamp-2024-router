import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export const Home = () => {
	return (
		<>
			<Navbar transparent={true} />
			<main>
				<div
					className="relative flex content-center items-center justify-center pt-16 pb-32"
					style={{
						minHeight: "75vh",
					}}
				>
					<div
						className="absolute top-0 h-full w-full bg-center bg-cover"
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
						}}
					>
						<span id="blackOverlay" className="absolute h-full w-full bg-black opacity-75" />
					</div>
					<div className="container relative mx-auto">
						<div className="flex flex-wrap items-center">
							<div className="mr-auto ml-auto w-full px-4 text-center lg:w-6/12">
								<div className="pr-12">
									<h1 className="font-semibold text-5xl text-white">Your story starts with us.</h1>
									<p className="mt-4 text-gray-300 text-lg">
										This is a simple example of a Landing Page you can build using Tailwind Starter Kit. It features
										multiple CSS components based on the Tailwindcss design system.
									</p>
								</div>
							</div>
						</div>
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
              <title>A</title>
							<polygon className="fill-current text-gray-300" points="2560 0 2560 100 0 100" />
						</svg>
					</div>
				</div>

				<section className="-mt-24 bg-gray-300 pb-20">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap">
							<div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
								<div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
									<div className="flex-auto px-4 py-5">
										<h6 className="font-semibold text-xl">Awarded Agency</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Divide details about your product or agency work into parts. A paragraph describing a feature
											will be enough.
										</p>
									</div>
								</div>
							</div>

							<div className="w-full px-4 text-center md:w-4/12">
								<div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
									<div className="flex-auto px-4 py-5">
										<h6 className="font-semibold text-xl">Free Revisions</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Keep you user engaged by providing meaningful information. Remember that by this time, the user
											is curious.
										</p>
									</div>
								</div>
							</div>

							<div className="w-full px-4 pt-6 text-center md:w-4/12">
								<div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
									<div className="flex-auto px-4 py-5">
										<h6 className="font-semibold text-xl">Verified Company</h6>
										<p className="mt-2 mb-4 text-gray-600">
											Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user
											engaged!
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-32 flex flex-wrap items-center">
							<div className="mr-auto ml-auto w-full px-4 md:w-5/12">
								<h3 className="mb-2 font-semibold text-3xl leading-normal">Working with us is a pleasure</h3>
								<p className="mt-4 mb-4 font-light text-gray-700 text-lg leading-relaxed">
									Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable
									them first via JavaScript.
								</p>
								<p className="mt-0 mb-4 font-light text-gray-700 text-lg leading-relaxed">
									The kit comes with three pre-built pages to help you get started faster. You can change the text and
									images and you're good to go. Just make sure you enable them first via JavaScript.
								</p>
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
									className="mt-8 font-bold text-gray-800"
								>
									Check Tailwind Starter Kit!
								</a>
							</div>

							<div className="mr-auto ml-auto w-full px-4 md:w-4/12">
								<div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-pink-600 bg-white shadow-lg">
									<img
										alt="..."
										src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
										className="w-full rounded-t-lg align-middle"
									/>
									<blockquote className="relative mb-4 p-8">
										<svg
											preserveAspectRatio="none"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 583 95"
											className="absolute left-0 block w-full"
											style={{
												height: "95px",
												top: "-94px",
											}}
										>
                      <title>BB</title>
											<polygon points="-30,95 583,95 583,65" className="fill-current text-pink-600" />
										</svg>
										<h4 className="font-bold text-white text-xl">Top Notch Services</h4>
										<p className="mt-2 font-light text-md text-white">
											The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that
											process will continue whatever happens.
										</p>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative py-20">
					<div
						className="-mt-20 pointer-events-none absolute top-0 right-0 bottom-auto left-0 w-full overflow-hidden"
						style={{ height: "80px" }}
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
              <title>asfa</title>
							<polygon className="fill-current text-white" points="2560 0 2560 100 0 100" />
						</svg>
					</div>

					<div className="container mx-auto px-4">
						<div className="flex flex-wrap items-center">
							<div className="mr-auto ml-auto w-full px-4 md:w-4/12">
								<img
									alt="..."
									className="max-w-full rounded-lg shadow-lg"
									src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
								/>
							</div>
							<div className="mr-auto ml-auto w-full px-4 md:w-5/12">
								<div className="md:pr-12">
									<h3 className="font-semibold text-3xl">A growing company</h3>
									<p className="mt-4 text-gray-600 text-lg leading-relaxed">
										The extension comes with three pre-built pages to help you get started faster. You can change the
										text and images and you're good to go.
									</p>
									<ul className="mt-6 list-none">
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="mr-3 inline-block rounded-full bg-pink-200 px-2 py-1 font-semibold text-pink-600 text-xs uppercase">
														<i className="fas fa-fingerprint" />
													</span>
												</div>
												<div>
													<h4 className="text-gray-600">Carefully crafted components</h4>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<h4 className="text-gray-600">Amazing page examples</h4>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<h4 className="text-gray-600">Dynamic components</h4>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pt-20 pb-48">
					<div className="container mx-auto px-4">
						<div className="mb-24 flex flex-wrap justify-center text-center">
							<div className="w-full px-4 lg:w-6/12">
								<h2 className="font-semibold text-4xl">Here are our heroes</h2>
								<p className="m-4 text-gray-600 text-lg leading-relaxed">
									According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts
									the potentially record maximum.
								</p>
							</div>
						</div>
						<div className="flex flex-wrap">
							<div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
								<div className="px-6">
									<img
										alt="..."
										src={"/assets/img/team-1-800x800.jpg"}
										className="mx-auto max-w-full rounded-full shadow-lg"
										style={{ maxWidth: "120px" }}
									/>
									<div className="pt-6 text-center">
										<h5 className="font-bold text-xl">Ryan Tompson</h5>
										<p className="mt-1 font-semibold text-gray-500 text-sm uppercase">Web Developer</p>
										
									</div>
								</div>
							</div>
							<div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
								<div className="px-6">
									<img
										alt="..."
										src={"/assets/img/team-2-800x800.jpg"}
										className="mx-auto max-w-full rounded-full shadow-lg"
										style={{ maxWidth: "120px" }}
									/>
									<div className="pt-6 text-center">
										<h5 className="font-bold text-xl">Romina Hadid</h5>
										<p className="mt-1 font-semibold text-gray-500 text-sm uppercase">Marketing Specialist</p>
										
									</div>
								</div>
							</div>
							<div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
								<div className="px-6">
									<img
										alt="..."
										src={"/assets/img/team-3-800x800.jpg"}
										className="mx-auto max-w-full rounded-full shadow-lg"
										style={{ maxWidth: "120px" }}
									/>
									<div className="pt-6 text-center">
										<h5 className="font-bold text-xl">Alexa Smith</h5>
										<p className="mt-1 font-semibold text-gray-500 text-sm uppercase">UI/UX Designer</p>
										
									</div>
								</div>
							</div>
							<div className="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
								<div className="px-6">
									<img
										alt="..."
										src={"/assets/img/team-4-470x470.png"}
										className="mx-auto max-w-full rounded-full shadow-lg"
										style={{ maxWidth: "120px" }}
									/>
									<div className="pt-6 text-center">
										<h5 className="font-bold text-xl">Jenna Kardi</h5>
										<p className="mt-1 font-semibold text-gray-500 text-sm uppercase">Founder and CEO</p>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative block bg-gray-900 pb-20">
					<div
						className="-mt-20 pointer-events-none absolute top-0 right-0 bottom-auto left-0 w-full overflow-hidden"
						style={{ height: "80px" }}
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
              <title>i don't know</title>
							<polygon className="fill-current text-gray-900" points="2560 0 2560 100 0 100" />
						</svg>
					</div>

					<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
						<div className="flex flex-wrap justify-center text-center">
							<div className="w-full px-4 lg:w-6/12">
								<h2 className="font-semibold text-4xl text-white">Build something</h2>
								<p className="mt-4 mb-4 text-gray-500 text-lg leading-relaxed">
									Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the
									National Oceanic and Atmospheric Administration, Ted, Scambos.
								</p>
							</div>
						</div>
						<div className="mt-12 flex flex-wrap justify-center">
							<div className="w-full px-4 text-center lg:w-3/12">
								<h6 className="mt-5 font-semibold text-white text-xl">Excelent Services</h6>
								<p className="mt-2 mb-4 text-gray-500">
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</p>
							</div>
							<div className="w-full px-4 text-center lg:w-3/12">
								<h5 className="mt-5 font-semibold text-white text-xl">Grow your market</h5>
								<p className="mt-2 mb-4 text-gray-500">
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</p>
							</div>
							<div className="w-full px-4 text-center lg:w-3/12">
								<h5 className="mt-5 font-semibold text-white text-xl">Launch time</h5>
								<p className="mt-2 mb-4 text-gray-500">
									Some quick example text to build on the card title and make up the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="relative block bg-gray-900 py-24 lg:pt-0">
					<div className="container mx-auto px-4">
						<div className="lg:-mt-64 -mt-48 flex flex-wrap justify-center">
							<div className="w-full px-4 lg:w-6/12">
								<div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-gray-300 shadow-lg">
									<div className="flex-auto p-5 lg:p-10">
										<h4 className="font-semibold text-2xl">Want to work with us?</h4>
										<p className="mt-1 mb-4 text-gray-600 leading-relaxed">
											Complete this form and we will get back to you in 24 hours.
										</p>
										<div className="relative mt-8 mb-3 w-full">
											<label className="mb-2 block font-bold text-gray-700 text-xs uppercase" htmlFor="full-name">
												Full Name
											</label>
											<input
												type="text"
												className="w-full rounded border-0 bg-white px-3 py-3 text-gray-700 text-sm placeholder-gray-400 shadow focus:outline-none focus:ring"
												placeholder="Full Name"
												style={{ transition: "all .15s ease" }}
											/>
										</div>

										<div className="relative mb-3 w-full">
											<label className="mb-2 block font-bold text-gray-700 text-xs uppercase" htmlFor="email">
												Email
											</label>
											<input
												type="email"
												className="w-full rounded border-0 bg-white px-3 py-3 text-gray-700 text-sm placeholder-gray-400 shadow focus:outline-none focus:ring"
												placeholder="Email"
												style={{ transition: "all .15s ease" }}
											/>
										</div>

										<div className="relative mb-3 w-full">
											<label className="mb-2 block font-bold text-gray-700 text-xs uppercase" htmlFor="message">
												Message
											</label>
											<textarea
												rows={4}
												cols={80}
												className="w-full rounded border-0 bg-white px-3 py-3 text-gray-700 text-sm placeholder-gray-400 shadow focus:outline-none focus:ring"
												placeholder="Type a message..."
											/>
										</div>
										<div className="mt-6 text-center">
											<button
												className="mr-1 mb-1 rounded bg-gray-900 px-6 py-3 font-bold text-sm text-white uppercase shadow outline-none hover:shadow-lg focus:outline-none active:bg-gray-700"
												type="button"
												style={{ transition: "all .15s ease" }}
											>
												Send Message
											</button>
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
}
