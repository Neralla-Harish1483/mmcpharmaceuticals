"use client";

import { useState, useEffect, useRef } from 'react';
import { timelineData } from '../../data/timelineData';

export default function Journey() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const progress = (scrollTop / maxScroll) * 100;

      setScrollProgress(progress);

      const itemCount = timelineData.length;
      const newIndex = Math.min(
        Math.floor((scrollTop / maxScroll) * itemCount),
        itemCount - 1
      );
      setActiveIndex(newIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, [timelineData.length]);

  const calculateTransform = (index) => {
    const totalItems = timelineData.length;
    const baseOffset = 80;
    const scrollFactor = Math.min(scrollProgress / 100, 1);
    const positionOffset = index * baseOffset * scrollFactor;

    return {
      transform: `translateY(${positionOffset}px)`,
      zIndex: totalItems - index,
      opacity: index <= activeIndex ? 1 : 0.7,
      filter: index < activeIndex ? 'brightness(0.9)' : 'brightness(1)',
    };
  };

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      top: index * 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3">
            Our <span className="text-red-600">Journey</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our story through an interactive timeline experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Image Section */}
          <div className="lg:w-2/5">
            <div className="relative lg:sticky lg:top-8">
              <div className="relative h-[280px] sm:h-[380px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={timelineData[activeIndex].image}
                  alt={timelineData[activeIndex].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="text-4xl sm:text-6xl font-bold opacity-20">
                    {timelineData[activeIndex].year}
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold">
                    {timelineData[activeIndex].title}
                  </h3>
                  <p className="text-sm sm:text-lg opacity-90 mt-1">
                    {timelineData[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="lg:w-3/5">
            <div
              ref={containerRef}
              className="h-[420px] sm:h-[500px] lg:h-[550px]
              overflow-y-auto scroll-smooth rounded-2xl bg-white/60
              backdrop-blur-sm p-4 sm:p-6 shadow-lg
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden"
            >
              <div className="relative pl-6 sm:pl-12">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="relative mb-4 transition-all duration-500"
                    style={calculateTransform(index)}
                    onClick={() => scrollToIndex(index)}
                  >
                    {/* Dot */}
                    <div
                      className={`absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full border-4 border-white
                      -translate-x-1/2 transition-all ${
                        index <= activeIndex
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125'
                          : 'bg-gray-300'
                      }`}
                      style={{ left: '-24px', top: '32px' }}
                    />

                    {/* Card */}
                    <div
                      className={`rounded-xl p-3 sm:p-4 shadow-lg cursor-pointer transition-all ${
                        index === activeIndex
                          ? 'bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 scale-105'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="w-full sm:w-28 h-40 sm:h-28 rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="text-sm font-semibold text-red-600">
                            {item.year}
                          </div>
                          <h3 className="text-base sm:text-xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
