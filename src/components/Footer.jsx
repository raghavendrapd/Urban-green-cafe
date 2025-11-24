import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 text-white font-serif text-2xl font-bold mb-4">
                            <Coffee className="h-8 w-8 text-secondary" />
                            <span>Urban Greens</span>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Sustainable coffee, fresh food, and a community-focused atmosphere in the heart of the city.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
                            <li><a href="#menu" className="hover:text-secondary transition-colors">Menu</a></li>
                            <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Kammanahalli, Kalyan Nagar </li>
                            <li>Bangalore</li>
                            <li>+91 7019192196 </li>
                            <li>nitaixlabs@gmail.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-dark transition-all">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-dark transition-all">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-dark transition-all">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Urban Greens Cafe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
