export default function Footer() {
	return (
		<>
			<footer className="relative bg-gray-300 pt-8 pb-6">
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
						<title>Test</title>
						<polygon className="fill-current text-gray-300" points="2560 0 2560 100 0 100" />
					</svg>
				</div>
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap">
						<div className="w-full px-4 lg:w-6/12">
							<h4 className="font-semibold text-3xl">Let's keep in touch!</h4>
							<h5 className="mt-0 mb-2 text-gray-700 text-lg">
								Find us at <a href="mailto:bootcamp-2024@dont-use-this.email">bootcamp-2024@dont-use-this.email</a>
							</h5>
						</div>
						<div className="w-full px-4 lg:w-6/12">
							<div className="items-top mb-6 flex flex-wrap">
								<div className="ml-auto w-full px-4 lg:w-4/12">
									<span className="mb-2 block font-semibold text-gray-600 text-sm uppercase">Useful Links</span>
									<ul className="list-unstyled">
										<li>
											<a
												className="block pb-2 font-semibold text-gray-700 text-sm hover:text-gray-900"
												href="https://www.creative-tim.com/presentation"
											>
												About Us
											</a>
										</li>
										<li>
											<a
												className="block pb-2 font-semibold text-gray-700 text-sm hover:text-gray-900"
												href="https://blog.creative-tim.com"
											>
												Blog
											</a>
										</li>
										<li>
											<a
												className="block pb-2 font-semibold text-gray-700 text-sm hover:text-gray-900"
												href="https://www.github.com/creativetimofficial"
											>
												Github
											</a>
										</li>
										<li>
											<a
												className="block pb-2 font-semibold text-gray-700 text-sm hover:text-gray-900"
												href="https://www.creative-tim.com/bootstrap-themes/free"
											>
												Free Products
											</a>
										</li>
									</ul>
								</div>
								<div className="w-full px-4 lg:w-4/12">
									<span className="mb-2 block font-semibold text-gray-600 text-sm uppercase">Other Resources</span>
									<ul className="list-unstyled">
										<li>
											<a
												className="block pb-2 font-semibold text-gray-700 text-sm hover:text-gray-900"
												href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
											>
												MIT License
											</a>
										</li>
										<li>
											<a
												className="block pb-2 font-semibold text-gray-700 text-sm hover:text-gray-900"
												href="https://creative-tim.com/terms"
											>
												Terms & Conditions
											</a>
										</li>
										<li>
											<a
												className="block pb-2 font-semibold text-gray-700 text-sm hover:text-gray-900"
												href="https://creative-tim.com/privacy"
											>
												Privacy Policy
											</a>
										</li>
										<li>
											<a
												className="block pb-2 font-semibold text-gray-700 text-sm hover:text-gray-900"
												href="https://creative-tim.com/contact-us"
											>
												Contact Us
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<hr className="my-6 border-gray-400" />
					<div className="flex flex-wrap items-center justify-center md:justify-between">
						<div className="mx-auto w-full px-4 text-center md:w-4/12">
							<div className="py-1 font-semibold text-gray-600 text-sm">
								Copyright © {new Date().getFullYear()}{" "}
								<a href="https://www.teamsystem.com" className="text-gray-600 hover:text-gray-900">
									Teamsystem
								</a>
								&nbsp; Tirana Bootcamp.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
