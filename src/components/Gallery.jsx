import React from 'react';
import { galleryImages } from '../data/mockData';
import { Instagram } from 'lucide-react';

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-light dark:bg-zinc-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Gallery</h2>
                        <h3 className="text-4xl font-serif font-bold text-dark dark:text-white">Life at Urban Greens</h3>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                        <Instagram className="h-5 w-5" />
                        Follow us on Instagram
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {galleryImages.map((img, index) => (
                        <div key={index} className={`relative overflow-hidden rounded-2xl group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                style={{ minHeight: index === 0 ? '400px' : '200px' }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
                        <Instagram className="h-5 w-5" />
                        Follow us on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
