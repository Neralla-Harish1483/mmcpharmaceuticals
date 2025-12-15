import { AboutusData } from "../../../data/aboutusData"

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-red-600 to-purple-600 text-white py-16 px-4 md:px-8 rounded-b-3xl shadow-lg">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        About MMC Pharmaceuticals
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Leading the future of healthcare with innovation and excellence
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-16">
                {/* Company Profile */}
                <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all hover:shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                            Company Profile
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="lg:w-1/3">
                            <div className="overflow-hidden rounded-xl shadow-lg">
                                <img 
                                    src={AboutusData.profile.image} 
                                    alt="MMC Pharmaceuticals Profile"
                                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {AboutusData.profile.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* What We Do */}
                <section className="bg-red-600 text-white rounded-2xl shadow-xl p-8 md:p-10">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            What We Do
                        </h2>
                        <div className="w-20 h-1 bg-white/80 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-5xl mb-6">🏢</div>
                            <h3 className="text-2xl font-bold mb-4">CSMO Organization</h3>
                            <p className="text-lg leading-relaxed text-white/90">
                                {AboutusData.whatwedo.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quality Commitment */}
                <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                            Quality Commitment
                        </h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="lg:w-1/2">
                            <div className="overflow-hidden rounded-xl shadow-lg">
                                <img 
                                    src={AboutusData.quality[0].image} 
                                    alt="Quality Standards"
                                    className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <ul className="space-y-4">
                                {AboutusData.quality[0].description.split('.').filter(item => item.trim()).map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center mt-1">
                                            ✓
                                        </span>
                                        <span className="text-gray-700 text-lg">
                                            {item.trim()}.
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Goals Section */}
                <section className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                            Our Foundation
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {AboutusData.goals.map((goal, index) => (
                            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-4">
                                        {goal.values ? '🤝' : goal.mission ? '🎯' : '💼'}
                                    </div>
                                    <div className="h-48 overflow-hidden rounded-lg mb-4">
                                        <img 
                                            src={Object.values(goal)[1]} 
                                            alt={Object.keys(goal)[0]}
                                            className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {goal.values ? 'Values' : goal.mission ? 'Mission' : 'Culture'}
                                    </h3>
                                    <p className="text-gray-600 italic">
                                        {goal.values || goal.mission || goal.culture}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Awards Section */}
                <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl p-6 md:p-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Awards & Recognition
                        </h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
                        <p className="text-gray-300 mt-4">Celebrating excellence and achievements</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {AboutusData.awards.map((award, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                                    <img 
                                        src={award.image} 
                                        alt={award.name}
                                        className="w-full h-full object-contain p-2"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{award.name}</h3>
                                    <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                                        {award.year}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer Note */}
                <div className="text-center py-8">
                    <p className="text-gray-500 italic">
                        "Honest & Fair to All in All Transactions"
                    </p>
                    <p className="text-gray-400 mt-2">
                        Since 1987 • Excellence in Pharmaceuticals
                    </p>
                </div>
            </div>
        </div>
    )
}