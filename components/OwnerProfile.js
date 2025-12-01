function OwnerProfile() {
  const [isVisible, setIsVisible] = React.useState(false);
  const profileRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      try {
        observer.disconnect();
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  const marketLogos = [
    "https://up6.cc/2025/10/176450284486441.png",
    "https://up6.cc/2025/10/176450295660081.png"
  ];

  const owners = [
    {
      name: 'Prof. Ayman Agha',
      title: 'Head of Surgical Department',
      image: 'https://up6.cc/2025/10/176459621677182.jpg',
      description: 'Bogenhause Hospital Munich Germany.'
    },
    {
      name: 'Prof. Ahmed Shokry',
      title: 'Chief Consultant Surgeon',
      image: 'https://up6.cc/2025/10/1764596216731.jpg',
      description: 'Surgical oncology department El-Salam Oncology Center, Egypt'
    }
  ];

  return (
    <section 
      ref={profileRef}
      className="py-20 px-6 bg-gradient-to-b from-white to-purple-50 mt-4"
      data-name="owner-profile"
      data-file="components/OwnerProfile.js"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-3 text-white bg-[#020b27]"> 
          Dr. Khalid Hilal 
        </h2>
          <center>Head of surgical onclogoy department</center>
        <hr />
        <h2 className="text-4xl font-bold text-center mt-10 mb-4 text-[var(--text-primary)]">
          Organizer 
        </h2>
        <h4 className="text-2xl font-semibold text-center mb-2 text-[var(--text-primary)]">
          Dr. Ashraf Hamed
        </h4>
        <div className="text-2xl font-semibold text-center mb-10 text-[var(--text-primary)]">
          consultant of surgical oncology
        </div>
        <hr />
        <div className="text-2xl font-semibold text-center mb-10 mt-2" style={{ color: 'red', textShadow: '1px 1px 2px black' }}>
          Workshop conductors
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {owners.map((owner, index) => (
            <div
              key={owner.name}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={owner.image} 
                    alt={owner.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                    {owner.name}
                  </h3>
                  <p className="text-[var(--primary-color)] font-semibold mb-4">
                    {owner.title}
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {owner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market logos section - responsive: stacked on mobile, spaced on larger screens */}
        <div className="mt-8 px-6">
          <div className="max-w-6xl mx-auto flex md:flex-row items-center md:justify-between gap-4" id="Brand_Block">
            {marketLogos.map((src, i) => (

                <img
                  src={src}
                  alt={`market-logo-${i + 1}`}
                  width="150"
                  className="h-16 md:h-20 object-contain mx-auto"
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
