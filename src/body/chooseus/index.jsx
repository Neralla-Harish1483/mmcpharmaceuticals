import { useEffect, useState } from "react";
import experience from "../../images/exp.jpg";
import emp from "../../images/emp.jpg";
import trusted from "../../images/trust.jpg";

export default function WhyChooseUs() {
  const [years, setYears] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [trust, setTrust] = useState(0);

  const animateCount = (target, setter) => {
    let start = 0;
    setter(0);

    const duration = 2000; 
    const increment = target / (duration / 30);

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setter(target);
        clearInterval(counter);

        setTimeout(() => {
          animateCount(target, setter);
        }, 5000);

      } else {
        setter(Math.floor(start));
      }
    }, 30);
  };

  useEffect(() => {
    animateCount(37, setYears);
    animateCount(500, setEmployees);
    animateCount(20000, setTrust);
  }, []);

  return (
    <div className="main flex flex-col items-center py-10 md:py-16 bg-gray-50 px-4">
      
      {/* --- Text Section --- */}
      <div className="text text-center mb-8 md:mb-10 max-w-2xl">
        <h4 className="text-gray-700 font-semibold tracking-wide text-sm md:text-base">
          WHY CHOOSE US
        </h4>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">
          Our Glorious Achievements
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
          We believe in a diverse range of personnel to bring creative skills,
          thoughts, and ideas to the table.
        </p>
      </div>

      {/* --- Boxes Section --- */}
      <div className="images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-4 w-full max-w-6xl">
        
        <div className="s1 flex flex-col items-center p-6 md:p-8 bg-white shadow-lg rounded-2xl 
        hover:shadow-2xl transition duration-300 hover:border-2 border-[#EC1D25] cursor-pointer">
          <img
            src={experience}
            alt=""
            className="w-16 h-16 md:w-20 md:h-20 mb-4 bg-gray-200 rounded-full"
          />
          <span className="text-3xl md:text-4xl font-bold text-gray-700">
            {years}+
          </span>
          <p className="text-sm md:text-lg font-medium text-gray-700 mt-2 text-center">
            Years of Experience
          </p>
        </div>

        <div className="s1 flex flex-col items-center p-6 md:p-8 bg-white shadow-lg rounded-2xl 
        hover:shadow-2xl transition duration-300 hover:border-2 border-[#EC1D25] cursor-pointer">
          <img
            src={emp}
            alt=""
            className="w-16 h-16 md:w-20 md:h-20 mb-4 bg-gray-200 rounded-full"
          />
          <span className="text-3xl md:text-4xl font-bold text-gray-700">
            {employees}+
          </span>
          <p className="text-sm md:text-lg font-medium text-gray-700 mt-2 text-center">
            Happy Employees
          </p>
        </div>

        <div className="s1 flex flex-col items-center p-6 md:p-8 bg-white shadow-lg rounded-2xl 
        hover:shadow-2xl transition duration-300 hover:border-2 border-[#EC1D25] cursor-pointer">
          <img
            src={trusted}
            alt=""
            className="w-16 h-16 md:w-20 md:h-20 mb-4 bg-gray-200 rounded-full"
          />
          <span className="text-3xl md:text-4xl font-bold text-gray-700">
            {trust}+
          </span>
          <p className="text-sm md:text-lg font-medium text-gray-700 mt-2 text-center">
            Doctors Trust
          </p>
        </div>

      </div>
    </div>
  );
}
