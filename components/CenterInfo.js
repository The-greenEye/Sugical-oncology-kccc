function CenterInfo() {
    return (
        <section id="infoSection" className="bg-white px-4 md:px-8 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in" style={{animationDelay: '0.5s'}} data-name="center-info" data-file="components/CenterInfo.js">
            <div className="order-2 lg:order-1 relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-gray-100 shadow-lg group cursor-pointer">
                <img src={IMAGES.map} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded-md text-xs font-bold shadow-md z-10">Kuwait City</div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="icon-map-pin text-[var(--primary-red)] text-5xl fill-current animate-bounce drop-shadow-lg"></div>
                </div>
                 
                <div className="absolute bottom-2 right-4 text-[10px] bg-white/70 px-2 py-0.5 rounded text-gray-800 font-medium">Map data ©2025</div>
            </div>

            <div className="order-1 lg:order-2 text-right font-cairo text-base md:text-xl leading-relaxed flex flex-col justify-center">
                <div className="mb-4">
                    <span className="text-[var(--primary-red)] font-bold text-2xl md:text-3xl block mb-4">مركز حسين مكي جمعة</span>
                    <span className="text-gray-800"> للجراحات التخصصية هو مركز رائد في منطقة الشرق الأوسط يقدم خدمات متكاملة لمرضى السرطان، ويتميز بوجود نخبة من الاستشاريين المتخصصين وأحدث التجهيزات الطبية. يسعى المركز دائماً لاستضافة المؤتمرات وورش العمل العالمية لرفع مستوى الخدمات الصحية في دولة الكويت.</span>
                </div>
            </div>
        </section>
    );
}