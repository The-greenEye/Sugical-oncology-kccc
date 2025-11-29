function Footer() {
  try {
    return (
      <footer className="bg-gradient-to-r from-purple-900 to-pink-800 text-white py-12 px-6" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="icon-heart text-3xl"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Together We Stand Strong</h3>
            <p className="text-lg text-purple-100 leading-relaxed">
              "Every journey begins with hope. Every skill learned saves a life. 
              Join us in making a difference in the fight against breast cancer."
            </p>
          </div>
          
          <div className="border-t border-purple-300 border-opacity-30 pt-8 mt-8">
            <p className="text-sm text-purple-200 mb-2">
              Designed with care and compassion
            </p>
            <p className="text-xs text-purple-300">
              © 2025 Breast Cancer Surgery Workshop. All rights reserved for Ahmed Shehata Nagy.
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