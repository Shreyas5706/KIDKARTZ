import { FaGithub, FaInstagram, FaTwitter, FaFacebook, FaRegCopyright } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import kidkartzLogo from '../assets/kidkartz-logo.png';
import { Link, useLocation } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-[#FFD6BA] text-gray-800 w-full">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        {/* Logo Section */}
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

                        {/* Writing section */}

                        <p className="text-sm mb-4">
                            Premium baby products that parents trust. Making parenting easier, one product at a time.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/" target="_blank"  className="text-gray-700 hover:text-[#FF6B6B] transition">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://www.x.com/" target="_blank"  className="text-gray-700 hover:text-[#FF6B6B] transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank"  className="text-gray-700 hover:text-[#FF6B6B] transition">
                                <FaFacebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:text-[#FF6B6B] transition">About Us</a></li>
                            <li><a href="/shop" className="hover:text-[#FF6B6B] transition">Shop All</a></li>
                            <li><a href="/blog" className="hover:text-[#FF6B6B] transition">Parenting Blog</a></li>
                            <li><a href="/faq" className="hover:text-[#FF6B6B] transition">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Customer Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/contact" className="hover:text-[#FF6B6B] transition">Contact Us</a></li>
                            <li><a href="/shipping" className="hover:text-[#FF6B6B] transition">Shipping Policy</a></li>
                            <li><a href="/returns" className="hover:text-[#FF6B6B] transition">Returns & Exchanges</a></li>
                            <li><a href="/privacy" className="hover:text-[#FF6B6B] transition">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start">
                                <MdLocationOn className="mt-1 mr-2 flex-shrink-0" />
                                <span>123 Parenting Ave, Baby City, BC 12345</span>
                            </div>
                            <div className="flex items-center">
                                <MdEmail className="mr-2" />
                                <a href="mailto:info@kidkartz.com" className="hover:text-[#FF6B6B] transition">info@kidkartz.com</a>
                            </div>
                            <div className="flex items-center">
                                <MdPhone className="mr-2" />
                                <a href="tel:+11234567890" className="hover:text-[#FF6B6B] transition">(123) 456-7890</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-[#FFC8A2] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <div className="flex items-center mb-2 md:mb-0">
                            <FaRegCopyright className="mr-1" />
                            <span>2023 KidKartz. All rights reserved.</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Shreyas5706/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#FF6B6B] transition">
                                <FaGithub className="mr-1" /> Shreyas Solanki
                            </a>
                            <a href="https://github.com/Akshat-soni13" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#FF6B6B] transition">
                                <FaGithub className="mr-1" /> Akshat Soni
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;