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
      <div
        className="container mx-auto flex flex-col justify-center h-full relative z-10"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          rotateX: "15deg", // Adjust this angle as needed
          rotateY: "0deg",  // You can adjust this angle as well
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="box-with-3d-animation"
        >
          <p className="text-xl md:text-2xl mb-8">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Md. Salman Hossain
          </h1>
          <p className="text-xl md:text-2xl mb-8">A Passionate Software Engineer</p>
          <p className="text-gray-300 text-lg md:text-xl mb-12">
            Welcome to my portfolio. I create elegant and efficient software solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
