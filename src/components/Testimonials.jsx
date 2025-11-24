import React from 'react';
import { testimonials } from '../data/mockData';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold tracking-wide uppercase mb-2">Testimonials</h2>
                    <h3 className="text-4xl font-serif font-bold">What Our Customers Say</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative">
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
                            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-lg mb-6 italic text-gray-100">"{testimonial.text}"</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                                />
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <span className="text-sm text-accent">Verified Customer</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
