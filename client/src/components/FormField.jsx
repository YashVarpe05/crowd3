import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiAlertCircle, FiChevronDown } from "react-icons/fi";

const FormField = ({
	labelName,
	placeholder,
	isTextArea,
	isCategory,
	inputType,
	value,
	multiple,
	handleChange,
	error,
	success,
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const categories = [
		"Education",
		"Health",
		"Technology",
		"Environment",
		"Community",
		"Business",
	];

	const dropdownVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="relative group my-8"
		>
			{/* Morphing Background */}
			<div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />

			{/* Main Container */}
			<div className="relative">
				{/* Floating Label */}
				<motion.label
					initial={false}
					animate={{
						y: isFocused || value ? -28 : -12,
						scale: isFocused || value ? 0.85 : 1,
						color: isFocused ? "rgb(168, 85, 247)" : "rgb(156, 163, 175)",
					}}
					className="absolute left-3 px-2 font-medium pointer-events-none
                   bg-gradient-to-r from-gray-900 to-gray-900
                   z-10 origin-[0] transform transition-all duration-200"
				>
					{labelName}
				</motion.label>

				{/* Input Wrapper */}
				<div className="relative backdrop-blur-xl">
					{isCategory ? (
						<div className="relative">
							<motion.button
								onClick={() => setIsOpen(!isOpen)}
								className="w-full px-6 py-4 bg-gray-900/30
                         text-white rounded-2xl
                         border-2 border-gray-800/50
                         shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                         hover:border-purple-500/50
                         transition-all duration-300
                         flex justify-between items-center"
							>
								<span className="text-gray-400">
									{value || "Select Category"}
								</span>
								<motion.div
									animate={{ rotate: isOpen ? 180 : 0 }}
									transition={{ duration: 0.3 }}
								>
									<FiChevronDown />
								</motion.div>
							</motion.button>

							<AnimatePresence>
								{isOpen && (
									<motion.div
										variants={{
											hidden: { opacity: 0, y: 10 },
											visible: { opacity: 1, y: 0 }
										}}
										initial="hidden"
										animate="visible"
										exit="hidden"
										className="absolute w-full bottom-[calc(100%+0.5rem)] 
                             bg-gray-900/95 backdrop-blur-xl
                             border-2 border-gray-800/50
                             rounded-xl shadow-2xl z-[999]
                             overflow-hidden"
									>
										{categories.map((category) => (
											<motion.div
												key={category}
												onClick={() => {
													handleChange({ target: { value: category } });
													setIsOpen(false);
												}}
												whileHover={{
													backgroundColor: "rgba(168, 85, 247, 0.2)",
												}}
												className="px-6 py-2 cursor-pointer 
                       flex items-center justify-between
                       transition-colors duration-200"
											>
												<span className="text-gray-400">{category}</span>
												{value === category && (
													<motion.div
														initial={{ scale: 0 }}
														animate={{ scale: 1 }}
														className="text-purple-500"
													>
														<FiCheck />
													</motion.div>
												)}
											</motion.div>
										))}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					) : isTextArea ? (
						<textarea
							required
							value={value}
							onChange={handleChange}
							rows={6}
							placeholder={isFocused ? placeholder : ""}
							onFocus={() => setIsFocused(true)}
							onBlur={() => setIsFocused(false)}
							className="w-full px-6 py-4 bg-gray-900/30
                       text-white rounded-2xl
                       border-2 border-gray-800/50
                       shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                       focus:border-purple-500
                       focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]
                       transition-all duration-300 ease-out
                       placeholder:text-gray-500"
						/>
					) : (
						<input
							required
							value={value}
							onChange={handleChange}
							type={inputType}
							step="0.1"
							multiple={multiple}
							placeholder={isFocused ? placeholder : ""}
							onFocus={() => setIsFocused(true)}
							onBlur={() => setIsFocused(false)}
							className={`w-full px-6 py-4 bg-gray-900/30
                       text-white rounded-2xl
                       border-2 border-gray-800/50
                       shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                       focus:border-purple-500
                       focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]
                       transition-all duration-300 ease-out
                       placeholder:text-gray-500
                       ${isCategory ? "cursor-pointer" : ""}
                       ${error ? "border-red-500/50 focus:border-red-500" : ""}
                       ${
													success
														? "border-green-500/50 focus:border-green-500"
														: ""
												}`}
						/>
					)}

					{/* Status Icon */}
					<AnimatePresence>
						{(error || success) && (
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								className={`absolute right-4 top-1/2 -translate-y-1/2
                          ${error ? "text-red-500" : "text-green-500"}`}
							>
								{error ? <FiAlertCircle size={20} /> : <FiCheck size={20} />}
							</motion.div>
						)}
					</AnimatePresence>

					{/* Focus Ring */}
					<motion.div
						initial={false}
						animate={{
							opacity: isFocused ? 1 : 0,
							scale: isFocused ? 1 : 0.95,
						}}
						className="absolute -inset-[2px] -z-10 rounded-2xl
                     bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20
                     blur-sm transition-all duration-300"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default FormField;
