import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import kidkartzLogo from '../assets/kidkartz-logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Orders", path: "/orders" },
        { name: "Profile", path: "/profile" },
    ];

    return (
        <nav className="bg-[#FFF2EB] shadow-sm sticky top-0 z-50">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center h-20 w-full">

                    {/* Logo - Left aligned with fixed size */}
                    <div className="h-[80px] w-[200px] overflow-hidden flex items-center">
                        <Link to="/" className="block">
                            <img
                                src={kidkartzLogo}
                                alt="Kidkartz"
                                className="scale-[2] object-contain"
                                style={{ transformOrigin: 'center' }}
                            />


                        </Link>
                    </div>

                    {/* Desktop Navigation - Right aligned */}
                    <div className="hidden md:flex items-center justify-end flex-1 space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${location.pathname === link.path
                                    ? 'bg-[#FFD6BA] text-gray-900'
                                    : 'text-gray-600 hover:bg-[#FFD6BA] hover:text-gray-900'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Right aligned */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-600 hover:bg-[#FFD6BA] focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#FFF2EB] shadow-lg">
                    <div className="px-2 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                    ? 'bg-[#FFD6BA] text-gray-900'
                                    : 'text-gray-600 hover:bg-[#FFD6BA] hover:text-gray-900'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;