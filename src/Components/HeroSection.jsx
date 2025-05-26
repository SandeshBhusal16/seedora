import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const taglines = [
  "Dive into a current of creativity",
  "Accelerate growth with innovation",
  "Ignite your brand’s potential",
  "Grow your vision with precision"
];

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentTagline(prev => (prev + 1) % taglines.length);
        setFade(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(cycle);
  }, []);

  return (
    <section className="bg-[#5C7B4C] text-white h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Empower Your Brand with Seedora
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-green-100">
          We deliver innovative marketing solutions.
        </p>
        <p className={`mt-6 text-lg italic transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          {taglines[currentTagline]}
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block bg-white text-[#5C7B4C] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
