import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Project from "../Components/project";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.7, ease: "easeOut" },
  }),
};

const AboutUs = () => {
  return (
    <section className="bg-[#DAD7CD] text-[#344E41]">
      {/* Hero */}

      <div className="px-6 md:px-20 py-20 text-center">
        <motion.h1
          className="text-5xl font-extrabold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          About <span className="text-[#3A5A40]">Seedora</span>
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Rooted in purpose, grown through creativity — Seedora blends
          nature-inspired strategies with modern marketing to make your brand
          unforgettable.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="mt-8"
        >
          <Link
            to="/contact"
            className="bg-[#3A5A40] hover:bg-[#588157] text-white px-6 py-3 rounded-md transition-all duration-300 shadow-lg"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>

      {/* Our Philosophy */}
      <div className="bg-[#A3B18A] py-14 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          We Listen First. Then We Create.
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Before we plant ideas, we understand your soil — your brand, audience,
          and purpose. Because thriving results start with grounded roots.
        </motion.p>
      </div>

      {/* Perks Grid */}
      <div className="px-6 md:px-20 py-16">
        <motion.h3
          className="text-2xl font-bold text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          What Sets Us Apart
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            [
              "Organic Strategy",
              "No gimmicks—just research-backed, high-conversion digital tactics.",
            ],
            [
              "Emotional Branding",
              "We tell stories that stick, making your brand human and memorable.",
            ],
            [
              "Eco-Aware Creativity",
              "Design and campaigns inspired by sustainability and impact.",
            ],
            [
              "Holistic Funnel Thinking",
              "From awareness to loyalty—every step matters.",
            ],
            [
              "Reel Storytelling",
              "Short-form content that connects deeply and converts instantly.",
            ],
            ["Data + Intuition", "Analytics fuel us, but empathy guides us."],
          ].map(([title, desc], i) => (
            <motion.div
              key={title}
              className="border border-[#344E41] p-6 rounded-xl bg-white shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
            >
              <h4 className="text-xl font-semibold mb-2 text-[#3A5A40]">
                {title}
              </h4>
              <p className="text-[#344E41]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-[#344E41] text-white py-16 px-6 md:px-20">
        <motion.h3
          className="text-2xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Our Story
        </motion.h3>
        <motion.p
          className="max-w-4xl text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Seedora began with a belief: that marketing should feel as natural as
          growth. Founded by creators who care about both people and planet, we
          help purpose-led brands tell their story, connect with their audience,
          and scale sustainably.
        </motion.p>
      </div>

      <Project/>

      {/* Testimonials */}
      <div className="px-6 md:px-20 py-20 bg-[#DAD7CD] text-[#344E41]">
        <motion.h3
          className="text-2xl font-bold text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Why Clients Choose Us
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "“They just got us.”",
            "“Our sales tripled in 6 months.”",
            "“Seedora is our secret weapon.”",
          ].map((quote, i) => (
            <motion.div
              key={i}
              className={`p-6 border-2 rounded-xl ${
                i === 1 ? "border-[#588157]" : "border-[#3A5A40]"
              } bg-white`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
            >
              <p className="italic text-lg">{quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
