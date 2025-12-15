"use client";

import { useState, useEffect, useRef } from 'react';
import founder from '../../images/founder.jpg'
import firstBreakThrough from '../../images/firstBreakThrough.png'
import launch from '../../images/launch.png'
import launch2 from '../../images/launch2.png'
import launch3 from '../../images/launch3.png'
import conversion from '../../images/PC2PLC.png'
import launch4 from '../../images/launch4.png'
import establishment from '../../images/establishment.png'
import establishment2 from '../../images/establishment-2.png'
import milestone2 from '../../images/milestone2.png'
import milestone3 from '../../images/milestone3.png'
import launch5 from '../../images/launch5.png'
import launch6 from '../../images/launch6.png'
import marketing from '../../images/marketing.png'
import launch7 from '../../images/launch7.png'
import award from '../../images/award.png'
import launch8 from '../../images/launch8.png'
import launch9 from '../../images/launch9.jpg'
import launch10 from '../../images/launch10.jpg'
import launch11 from '../../images/launch11.png'
import launch12 from '../../images/launch12.jpg'


export default function Journey() {
  const timelineData = [
    {
      year: '1987',
      title: 'Founded By',
      description:
        'Mr. M.Rajarathinam as a partnership company viz Madras Medical Company.',
      image:
        founder,
    },
    {
      year: '1988',
      title: 'First Breakthrough',
      description:
        'Tablet Manufacturing plant commenced production Domestic marketing operations started in Tamilnadu',
      image:
        firstBreakThrough,
    },
    {
      year: '1989',
      title: 'Medicine Launched',
      description:
        'Medineuron,Medicine for treating Neurons launched.',
      image:
        launch,
    },
    {
      year: '1991',
      title: 'Serratiopeptidase brand Septidase Launched',
      description:
        'India’s first Activated Serratiopeptidase brand Septidase Launched for the management of Inflammation.',
      image:
        launch2,
    },
    {
      year: '1992',
      title: 'Paracetamol Tablets launched',
      description:
        'Thermonil Tablets India’s 1st Dispersible Paracetamol Tablets launched.',
      image:
        launch3,
    },
    {
      year: '1997',
      title: 'MileStone',
      description:
        'Partnership company was converted in to a Public Limited Company Viz. MMC Healthcare Ltd.',
      image:
        conversion,
    },
    {
      year: '1998',
      title: 'Product Launch',
      description:
        'Flagship brand Pileum a Phyto medicine launched for the treatment of Piles, Fissures & Fistula.',
      image:
        launch4,
    },
    {
      year: '2004',
      title: 'Establishment',
      description:
        'New Manufacturing plant for manufacture of Tablet, capsules & Syrup started in Thirumazhisai Industrial Estate, Chennai',
      image:
        establishment,
    },
    {
      year: '2005',
      title: 'Establishment',
      description:
        'Second manufacturing plant at Deonghat, Solan, Himachalapradesh started for manufacture of Tablets, Capsules, Syrups & Liniments.',
      image:
        establishment2,
    },
    {
      year: '2016',
      title: 'MileStone',
      description:
        'MMC Healthcare Ltd demerged as MMC Pharmaceuticals Ltd focusing on Marketing & MMC Healthcare Ltd focusing on Manufacturing. Second Marketing Division Ziva focusing on Infertility management launched.',
      image:
        milestone2,
    },
    {
      year: '2017',
      title: 'MileStone',
      description:
        'MMC enters into Respiratory care by the launch of EB(Easy Breathing)range of products. Cystop range of products for the treatment of PCOS in Gynec segment launched.',
      image:
        milestone3,
    },
    {
      year: '2018',
      title: 'Product Launch',
      description:
        'Libidup & Libidup PE range of products in andrology segment launched.',
      image:
        launch5,
    },
    {
      year: '2019',
      title: 'Product Launch',
      description:
        'MMC enters into Geriatric care with the launch of Hemocare Senior.',
      image:
        launch6,
    },
    {
      year: '2020',
      title: 'MileStone',
      description:
        'Marketing in Myanmar Wellmune range of Immuno boosters launched during the difficult COVID pandemic',
      image:
        marketing,
    },
    {
      year: '2021',
      title: 'Product Launch',
      description:
        'Normoflora range of products for the treatment of Dysbiosis in Genito urinary tract launched.',
      image:
        launch7,
    },
    {
      year: '2022',
      title: 'Award',
      description:
        'Hemocare has received award in the category of Perception that matters awarded by Pronto Consult Consumers awards, Mumbai.',
      image:
        award,
    },
    {
      year: '2023',
      title: 'Product Launch',
      description:
        'In April 2023 Launched our New Brand Medineuron LC For muscle cramps in Gynecology speciality EbMont BL for the treatment of allergic rhinitis in the ENT speciality',
      image:
        launch8,
    },
    {
      year: '2023',
      title: 'Product Launch',
      description:
        'In October we launched the our unique brand OvaZoa Reserve in infertility speciality',
      image:
        launch9,
    },
     {
      year: '2024',
      title: 'Product Launch',
      description:
        'Launched a vast range of infertility products like Embryo Fix for Recurrent implantation failure &Embryo FG Granules for the treatment of Fetal Growth',
      image:
        launch10,
    },
     {
      year: '2024',
      title: 'Product Launch',
      description:
        'Launched the Embryofix FG granules for exclusive for Fetal growth',
      image:
        launch11,
    },
     {
      year: '2024',
      title: 'Product Launch',
      description:
        'MMC entered into new specialty Nephrology Launched the brand Uralbu for Urinary albumin excretion',
      image:
        launch12,
    }
  ];

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

      // Calculate active index based on scroll position
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
      handleScroll(); // Initial calculation
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [timelineData.length]);

  const calculateTransform = (index) => {
    const totalItems = timelineData.length;
    const baseOffset = 80; // Base overlap amount
    const maxOffset = (totalItems - 1) * 20; // Maximum total offset
    
    // Calculate position based on scroll progress
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
    
    const container = containerRef.current;
    const itemHeight = 200; // Approximate item height
    const scrollPosition = index * itemHeight;
    
    container.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-1 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* header for the name  */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our story through an interactive timeline experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Image*/}
          <div className="lg:w-2/5">
            <div className="sticky top-8">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={timelineData[activeIndex].image}
                  alt={timelineData[activeIndex].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  
                  {/* year on image */}
                  <div className="text-6xl font-bold mb-2 opacity-20">
                    {timelineData[activeIndex].year}
                  </div>
                  {/* title on image */}
                  <h3 className="text-3xl font-bold mb-2">
                    {timelineData[activeIndex].title}
                  </h3>
                  {/* descipion on image */}
                  <p className="text-lg opacity-90">
                    {timelineData[activeIndex].description}
                  </p>
                </div>
                
              </div>

            </div>
          </div>

          {/* Right Side - Overlapping Timeline */}
          <div className="lg:w-3/5">
            <div ref={containerRef} className=" h-[550px] overflow-y-auto scroll-smooth rounded-2xl  bg-white/50 backdrop-blur-sm p-6 shadow-lg
                [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

              <div className="relative">
                
                <div className="pl-12">
                  {timelineData.map((item, index) => (
                    <div
                      key={index}
                      className="relative mb-4 transition-all duration-500 ease-out"
                      style={calculateTransform(index)}
                      onClick={() => scrollToIndex(index)}
                    >
                      {/* Timeline dot */}
                      <div 
                        className={`absolute left-0 w-4 h-4 rounded-full border-4 border-white transform -translate-x-1/2 transition-all duration-300 ${
                          index <= activeIndex 
                            ? 'bg-gradient from-blue-500 to-purple-500 scale-125' 
                            : 'bg-gray-300'
                        }`}
                        style={{ left: '-32px', top: '40px' }}
                      ></div>
                      
                      {/* Content card */}
                      <div 
                        className={`rounded-xl p-2 shadow-xl transition-all duration-400 cursor-pointer ${
                          index === activeIndex
                            ? 'bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 scale-105'
                            : index < activeIndex
                            ? 'bg-gradient-to-br from-gray-50 to-white border border-gray-200'
                            : 'bg-white border border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-32 h-32 flex-shrink-4 rounded-lg overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="text-sm font-semibold text-red-600 mb-1">
                                  {item.year}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                  {item.title}
                                </h3>
                              </div>
                              
                            </div>
                            
                            <p className="text-gray-600">
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
    </div>
  );
}