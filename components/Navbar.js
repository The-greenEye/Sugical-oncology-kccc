function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  try {
    return (
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
        }`}
        data-name="navbar"
        data-file="components/Navbar.js"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="https://up6.cc/2025/10/176441769803291.png" width="70" className="icon-heart text-2xl text-[var(--primary-color)]" alt="logo" />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-[var(--primary-color)]' : 'text-white'
            }`}>
              <img src="https://up6.cc/2025/10/176442080306431.png" width="70" className="icon-heart text-2xl text-[var(--primary-color)]" alt="logo" />
            </span>
          </div>
          <div className="flex space-x-8">
            <a href="index.html" className={`transition-all duration-300 hover:text-[var(--primary-color)] ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Home
            </a>
            <a href="signin.html" className={`transition-all duration-300 hover:text-[var(--primary-color)] ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Sign In
            </a>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}
