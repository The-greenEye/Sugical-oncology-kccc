function DoctorStrip() {
    return (
        <section className="bg-white p-4 md:p-8 fade-in" style={{animationDelay: '0.1s'}} data-name="doctor-strip" data-file="components/DoctorStrip.js">
            <div className="flex items-center gap-6 md:gap-8 max-w-4xl mx-auto">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-[var(--secondary-yellow)] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105">
                    <div className="icon-user text-white text-4xl md:text-6xl"></div>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-black">Dr. Khalid Hilal</h2>
                    <p className="text-sm md:text-xl text-gray-800 font-medium mt-1 md:mt-2">Head of surgical oncology department</p>
                </div>
            </div>
        </section>
    );
}