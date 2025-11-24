import React from 'react';
import { Clock, MapPin, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-light dark:bg-zinc-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80"
                            alt="Coffee brewing"
                            className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                            alt="Cafe seating"
                            className="rounded-2xl shadow-lg w-full h-64 object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Our Story</h2>
                        <h3 className="text-4xl font-serif font-bold text-dark dark:text-white mb-6">More Than Just a Coffee Shop</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Founded in 2023, Urban Greens Cafe was born from a passion for sustainable living and exceptional coffee.
                            We partner with local farmers to bring you the freshest ingredients, ensuring every bite and sip supports our community.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-white dark:bg-zinc-800 p-3 rounded-full shadow-sm text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white">Opening Hours</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Mon-Fri: 7am - 8pm</p>
                                    <p className="text-gray-600 dark:text-gray-400">Sat-Sun: 8am - 9pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white dark:bg-zinc-800 p-3 rounded-full shadow-sm text-primary">
                                    <Award className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white">Quality First</h4>
                                    <p className="text-gray-600 dark:text-gray-400">100% Organic & Fair Trade Certified Coffee</p>
                                </div>
                            </div>
                        </div>

                        <a href="#about" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2">
                            Learn more about us &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
