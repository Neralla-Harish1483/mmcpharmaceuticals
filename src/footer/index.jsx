 
    import { FooterData } from "../data/footerData.jsx";
    export default function Footer() {

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 mt-40">
        
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* About MMC */}
            <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">
                {FooterData.title}
            </h3>
            <p className="text-sm leading-relaxed">
                {FooterData.description}
            </p>
            </div>

            {/* Important Links */}
            <div>
            <h3 className="text-lg font-semibold text-red-600 mb-4">
                Important Links
            </h3>
            <ul className="space-y-2 text-sm">
                {
                    FooterData.links.map((l, index) => (
                    <li key={index}>
                        <a href={l.path} className="hover:text-red-500 transition">
                        {l.name}
                        </a>
                    </li>
                    ))

                }

            </ul>
            </div>

            {/* Contact Info */}
            <div>
            <h3 className="text-lg font-semibold text-red-600 mb-4">
                Contact Us
            </h3>
            <p className="text-sm leading-relaxed mb-3">
                {FooterData.address}
            </p>

            <p className="text-sm mb-2">
                <span className="font-semibold text-white">Phone:</span><br />
                {FooterData.n1}
            </p>

            <p className="text-sm mb-2">
                <span className="font-semibold text-white">Mobile:</span><br />
                {FooterData.n2}
            </p>

            <p className="text-sm">
                <span className="font-semibold text-white">Email:</span><br />
                <a
                href="mailto:adminexe@mmcpharmaceuticals.com"
                className="hover:text-red-500"
                >
                {FooterData.email}
                </a>
            </p>
            </div>

            {/* Certifications & Social */}
            <div>
            <h3 className="text-lg font-semibold text-red-600 mb-4">
                Certifications
            </h3>
            <p className="text-sm mb-6">
                {FooterData.certificate}
            </p>

            <h3 className="text-lg font-semibold text-white mb-4">
                Social Media
            </h3>
            
              <div className="flex gap-4">
                {FooterData.icons.map((i, index) => (
                    <a
                    key={index}
                    href={i.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition"
                    >
                    {i.component}
                    </a>
                ))}
                </div>
                 
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 py-6 text-center text-sm text-gray-400">
            <p>
            © 2025 MMC Pharmaceuticals Ltd. All Rights Reserved.
            </p>
            <p className="mt-2">
            <a href="#" className="hover:text-red-500">Terms & Conditions</a>
            {" | "}
            <a href="#" className="hover:text-red-500">Privacy Policy</a>
            </p>
            <p className="mt-2">
            Developed by <span className="text-white font-medium">{FooterData.developedBy}</span>
            </p>
        </div>

        </footer>
    );
    }
