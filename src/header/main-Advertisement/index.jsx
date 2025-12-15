"use client";

import { useState, useEffect } from 'react';
import ferticare from '../../images/fericareLogo.jpg'
import uroCare from '../../images/UroCareLogo.jpg' 
import gynecCare from '../../images/gynecCare.webp'
import nephroCare from '../../images/nephroCare.png'
import andrologists from '../../images/andrologists.jpg'

const SimpleImageSlider = () => {
  const images = [
    andrologists,
    uroCare,
    gynecCare,
    nephroCare,
  ];

  const [current, setCurrent] = useState(0);

  const getImages = () => {
    const total = images.length;
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;
    
    return {
      prev: images[prev],
      current: images[current],
      next: images[next]
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const { prev, current: currentImg, next } = getImages();

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-8 md:mt-12 h-[260px] md:h-[400px]">

      {/* Left Blurred Image (DESKTOP ONLY) */}
      <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-3/4 transition-all duration-500">
        <img
          src={prev}
          alt="Previous slide"
          className="w-full h-full object-cover rounded-xl blur-sm opacity-70"
        />
      </div>

      {/* Center Main Image */}
      <div className="absolute inset-0 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-2/3 md:h-full transition-all duration-500 z-10">
        <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
          <img
            src={currentImg}
            alt="Main slide"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-3 md:-bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full ${
                index === current ? 'bg-blue-600 w-6' : 'bg-gray-400 w-2'
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      {/* Right Blurred Image (DESKTOP ONLY) */}
      <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-3/4 transition-all duration-500">
        <img
          src={next}
          alt="Next slide"
          className="w-full h-full object-cover rounded-xl blur-sm opacity-70"
        />
      </div>

    </div>
  );
};

export default SimpleImageSlider;
