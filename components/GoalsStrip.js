function GoalsStrip() {
    const goals = [
        "تبادل الخبرات العلمية",
        "تطوير المهارات الجراحية",
        "الاطلاع على أحدث التقنيات",
        "تعزيز التعاون الدولي"
    ];

    return (
        <section className="bg-[var(--bg-gray)] py-8 px-4 md:px-8 flex flex-col md:flex-row-reverse items-start gap-4 md:gap-8 fade-in" style={{animationDelay: '0.4s'}} data-name="goals-strip" data-file="components/GoalsStrip.js">
             <div className="bg-white rounded-full pl-6 pr-2 py-2 flex items-center gap-3 shadow-sm shrink-0 self-end md:self-auto hover-lift">
                <span className="font-cairo font-bold text-[var(--primary-red)] text-base md:text-lg">أهداف الورشة</span>
                <div className="w-10 h-10 rounded-full bg-[var(--primary-red)] flex items-center justify-center">
                    <div className="icon-target text-white text-lg"></div>
                </div>
             </div>

             <div className="flex flex-col md:flex-column flex-wrap gap-4 items-end md:items-right justify-end flex-grow w-full">
                {goals.map((goal, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-end bg-white/50 px-3 py-1 rounded-lg">
                        <span className="font-cairo text-sm md:text-base text-black font-semibold text-right">{goal}</span>
                        <div className="w-6 h-6 bg-[var(--secondary-yellow)] rounded flex items-center justify-center">
                            <div className="icon-check text-black text-sm"></div>
                        </div>
                    </div>
                ))}
             </div>
        </section>
    );
}