import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bg1 from "../assets/bg-3.jpg";
import bg2 from "../assets/bg-4.jpg";
import bg3 from "../assets/bg-5.png";
import { card } from "@nextui-org/theme";

const cardsData = [
	{
		id: 1,
		image: bg1,
		name: "Technology",
		description: "Innovative tech projects pushing boundaries",
		link: "Explore Tech",
		route: "/Technology",
	},
	{
		id: 2,
		image: bg2,
		name: "Gaming",
		description: "Revolutionary gaming experiences",
		link: "View Games",
		route: "/Fulfillment",
	},
	{
		id: 3,
		image: bg3,
		name: "Art & Design",
		description: "Creative projects from talented artists",
		link: "View Art",
		route: "/CreativeServices",
	},
];

const Card = ({ image, name, description, link, route, index }) => {
	const navigate = useNavigate();
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
		>
			<div
				className="w-80 h-96 relative group overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 
                   backdrop-blur-lg border border-gray-200 dark:border-gray-700/50 
                   hover:shadow-xl dark:hover:shadow-purple-500/20 transition-all duration-300"
				onClick={() => navigate(route)}
			>
				{/* Hover gradient overlay */}
				<div
					className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				/>

				{/* Accent line */}
				<div
					className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 
                      transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
				/>

				{/* Image container with zoom effect */}
				<div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700/50">
					<img
						className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
						src={image} // Use the image prop directly
						alt={name} // Use the name prop directly
					/>

					{/* Floating category tag */}
					<div
						className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-800/90 
                rounded-full text-sm font-medium shadow-lg backdrop-blur-sm
                transform -translate-y-2 opacity-0 group-hover:translate-y-0 
                group-hover:opacity-100 transition-all duration-300"
					>
						{name}
					</div>
				</div>

				{/* Content section */}
				<div className="p-6 relative">
					<h3
						className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-500 
                       dark:group-hover:text-purple-400 transition-colors duration-300"
					>
						{name}
					</h3>

					<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
						{description}
					</p>

					{/* Link section with arrow */}
					<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
						<span className="text-purple-500 dark:text-purple-400 font-medium">
							{link}
						</span>
						<ArrowRight
							className="w-5 h-5 text-purple-500 dark:text-purple-400 
                                transform group-hover:translate-x-2 transition-transform duration-300"
						/>
					</div>
				</div>

				{/* Hover effect corner decoration */}
				<div
					className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                      blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				/>
			</div>
		</motion.div>
	);
};

const CategoriesCards = () => {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
			{/* Background decorations */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto">
				{/* Section header */}
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 
                     bg-clip-text text-transparent"
					>
						Explore Categories
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
					>
						Discover innovative projects across various categories and support
						the ones that inspire you.
					</motion.p>
				</div>

				{/* Cards grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-56 justify-items-center">
					{cardsData.map((card, index) => (
						<Card
							key={card.id} // Using unique ID instead of index
							{...card}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CategoriesCards;
