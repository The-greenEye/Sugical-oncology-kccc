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

    return () => observer.disconnect();
  }, []);

  const owners = [
    {
      name: 'Pro. Ayman Agha',
      title: 'Head of surgical Department',
      image: 'https://up6.cc/2025/10/176441146505061.jpeg',
      description: 'Bogenhause Hospital Munich Germany.'
    },
    {
      name: 'Pro. Ahmed Shokry',
      title: 'Cheif consultant',
      image: 'https://up6.cc/2025/10/176441146505462.jpeg',
      description: 'Dr. Surgical Oncology El-Salam Oncology Center Egypt.'
    }
  ];

  try {
    return (
      <section 
        ref={profileRef}
        className="py-20 px-6 bg-gradient-to-b from-white to-purple-50"
        data-name="owner-profile"
        data-file="components/OwnerProfile.js"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-[var(--text-primary)]">
            Organizaer 
          </h2>
          <h4 className="text-2xl font-semibold text-center mb-2 text-[var(--text-primary)]">
            Dr. Ashraf Hamed
          </h4>
            <center className="text-2xl font-semibold text-center mb-5 text-[var(--text-primary)]">consultant of surgical oncology</center>
            <center className="text-2xl font-semibold text-center mb-5 text-[red)]">Workshop Conductors</center>
          <div className="grid md:grid-cols-2 gap-12">
            {owners.map((owner, index) => (
              <div
                key={index}
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
        </div>
      </section>
    );
  } catch (error) {
    console.error('OwnerProfile component error:', error);
    return null;
  }
}
