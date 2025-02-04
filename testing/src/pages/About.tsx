import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-6">
          Welcome to Sweet Delights, where passion meets perfection in every bite. Our story began with
          a simple love for baking and has grown into a beloved destination for sweet treats.
        </p>
        <p className="text-lg mb-6">
          We take pride in using only the finest ingredients and traditional baking methods to create
          our delectable treats. Every pastry, cake, and bread is crafted with care and attention to
          detail.
        </p>
        <p className="text-lg">
          Our team of skilled bakers brings years of experience and creativity to our kitchen,
          ensuring that each item that leaves our bakery meets our high standards of quality and
          taste.
        </p>
      </div>
    </div>
  );
};

export default About;