import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { Loader } from "../components";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter, FiClock, FiTarget } from 'react-icons/fi';

const ProjectCard = ({ campaign, onClick }) => (
  <motion.div
    layout
    whileHover={{ y: -10 }}
    className="relative group"
  >
    {/* Glass Effect Background */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
    
    <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 h-[400px] flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden rounded-lg mb-4">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 px-3 py-1 bg-purple-500/80 backdrop-blur-sm rounded-full text-xs text-white">
          {campaign.category}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{campaign.title}</h3>
      <p className="text-gray-400 text-sm line-clamp-2 mb-4">{campaign.description}</p>

      {/* Stats */}
      <div className="mt-auto space-y-4">
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-2">
            <FiTarget className="text-purple-500" />
            <span className="text-white">{campaign.amountCollected} ETH</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-purple-500" />
            <span className="text-white">{campaign.remainingDays} days left</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(campaign.amountCollected / campaign.target) * 100}%` }}
            className="absolute h-full bg-gradient-to-r from-purple-500 to-blue-500"
          />
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClick}
          className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold"
        >
          View Details
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const ExploreProjects = () => {
  const { contract, getCampaigns } = useStateContext();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    if (data) {
      const filteredData = data.filter(
        (campaign) =>
          campaign.owner !== "0x0000000000000000000000000000000000000000"
      );
      const sortedData = filteredData.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setCampaigns(sortedData);
      setSortedCampaigns(sortedData);
    } else {
      setCampaigns([]);
      setSortedCampaigns([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [contract]);

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  const handleSort = (criteria) => {
    let sortedData;
    switch (criteria) {
      case "asc":
        sortedData = [...campaigns].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "dsc":
        sortedData = [...campaigns].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
      case "deadline":
        sortedData = [...campaigns].sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
        break;
      case "new":
        sortedData = [...campaigns].sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate)
        );
        break;
      case "close":
        sortedData = [...campaigns].sort(
          (a, b) =>
            b.amountRaised / b.goalAmount - a.amountRaised / a.goalAmount
        );
        break;
      default:
        sortedData = campaigns;
    }
    setSortedCampaigns(sortedData);
    setDropdownOpen(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Explore Amazing Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover innovative campaigns and support creators bringing their ideas to life
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-gray-700 focus:border-purple-500 transition-all"
            />
          </div>

          <motion.div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-gray-700 flex items-center gap-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FiFilter />
              Sort By
            </motion.button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute mt-2 w-48 bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-xl border border-gray-700"
                >
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      className="w-full px-4 py-2 text-left hover:bg-white/10 transition-colors"
                      onClick={() => handleSort(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        {isLoading ? (
          <motion.div
            className="flex justify-center py-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full" />
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {sortedCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard
                    campaign={campaign}
                    onClick={() => handleNavigate(campaign)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExploreProjects;
