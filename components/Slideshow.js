function Slideshow() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const slides = [
    'https://up6.cc/2025/10/176441507232741.jpeg',
    'https://up6.cc/2025/10/176441507235772.jpeg',
    'https://up6.cc/2025/10/176441507241693.jpg'
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  try {
    return (
      <div className="relative h-screen overflow-hidden" data-name="slideshow" data-file="components/Slideshow.js">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 24, 236, 0.4), rgba(0, 1, 82, 0.6)), url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="slide-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              New Kuwait cancer control center
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              THE 14TH GIT CANCER SURGERY WORKSHOP
              1-5 February 2026
            </p>
            <a href="signin.html" className="inline-block px-8 py-4 bg-white text-[var(--primary-color)] rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Register Now
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Slideshow component error:', error);
    return null;
  }
}