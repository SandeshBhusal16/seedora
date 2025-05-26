import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Pencil, BarChart2 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Discovery & Insight',
    icon: Search,
    desc: 'Deep marketing analysis to uncover your unique strengths.',
    style: 'top-10 left-0',
  },
  {
    id: 2,
    title: 'Strategy Crafting',
    icon: Lightbulb,
    desc: 'Tailored plan with clear goals across web, SEO, ads & reels.',
    style: 'top-10 right-0',
  },
  {
    id: 3,
    title: 'Creative Execution',
    icon: Pencil,
    desc: 'Launch your site, SEO, Facebook ads & storytelling reels.',
    style: 'bottom-10 left-0',
  },
  {
    id: 4,
    title: 'Measurement & Optimization',
    icon: BarChart2,
    desc: 'Track performance, refine tactics, and maximize ROI.',
    style: 'bottom-10 right-0',
  },
];

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function HowSeedoraDelivers() {
  return (
    <section className="relative bg-[#DAD7CD] text-[#344E41] py-24 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-20">How Seedora Delivers</h2>

      <div className="relative max-w-6xl mx-auto h-[700px]">
        {/* Center Illustration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img
            src="src/assets/images/working2b.png"
            alt="Center Illustration"
            className="w-80 md:w-96 h-auto"
          />
        </div>

        {/* Feature Boxes */}
        {steps.map(({ id, title, icon: Icon, desc, style }, i) => (
          <motion.div
            key={id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={boxVariants}
            className={`absolute w-72 ${style} p-6 rounded-2xl shadow-md bg-gradient-to-br from-[#A3B18A] to-[#DAD7CD]`}
          >
            <div className="flex items-center mb-3">
              <Icon className="w-6 h-6 mr-2 text-[#344E41]" />
              <h3 className="text-lg font-semibold text-[#344E41]">{title}</h3>
            </div>
            <p className="text-sm text-[#344E41]/80">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
