import React from "react";
import { useNavigate } from "react-router-dom";
import { Compass, Heart, Lightbulb, Medal } from "lucide-react";

const ImageGallery = () => {
	const cards = [
		{
			title: "10 Cool & Clever Finds",
			path: "/TopFinds",
			accent: "from-blue-500 to-indigo-500",
			image: "/api/placeholder/800/600",
			overlayGradient: "from-blue-900/70 to-indigo-900/50",
			icon: Compass,
			description: "Discover innovative products",
		},
		{
			title: "Non Profit",
			path: "/Competition",
			accent: "from-violet-500 to-purple-500",
			image: "/api/placeholder/800/600",
			overlayGradient: "from-violet-900/70 to-purple-900/50",
			icon: Heart,
			description: "Support meaningful causes",
		},
		{
			title: "What We Do",
			path: "/WhatWeDo",
			accent: "from-purple-500 to-pink-500",
			image: "/api/placeholder/800/600",
			overlayGradient: "from-purple-900/70 to-pink-900/50",
			icon: Lightbulb,
			description: "Learn about our mission",
		},
		{
			title: "Memorial",
			path: "/Memorial",
			accent: "from-pink-500 to-rose-500",
			image: "/api/placeholder/800/600",
			overlayGradient: "from-pink-900/70 to-rose-900/50",
			icon: Medal,
			description: "Honor and remember",
		},
	];

	const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
			<div className="container mx-auto text-center py-10 pt-24">
				<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
					Find it first on Block Fund.
				</h1>
				<p className="text-gray-300 text-lg max-w-2xl mx-auto">
					Block Fund is where early adopters and innovation seekers find lively,
					imaginative tech before it hits the mainstream.
				</p>
			</div>

			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{cards.map((card, index) => {
						const Icon = card.icon;
						return (
							<div
								key={index}
								onClick={() => navigate(card.path)}
								className="group relative bg-white/10 backdrop-blur-lg rounded-xl shadow-lg 
                         hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden
                         border border-white/10 hover:border-white/20"
							>
								{/* Animated background gradient */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${card.overlayGradient} 
                           opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
								/>

								{/* Glass effect overlay */}
								<div
									className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500"
								/>

								{/* Accent line with glow */}
								<div
									className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${card.accent} 
                           transform origin-left scale-x-0 group-hover:scale-x-100 
                           transition-transform duration-500 shadow-lg`}
								/>

								<div className="relative h-72 flex items-center justify-between p-8">
									<div className="space-y-4">
										<h2
											className="text-2xl font-bold text-white group-hover:translate-x-2 
                                transition-transform duration-500"
										>
											{card.title}
										</h2>
										<p
											className="text-gray-300 max-w-sm opacity-0 group-hover:opacity-100 
                              transform translate-y-2 group-hover:translate-y-0 
                              transition-all duration-500 delay-100"
										>
											{card.description}
										</p>
										<div
											className="w-16 h-0.5 bg-white/30 group-hover:w-24 
                                group-hover:bg-white/50 transition-all duration-500"
										/>
									</div>

									<div className="relative">
										<div
											className="absolute inset-0 rounded-full bg-white/10 opacity-0 
                                group-hover:opacity-100 scale-150 group-hover:scale-100 
                                transition-all duration-500"
										/>
										<Icon
											className="w-12 h-12 text-white opacity-40 group-hover:opacity-100 
                              transform rotate-0 group-hover:rotate-12 scale-100 
                              group-hover:scale-110 transition-all duration-500"
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ImageGallery;
