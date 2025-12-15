import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Beaker, 
  HeartPulse, 
  Globe, 
  ArrowRight, 
  Microscope, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Menu,
  X
} from 'lucide-react';

// Register GSAP ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  // Ref to hold the main component scope for GSAP cleanup
  const mainRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useLayoutEffect is used for DOM measurements/manipulations (like GSAP) 
  // before the browser paints, ensuring smooth initial animations.
  useLayoutEffect(() => {
    // gsap.context handles cleanup automatically when the component unmounts
    const ctx = gsap.context(() => {

      // 1. Hero Animation (On Load)
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      })
      .from(".hero-image", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.8"); // Starts 0.8s before the previous animation ends

      // 2. Scroll-Triggered Reveals for Section Headers
      gsap.utils.toArray(".section-header").forEach(header => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.8
        });
      });

      // 3. Service Cards Stagger Animation (On Scroll)
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 75%",
          // markers: true // Uncomment for debugging scroll positions
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });

      // 4. Stats Counter Animation (Scaling In)
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 90%",
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
      });

    }, mainRef); // <-- Scope the animations to the main component

    return () => ctx.revert(); // <-- Automatic cleanup on unmount
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if(element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div ref={mainRef} className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <HeartPulse size={24} />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">MMC<span className="text-blue-600">Pharma</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['Home', 'About', 'Products', 'Research'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  {item}
                </button>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30">
                Partner With Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Home', 'About', 'Products', 'Research'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="block w-full text-left py-3 text-slate-600 font-medium border-b border-slate-50">
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Shapes for modern feel */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-50 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="hero-text inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
                <span>Leading the Future of Healthcare</span>
              </div>
              
              <h1 className="hero-text text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Innovating for a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  Healthier Tomorrow
                </span>
              </h1>
              
              <p className="hero-text text-lg text-slate-600 max-w-lg leading-relaxed">
                MMC Pharmaceuticals is dedicated to discovering and delivering transformative therapies. We combine cutting-edge science with unwavering compassion.
              </p>

              <div className="hero-text flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 group">
                  Explore Products
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all hover:border-slate-300">
                  Our Research
                </button>
              </div>
            </div>

            <div className="hero-image relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/50 aspect-square lg:aspect-auto lg:h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000" 
                  alt="Scientist in Lab" 
                  className="object-cover w-full h-full"
                />
                {/* Floating Badge - Micro-interaction element */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 max-w-xs hidden sm:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-2 rounded-full text-green-600"><ShieldCheck size={20}/></div>
                    <span className="font-bold text-slate-900">FDA Approved</span>
                  </div>
                  <p className="text-xs text-slate-500">Meeting the highest global standards for safety and efficacy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="stats-section bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years of Experience", value: "25+" },
              { label: "Countries Served", value: "50+" },
              { label: "Research Centers", value: "12" },
              { label: "Lives Impacted", value: "10M+" }
            ].map((stat, index) => (
              <div key={index} className="stat-item p-4 border border-slate-800 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-colors">
                <h3 className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">{stat.value}</h3>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Services/Areas of Focus --- */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 section-header">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Therapeutic Areas of Focus</h3>
            <p className="text-slate-600">We concentrate our research and development efforts on areas with high unmet medical needs.</p>
          </div>

          <div className="services-grid grid md:grid-cols-3 gap-8">
            {[
              { title: "Oncology", icon: <Microscope size={32}/>, desc: "Pioneering treatments to fight cancer and improve patient survival rates.", color: "bg-rose-50 text-rose-600" },
              { title: "Cardiology", icon: <HeartPulse size={32}/>, desc: "Innovative solutions for heart health and cardiovascular disease management.", color: "bg-blue-50 text-blue-600" },
              { title: "Neurology", icon: <Beaker size={32}/>, desc: "Advancing neuroscience to treat disorders of the brain and nervous system.", color: "bg-teal-50 text-teal-600" },
            ].map((service, idx) => (
              <div key={idx} className="service-card group p-8 rounded-3xl border border-slate-100 hover:border-blue-100 bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Global Presence/About --- */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-header order-2 lg:order-1">
               <img 
                  src="https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=1000" 
                  alt="Global Logistics" 
                  className="rounded-3xl shadow-xl"
                />
            </div>
            <div className="section-header order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-2 text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                <Globe size={14} />
                <span>Global Reach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Delivering Health <br/>Across Borders
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                MMC Pharmaceuticals operates a robust global supply chain ensuring that essential medicines reach patients in need, regardless of geography. Our state-of-the-art manufacturing facilities adhere to strict GMP guidelines.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "ISO 9001:2015 Certified Facilities",
                  "24/7 Global Supply Chain Monitoring",
                  "Sustainable & Eco-friendly Packaging"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <ShieldCheck size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact / CTA --- */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 section-header">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Innovate?</h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Whether you are looking for partnership opportunities or need information about our products, our team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Mail size={20} />
              Contact Support
            </button>
            <button className="bg-transparent border border-blue-400 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
              <Phone size={20} />
              +1 (800) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
             <div className="flex items-center space-x-2 text-white mb-4">
                <HeartPulse size={24} className="text-blue-500" />
                <span className="text-xl font-bold">MMC<span className="text-blue-500">Pharma</span></span>
              </div>
              <p className="text-sm">Innovating for life. Dedicated to global health and wellness through science.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Therapy Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Oncology</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Cardiology</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Neurology</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Immunology</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-900 text-center text-xs">
          &copy; {new Date().getFullYear()} MMC Pharmaceuticals. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default Demo;