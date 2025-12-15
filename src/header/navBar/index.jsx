import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navBar = [
    {name:"Home",path:'/'}, 
    {name:"About",path:'/about'}, 
    {name:"Team",path:'/team'}, 
    {name:"ContactUs",path:'/contactus'}];

    const navigate = useNavigate()

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with modern design */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            {/* Logo background circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            {/* Logo initials */}
            <div className="relative w-12 h-12 bg-gradient-to-br from-red-600 to-purple-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <span className="text-white font-bold text-lg">MMC</span>
            </div>
          </div>
          
          {/* Company name */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              MMC Pharmaceuticals
            </h1>
            <span className="text-xs text-gray-500 font-medium">Innovating Healthcare</span>
          </div>
        </div>

        {/* Navigation items */}
        <ul className="flex gap-8">
          {navBar.map((item, index) => (
            <li key={index} className="relative group">
              <button className="px-1 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm tracking-wide relative"
              onClick={()=>{navigate(item.path)}}
              >
                {item.name}
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Active indicator (for current page) */}
                {index === 0 && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-purple-500"></div>
                )}
              </button>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg -z-10 group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
}