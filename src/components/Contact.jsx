import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info & Form */}
                    <div>
                        <h2 className="text-primary font-bold tracking-wide uppercase mb-2">Contact Us</h2>
                        <h3 className="text-4xl font-serif font-bold text-dark dark:text-white mb-8">Get in Touch</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="bg-light dark:bg-zinc-800 p-3 rounded-full text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white mb-1">Visit Us</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Kalyan Nagar,<br />Bangalore </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-light dark:bg-zinc-800 p-3 rounded-full text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white mb-1">Call Us</h4>
                                    <p className="text-gray-600 dark:text-gray-400">+91 7019192196</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-light dark:bg-zinc-800 p-3 rounded-full text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white mb-1">Email Us</h4>
                                    <p className="text-gray-600 dark:text-gray-400">nitaixlabs@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-light dark:bg-zinc-800 p-3 rounded-full text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark dark:text-white mb-1">Open Daily</h4>
                                    <p className="text-gray-600 dark:text-gray-400">7am - 8pm</p>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-dark dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-dark dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-dark dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                            <textarea
                                rows="4"
                                placeholder="Message"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-dark dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-full sm:w-auto"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
