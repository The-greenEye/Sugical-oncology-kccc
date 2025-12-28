function WorkshopGIT() {
    return (
        <section className="bg-white p-4 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-12 fade-in" style={{animationDelay: '0.2s'}} data-name="workshop-git" data-file="components/WorkshopGIT.js">
            {/* Left Column: Info & Speakers */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div>
                    <h3 className="text-[var(--primary-red)] font-bold text-lg md:text-2xl uppercase leading-tight">
                        THE 14TH GIT CANCER SURGERY WORKSHOP
                    </h3>
                    <p className="text-orange-500 font-bold text-sm md:text-lg mt-2">1-5 February 2026</p>
                </div>
                
                {/* Speakers Pill */}
                <div className="flex items-center justify-center lg:justify-start w-full my-2 animate-pulse-slow">
                    <div className="bg-[var(--secondary-yellow)] h-10 w-20 rounded-l-full flex items-center justify-center">
                        <div className="icon-volume-2 text-white text-xl"></div>
                    </div>
                    <div className="bg-gray-100 border border-gray-200 h-10 w-40 rounded-r-full flex items-center justify-center">
                        <span className="font-bold text-base text-black">Speakers</span>
                    </div>
                </div>
                
                {/* Speakers Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                    {/* Speaker 1 */}
                    <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover-lift cursor-pointer group">
                        <div className="flex gap-1 mb-2">
                            <div className="w-6 h-6 rounded-full bg-black overflow-hidden flex flex-col shadow-sm">
                                <div className="h-1/3 bg-black"></div>
                                <div className="h-1/3 bg-red-600"></div>
                                <div className="h-1/3 bg-yellow-400"></div>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-md mb-2 h-32 md:h-48">
                            <img src={IMAGES.speaker1} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" />
                        </div>
                        <p className="text-xs md:text-sm font-bold truncate">Prof.ayman Agha</p>
                    </div>
                    
                     {/* Speaker 2 */}
                     <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover-lift cursor-pointer group">
                        <div className="flex gap-1 mb-2">
                            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 overflow-hidden flex flex-col shadow-sm">
                                <div className="h-1/3 bg-red-600"></div>
                                <div className="h-1/3 bg-white"></div>
                                <div className="h-1/3 bg-black"></div>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-md mb-2 h-32 md:h-48">
                             <img src={IMAGES.speaker2} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" />
                        </div>
                        <p className="text-xs md:text-sm font-bold truncate">Prof.Ahmd Shokry</p>
                    </div>
                </div>
            </div>

            {/* Right Column: Poster */}
            <div className="w-full lg:w-1/2">
                <div className="h-full w-full min-h-[300px] bg-gray-50 border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col hover-lift relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full opacity-50 transition-transform group-hover:scale-150 duration-700"></div>
                    
                    <div className="flex justify-between mb-4">
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    </div>
                    
                    <h4 className="text-[var(--primary-red)] font-bold text-xl md:text-2xl leading-tight mb-2">
                        The 14th GIT Cancer Surgery Workshop
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 mb-4">Detailed workshop information poster preview. Includes comprehensive schedule, workshop objectives, and registration details.</p>
                    
                    <div className="flex gap-2 mt-auto justify-center">
                      <img src="https://up6.cc/2025/10/176648465118811.jpg" alt="poster" className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md border border-gray-200"/>
                    </div>
                    
                    <div className="mt-4 flex gap-2 justify-center opacity-50">
                         <div className="w-12 h-3 bg-gray-300 rounded"></div>
                         <div className="w-12 h-3 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}