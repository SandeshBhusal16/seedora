import React from "react";
import {
  FaCode,
  FaSearch,
  FaBullhorn,
  FaFacebookF,
  FaBookOpen,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSearch className="text-5xl text-[#3A5A40]" />,
    title: "Search Engine Optimisation",
    description: "Data-backed SEO strategies",
    bg: "bg-[#DAD7CD]",
  },
  {
    icon: <FaCode className="text-5xl text-[#588157]" />,
    title: "Web Development",
    description: "User-Centric design, seamless UX",
    bg: "bg-[#A3B18A]",
  },
  {
    icon: <FaBullhorn className="text-5xl text-[#344E41]" />,
    title: "Performance Marketing",
    description: "Google Ads, Facebook ads & LinkedIn Ads",
    bg: "bg-[#DAD7CD]",
  },
  {
    icon: <FaFacebookF className="text-5xl text-[#344E41]" />,
    title: "Facebook Ads",
    description: "Targeted social campaigns that convert",
    bg: "bg-[#A3B18A]",
  },
  {
    icon: <FaBookOpen className="text-5xl text-[#3A5A40]" />,
    title: "Storytelling",
    description: "We craft narratives that sell",
    bg: "bg-[#588157]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#3A5A40] text-white p-10 rounded-2xl mb-12 shadow-lg"
      >
        <div className="flex items-center space-x-4">
          <FaRocket className="text-5xl text-white" />
          <div>
            <h2 className="text-3xl font-bold mb-1">Seedora Services</h2>
            <p className="text-lg">
              Empowering your brand with full-stack marketing and development
              solutions.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`${service.bg} p-8 rounded-2xl shadow-md hover:scale-[1.03] transition-transform duration-300`}
          >
            <div className="mb-5">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-lg">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
