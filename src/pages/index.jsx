import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skill from "../components/Skill";
// import ThreeCanvas from '@/components/ThreeCanvas';



const Home = () => {
  return (
    <Layout>
      <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero/>
      </div>
      
      <About/>
      <Skill/>
      {/* <SkillsContact/> */}
      {/* <ThreeCanvas/> */}
      </div>
    </Layout>
  );
};

export default Home;
