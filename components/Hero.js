function Hero() {
    const slides = [
        { image: IMAGES.hero, title: 'SURGICAL ONCOLOGY', subtitle: 'DEPARTMENT KCCC', cta: 'REGISTER NOW' },
        { image: IMAGES.hero1, title: 'OUR CLINIC', subtitle: 'WORLD CLASS CARE', cta: 'LEARN MORE' },
        { image: IMAGES.hero2, title: 'SPECIALISTS', subtitle: 'EXPERT TEAM', cta: 'CONTACT US' },
        { image: IMAGES.hero3, title: 'SURGICAL ONCOLOGY', subtitle: 'EXPERT TEAM', cta: 'CONTACT US' },
    ];

    const [index, setIndex] = React.useState(0);
    const [paused, setPaused] = React.useState(false);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (!paused) setIndex((i) => (i + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [paused]);

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex((i) => (i + 1) % slides.length);
    const goTo = (i) => setIndex(i % slides.length);

    return (
        <section className="relative w-full bg-white px-2 md:px-4 pb-2" data-name="hero" data-file="components/Hero.js">
            <div
                className="relative w-full h-64 md:h-[500px] rounded-2xl overflow-hidden focus:outline-none"
                tabIndex={0}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                onKeyDown={(e) => {
                    if (e.key === 'ArrowLeft') prev();
                    if (e.key === 'ArrowRight') next();
                }}>

                {/* Slides wrapper */}
                <div className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {slides.map((s, i) => (
                        <div key={i} className="min-w-full h-full relative">
                            <img src={s.image} alt={`${s.title} - ${s.subtitle}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 z-10 text-center md:text-left">
                                <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-full md:max-w-[70%] mb-6 md:mb-10 drop-shadow-lg">
                                    {s.title}
                                    <br />
                                    {s.subtitle}
                                </h1>

                                <div className="w-full flex justify-center md:justify-start">
                                    <a href="signIn.html" className="bg-white text-black px-6 py-2 md:px-12 md:py-3 rounded-full font-bold tracking-wider text-sm md:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                                        {s.cta}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Prev / Next controls (hidden on very small screens) */}
                <button onClick={prev} aria-label="Previous slide" className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hidden sm:inline-flex z-20 hover:bg-black/60">
                    <span className="icon-left"></span>
                </button>
                <button onClick={next} aria-label="Next slide" className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hidden sm:inline-flex z-20 hover:bg-black/60">
                    <span className="icon-right"></span>
                </button>

                {/* Dots */}
                <div className="absolute left-0 right-0 bottom-4 flex justify-center gap-2 z-20">
                    {slides.map((_, i) => (
                        <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`} className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'} focus:outline-none`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
