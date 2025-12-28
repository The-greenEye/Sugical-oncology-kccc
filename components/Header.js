function Header() {

    return (
        <nav className="bg-white px-4 md:px-8 py-4 flex justify-between items-center w-full border-b border-gray-50" data-name="header" data-file="components/Header.js">
            <div className="flex items-center gap-3">
                {/* Logo 1: Abstract curved yellow and purple figure */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden">
                 <img src="https://up6.cc/2025/10/176442080306431.png" alt="logo_one" className="w-6 h-6 md:w-8 md:h-8 object-contain"/>
                </div>
                {/* Logo 2: Ministry emblem placeholder */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-green-600 flex items-center justify-center bg-white">
                 <img src="https://up6.cc/2025/10/176442080309282.png" alt="logo_one" className="w-6 h-6 md:w-8 md:h-8 object-contain"/>
                </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest text-black">
                <a href="#" className="hover:text-[var(--primary-red)] transition-colors">HOME</a>
                <a href="signIn.html" className="hover:text-[var(--primary-red)] transition-colors">SIGN IN</a>
                <a href="#infoSection" className="hover:text-[var(--primary-red)] transition-colors">ABOUT</a>
            </div>

            {/* Mobile Menu - CSS-only toggle */}
            <div className="md:hidden relative">
                <input id="mobile-menu-toggle" type="checkbox" className="peer sr-only" />
                <label htmlFor="mobile-menu-toggle" className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] cursor-pointer" aria-label="Toggle menu">
                    <span className="icon-menu text-black text-2xl peer-checked:hidden"></span>
                    <span className="icon-close text-black text-2xl hidden peer-checked:inline-block"></span>
                </label>

                <div className="absolute z-20 right-2 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hidden peer-checked:block" role="menu" aria-label="Mobile Navigation">
                    <a href="index.html" role="menuitem" className="block px-4 py-3 hover:bg-gray-50">HOME</a>
                    <a href="signIn.html" role="menuitem" className="block px-4 py-3 hover:bg-gray-50">SIGN IN</a>
                    <a href="#infoSection" role="menuitem" className="block px-4 py-3 hover:bg-gray-50">ABOUT</a>
                </div>
            </div>
        </nav>
    );
}
