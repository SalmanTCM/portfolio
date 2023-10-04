import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skill from "../components/Skill";
// import ThreeCanvas from '@/components/ThreeCanvas';



const Home = () => {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Skill/>
      {/* <SkillsContact/> */}
      {/* <ThreeCanvas/> */}
    </Layout>
  );
};

export default Home;
