import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls]);

  return (
    <div className="relative h-screen bg-gradient-to-b from-hero-bg-start to-hero-bg-end text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-hero-overlay opacity-90"></div>
      <div className="container mx-auto flex flex-col justify-center h-full relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-xl md:text-2xl mb-8 transform hover:rotate-x-0 hover:rotate-y-0 hover:rotate-0 transition-transform duration-500 ease-in-out"
        >
          Hi, my name is
        </motion.p>
        
        
        <motion.h1
          initial={{ opacity: 0, y: 100, rotateX: -15 }}
          animate={controls}
          className="text-5xl md:text-6xl font-bold mb-4 transform hover:rotate-x-0 hover:rotate-y-0 hover:rotate-0 transition-transform duration-500 ease-in-out"
        >
         Md. Salman Hossain
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-xl md:text-2xl mb-8 transform hover:rotate-x-0 hover:rotate-y-0 hover:rotate-0 transition-transform duration-500 ease-in-out"
        >
          A Passionate Software Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-gray-300 text-lg md:text-xl mb-12 transform hover:rotate-x-0 hover:rotate-y-0 hover:rotate-0 transition-transform duration-500 ease-in-out"
        >
          Welcome to my portfolio. I create elegant and efficient software solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotateX: -15 }}
          animate={controls}
          className="flex space-x-4 transform hover:rotate-x-0 hover:rotate-y-0 hover:rotate-0 transition-transform duration-500 ease-in-out"
        >
          <a
            href="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold mr-4 md:mr-8"
          >
            About Me
          </a>
          <a
            href="/work"
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold mr-4 md:mr-8"
          >
            My Work
          </a>
          <a
            href="/contact"
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full text-lg md:text-xl font-semibold"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
