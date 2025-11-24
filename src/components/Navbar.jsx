import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, Moon, Sun } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center gap-2 text-primary font-serif text-2xl font-bold">
                            <Coffee className="h-8 w-8" />
                            <span>Urban Greens</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors ${scrolled ? 'text-dark dark:text-white' : 'text-white'} hover:text-primary`}
                            >
                                {link.name}
                            </a>
                        ))}

                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`p-2 rounded-full transition-colors ${scrolled ? 'text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/10'}`}
                        >
                            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>

                        <a
                            href="#menu"
                            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Order Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`p-2 rounded-full transition-colors ${scrolled ? 'text-dark dark:text-white' : 'text-white'}`}
                        >
                            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${scrolled ? 'text-dark dark:text-white' : 'text-white'} hover:text-primary focus:outline-none`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-dark absolute w-full shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-dark dark:text-white hover:text-primary font-medium text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#menu"
                            className="mt-4 bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all w-3/4 text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Order Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
