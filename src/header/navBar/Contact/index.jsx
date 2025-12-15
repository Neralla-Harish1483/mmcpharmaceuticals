import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactUs() {
  const contactUs = {
    contact: {
      n1: "+91 44 2486 8412 / 8413 / 6348 / 6358",
      n2: "+91 90036 96444",
      n3: "+91 90804 21873",
      fax: "Fax: +91 44 2486 6378",
    },
    email: "adminexe@mmcpharmaceuticals.com",
    location:
      "MMC Pharmaceuticals Ltd, No.40,41,42, 1st Floor, Dhanalakshmi Nagar, Moulivakkam, Chennai - 600 125. WHO-GMP Certified Company.",
  };

  const mapLink = 'https://maps.app.goo.gl/RoUfiAcVMtpTCHVR7'

  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 tracking-wide">
          CONTACT US
        </h2>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-gray-600">
          We are pleased to answer all your questions about our company,
          products and business. For general medical information, contact your
          health care provider.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Phone */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 hover:border-2 border-red-600">
          <div className="flex justify-center mb-4 text-red-600">
            <PhoneIcon fontSize="large" className="animate-pulse"/>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Phone & Fax
          </h3>
          <p className="text-gray-600">{contactUs.contact.n1}</p>
          <p className="text-gray-600 mt-1">{contactUs.contact.n2}</p>
          <p className="text-gray-600 mt-1">{contactUs.contact.n3}</p>
          <p className="text-gray-500 mt-2 text-sm">
            {contactUs.contact.fax}
          </p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300
        hover:border-2 border-red-600">
          <div className="flex justify-center mb-4 text-red-600">
            <EmailIcon fontSize="large" className="animate-ping"/>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Email
          </h3>
          <a
            href={`mailto:${contactUs.email}`}
            className="text-blue-600 hover:underline"
          >
            {contactUs.email}
          </a>
        </div>

        {/* Location */}
        <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        >
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center
                        hover:-translate-y-2 transition-transform duration-300
                        hover:border-2 border-red-600 cursor-pointer">
            
            <div className="flex justify-center mb-4 text-red-600">
            <LocationOnIcon fontSize="large" className="animate-bounce" />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Office Address
            </h3>

            <p className="text-gray-600 leading-relaxed">
            {contactUs.location}
            </p>
        </div>
        </a>


      </div>
    </div>
  );
}
