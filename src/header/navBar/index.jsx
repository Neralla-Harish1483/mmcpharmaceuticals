import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", path: '/' },
    { name: "About", path: '/about' },
    { name: "Team", path: '/team' },
    { name: "ContactUs", path: '/contactus' }
  ];

  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        {/* Main container */}
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-purple-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <span className="text-white font-bold text-sm sm:text-lg">MMC</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                MMC Pharmaceuticals
              </h1>
              <span className="text-xs text-gray-500 font-medium hidden sm:block">Innovating Healthcare</span>
            </div>
          </div>

          {/* Desktop Navigation & CTA */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Navigation items */}
            <ul className="flex gap-8">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <button 
                    className="px-1 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm tracking-wide relative"
                    onClick={() => navigate(item.path)}
                  >
                    {item.name}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button and CTA */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Mobile CTA Button - Smaller */}
            <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-full text-xs font-medium hover:shadow-lg transition-all duration-200 shadow-md">
              Get Quote
            </button>
            
            {/* Hamburger Menu Button */}
            <button 
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-6 border-t border-gray-100 mt-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button 
                    className="w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium flex items-center justify-between group"
                    onClick={() => {
                      navigate(item.path);
                      setIsMenuOpen(false);
                    }}
                  >
                    <span>{item.name}</span>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Additional mobile-only contact info */}
            <div className="mt-8 px-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}