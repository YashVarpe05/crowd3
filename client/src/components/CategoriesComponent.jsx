import React from "react";
import { motion } from "framer-motion";
import CategoriesCards from "./CategoriesCards";

const CategoriesComponent = () => {
	return (
		<div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
			{/* Decorative blobs */}
			<div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
			<div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

			<div className="relative z-10 flex flex-col items-center justify-center px-4 pb-10 max-w-4xl mx-auto">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
				>
					Which categories interest you?
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="text-xl text-gray-600 dark:text-gray-300 text-center mb-4 max-w-2xl"
				>
					Discover projects just for you and get great recommendations when you
					select your interests.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="text-lg text-purple-600 dark:text-purple-400 font-medium text-center mb-10"
				>
					Explore our top categories
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="w-full"
				>
					<CategoriesCards />
				</motion.div>
			</div>
		</div>
	);
};

export default CategoriesComponent;
