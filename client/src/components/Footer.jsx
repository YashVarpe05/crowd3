import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
	FaInstagram,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaYoutube,
	FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	return (
		<footer className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
				>
					{/* Explore Section */}
					<div className="space-y-4">
						<h3 className="text-xl font-bold text-white mb-6 relative inline-block">
							Explore
							<motion.div
								className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"
								initial={{ width: 0 }}
								whileInView={{ width: "100%" }}
								transition={{ duration: 0.8 }}
							/>
						</h3>
						<motion.ul className="space-y-3">
							{["What We Do", "Projects", "Success Stories"].map(
								(item, index) => (
									<motion.li
										key={item}
										initial={{ x: -20, opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										transition={{ delay: index * 0.1 }}
									>
										<Link
											to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
											className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
										>
											{item}
										</Link>
									</motion.li>
								)
							)}
						</motion.ul>
					</div>

					{/* Newsletter Section */}
					<div className="lg:col-span-1 space-y-4">
						<h3 className="text-xl font-bold text-white mb-6 relative inline-block">
							Newsletter
							<motion.div
								className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"
								initial={{ width: 0 }}
								whileInView={{ width: "100%" }}
								transition={{ duration: 0.8 }}
							/>
						</h3>
						<p className="text-gray-400">
							Subscribe to our newsletter to get the latest updates.
						</p>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								// Handle form submission
							}}
							className="flex flex-col space-y-3"
						>
							<input
								type="email"
								placeholder="Your email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="bg-gray-800 text-gray-400 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
							/>
							<button
								type="submit"
								className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-300"
							>
								Subscribe
							</button>
						</form>
					</div>

					{/* Social icons */}
					<div className="space-y-4">
						<h3 className="text-xl font-bold text-white mb-6 relative inline-block">
							Follow Us
							<motion.div
								className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"
								initial={{ width: 0 }}
								whileInView={{ width: "100%" }}
								transition={{ duration: 0.8 }}
							/>
						</h3>
						<div className="flex space-x-4">
							<a
								href="https://www.instagram.com/yash_varpe.05?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
								className="text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-300"
							>
								<FaInstagram />
							</a>

							<a
								href="#"
								className="text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-300"
							>
								<FaTwitter />
							</a>
							<a
								href="#"
								className="text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-300"
							>
								<FaLinkedin />
							</a>
							<a
								href="#"
								className="text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-300"
							>
								<FaYoutube />
							</a>
						</div>
					</div>

					{/* Contact Section */}
					<div className="space-y-4">
						<h3 className="text-xl font-bold text-white mb-6 relative inline-block">
							Contact Us
							<motion.div
								className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"
								initial={{ width: 0 }}
								whileInView={{ width: "100%" }}
								transition={{ duration: 0.8 }}
							/>
						</h3>
						<div className="flex items-center space-x-4">
							<FaEnvelope className="text-2xl text-gray-400" />
							<a
								href="mailto:blockfund0@gmail.com"
								className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
							>
								yashvarpe2005@gmail.com
							</a>
						</div>
					</div>
				</motion.div>

				<hr className="border-gray-700 my-8" />
				<div className="text-center text-sm text-gray-400">
					<ul className="flex flex-col sm:flex-row justify-center sm:justify-center sm:flex-wrap">
						<li className="mr-4 mb-2 sm:mb-0">
							<a href="#">Term of Use</a>
						</li>
						<li className="mr-4 mb-2 sm:mb-0">
							<a href="#">Privacy Policy</a>
						</li>
						<li className="mr-4 mb-2 sm:mb-0">
							<a href="#">Cookie Policy</a>
						</li>
						<li className="mr-4 mb-2 sm:mb-0">
							<a href="#">Do Not Sell My Personal Information</a>
						</li>
						<li className="mr-4 mb-2 sm:mb-0">
							<a href="#">Accessibility</a>
						</li>
					</ul>
					<p>&copy; 2024 Block Fund. Inc. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
