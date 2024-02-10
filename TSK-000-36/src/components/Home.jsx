import React from 'react';
import Hero from '../components/Hero'
import FeaturedInternships from '../components/featuredInternships'
import Feedback from './Feedback';

const Home = () => {
  return (
    <section className="container">
      <Hero />
      <FeaturedInternships />
      <Feedback />
      
    </section>
  );
};

export default Home;
