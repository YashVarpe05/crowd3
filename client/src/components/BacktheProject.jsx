import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bg1 from "../assets/bg-1.png";
import bg2 from "../assets/bg-2.webp"; // Add this at the top with other imports

const BacktheProject = () => {
	return (
		<div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-24 px-6">
			{/* Background gradient blob */}
			<div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
			<div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
					{/* Left Image */}
					<motion.div
						className="md:col-span-3"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="relative group">
							<img
								src={bg1}
								alt="Gaming Innovation"
								className="w-full h-auto object-cover rounded-lg shadow-lg"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
					</motion.div>

					{/* Center Content */}
					<motion.div
						className="md:col-span-6 space-y-6 text-center md:text-left"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
							Back the Project, Take the Ride
						</h2>

						<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
							Block Fund is your destination for clever innovation in tech,
							design and more. Back a campaign, share your ideas and feedback
							with the project team - and join the rewards of bringing new
							products to life.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
							<button className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors duration-200">
								Start Backing
								<ArrowRight className="ml-2 h-5 w-5" />
							</button>

							<button className="inline-flex items-center px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-600 hover:text-white transition-all duration-200">
								Learn More
							</button>
						</div>
					</motion.div>

					{/* Right Image */}
					<motion.div
						className="md:col-span-3"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<div className="relative group">
							<img
								src={bg2}
								alt="Innovation Cycle"
								className="w-full h-[400px] object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default BacktheProject;
