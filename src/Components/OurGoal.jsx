import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const taglines = [
  "Dive into a current of creativity",
  "Your success stream starts here",
  "Every idea makes waves",
  "Where growth flows naturally",
  "Fuel your brand’s momentum",
];

const OurGoal = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingInterval;

    if (typing) {
      typingInterval = setInterval(() => {
        setCurrentText((prev) => {
          const nextChar = taglines[currentIndex].slice(0, prev.length + 1);
          if (nextChar === taglines[currentIndex]) {
            setTyping(false);
          }
          return nextChar;
        });
      }, 100);
    } else {
      setTimeout(() => {
        setTyping(true);
        setCurrentIndex((prev) => (prev + 1) % taglines.length);
        setCurrentText("");
      }, 1500);
    }

    return () => clearInterval(typingInterval);
  }, [typing, currentIndex]);

  return (
    <motion.div
      className="bg-white px-6 py-3 rounded-full"
      style={{
        boxShadow: "0 -8px 15px rgba(0, 0, 0, 0.25), 0 8px 15px rgba(0, 0, 0, 0.25)",
      }}
    >
      <p className="text-xl md:text-2xl font-extrabold text-black text-center">
        {currentText}
        <span className="animate-pulse">|</span>
      </p>
    </motion.div>
  );
};

export default OurGoal;
