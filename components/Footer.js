function Footer() {
  try {
    return (
      <footer className="bg-gradient-to-r from-purple-900 to-pink-800 text-white py-12 px-6" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="icon-heart text-3xl"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">للإستفسار أو التسجيل</h3>
            <b>Sayed Salama </b>
            <a href="tel:+96551147478" className="text-lg underline hover:text-pink-300 transition-colors duration-300">51147478</a>
            <img src="https://up6.cc/2025/10/17645854668411.jpeg" alt="Phone Icon" width={'50'} height="50" className="inline-flex ml-2" />
          </div>
          <div className="border-t border-purple-300 border-opacity-30 pt-8 mt-8">
            <p className="text-sm text-purple-200 mb-2">
              Designed with care and compassion
            </p>
            <p className="text-xs text-purple-300">
              © 2025 All rights reserved for Ahmed Shehata nagy .
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
