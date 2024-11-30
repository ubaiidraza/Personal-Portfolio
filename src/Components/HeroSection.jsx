import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-gray-600">I’m a Frontend Developer.</p>
        <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded">Contact Me</button>
      </div>
    </section>
  );
};

export default HeroSection;
