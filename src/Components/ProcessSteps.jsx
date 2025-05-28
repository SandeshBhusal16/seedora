import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Pencil, BarChart2 } from "lucide-react";
import workingImage from "../assets/images/working2b.png";

const steps = [
  {
    id: 1,
    title: "Discovery & Insight",
    icon: Search,
    desc: "Deep marketing analysis to uncover your unique strengths.",
    style: "top-10 left-0",
  },
  {
    id: 2,
    title: "Strategy Crafting",
    icon: Lightbulb,
    desc: "Tailored plan with clear goals across web, SEO, ads & reels.",
    style: "top-10 right-0",
  },
  {
    id: 3,
    title: "Creative Execution",
    icon: Pencil,
    desc: "Launch your site, SEO, Facebook ads & storytelling reels.",
    style: "bottom-10 left-0",
  },
  {
    id: 4,
    title: "Measurement & Optimization",
    icon: BarChart2,
    desc: "Track performance, refine tactics, and maximize ROI.",
    style: "bottom-10 right-0",
  },
];

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HowSeedoraDelivers() {
  return (
    <section className="relative bg-[#DAD7CD] text-[#344E41] py-16 md:py-24 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20">
        How Seedora Delivers
      </h2>

      {/* Layout for small screens: Stack everything vertically */}
      <div className="flex justify-center w-full">
        <div className="relative max-w-6xl min-h-[700px] md:h-[700px] px-4 w-full ">
          {/* Center Illustration */}
          <div className="md:absolute top-0 md:top-1/2 left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 mb-10 md:mb-0">
            <img
              src={workingImage}
              alt="Center Illustration"
              className="w-64 sm:w-72 md:w-96 mx-auto h-auto"
            />
          </div>

          {/* Feature Boxes for small screens: vertical layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:block gap-6 md:gap-0">
            {steps.map(({ id, title, desc, style, icon: Icon }, i) => (
              <motion.div
                key={id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={boxVariants}
                className={`w-full md:w-72 ${style} md:absolute p-5 sm:p-6 rounded-2xl shadow-md bg-gradient-to-br from-[#A3B18A] to-[#DAD7CD]`}
              >
                <div className="flex items-center mb-3">
                  <Icon className="w-6 h-6 mr-2 text-[#344E41]" />
                  <h3 className="text-base sm:text-lg font-semibold text-[#344E41]">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-[#344E41]/80">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
