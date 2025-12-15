import { useNavigate } from "react-router-dom";
import { researchPartners } from "../../../data/exploreData";
import { specializations } from "../../../data/exploreData";

export default function Explore() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
                        <span className="text-5xl">🧪</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        EXPERIENCE <span className="text-red-600">YOURSELVES</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Pioneering Research & Development through Strategic Collaborations
                    </p>
                </div>

                {/* Research Partners Section */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Our Research Partners</h2>
                        <p className="text-red-600 text-lg">Collaborating with leading scientific institutions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {researchPartners.map((partner, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-1  rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                                    <div className={`inline-flex p-4 rounded-2xl mb-6 ${partner.bgColor} text-white`}>
                                        <span className="text-4xl">{partner.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                                    <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-4">
                                        {partner.type}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{partner.description}</p>
                                    
                                    {partner.name === "V ClinBio" && (
                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <h4 className="font-semibold text-gray-800 mb-3">Clinical Research Collaboration:</h4>
                                            <p className="text-gray-600 text-sm">
                                                In collaboration with clinical investigators at the Sri Ramachandra University hospital and other hospitals, V ClinBio clinical research team can execute clinical trials (Phase I – IV) in multiple disease areas.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Specializations Section */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Key <span className="text-red-600">Specializations</span>
                        </h2>
                        <p className="text-gray-600 text-lg">Advanced research capabilities across multiple domains</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specializations.map((spec, index) => (
                            <div key={index} className="group">
                                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-200">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-2xl">{spec.icon}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{spec.title}</h3>
                                            <p className="text-gray-600">{spec.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

               

                {/* CTA Section */}
                <div className="bg-gray-900  rounded-2xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to Collaborate on Research?
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join us in advancing healthcare through innovative research partnerships and clinical studies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                            Partner With Us
                        </button>
                        <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300">
                            View Research Papers
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}