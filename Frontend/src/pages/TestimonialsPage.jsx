import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Marquee from '../components/Marquee';

const testimonials = [
    { quote: "Samoha products have significantly improved our patients' recovery times. The quality is unmatched.", client: "Dr. Sandeep K., Physician" },
    { quote: "A truly trusted partner. Their commitment to WHO-GMP standards gives us great confidence.", client: "Priya M., Pharmacy Owner" },
    { quote: "Effective solutions and ethical business practices. Highly recommended for quality pharmaceuticals.", client: "Mr. Anil V., Distributor" },
];

const TestimonialsPage = () => {
    return (
        <section className="bg-primary min-h-screen pt-12 pb-20">
            <div className="container mx-auto px-6 mb-10 pt-10">
                <Link to="/" className="inline-flex items-center text-dark/60 hover:text-accent1 transition duration-300 mb-4">
                    <Icon icon="lucide:arrow-left" className="mr-2" /> Back to Home
                </Link>
                <h1 className="text-4xl font-bold text-dark mb-2">Testimonials</h1>
                <p className="text-lg text-dark/70 max-w-2xl">
                    Hear from our partners, practitioners, and customers about the impact of Samoha Life Science.
                </p>
            </div>
            
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-dark/5 flex flex-col">
                            <div className="text-accent1 mb-4">
                                <Icon icon="lucide:quote" className="size-10 opacity-20" />
                            </div>
                            <p className="text-lg text-dark/80 leading-relaxed italic mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-auto pt-6 border-t border-dark/5">
                                <div className="w-10 h-10 bg-accent3/20 rounded-full flex items-center justify-center text-accent3 font-bold mr-3">
                                    {testimonial.client.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-dark text-sm">{testimonial.client.split(',')[0]}</p>
                                    <p className="text-xs text-dark/50 uppercase tracking-wide">{testimonial.client.split(',')[1]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-dark/5 py-8">
                    <Marquee 
                        items={["Trusted", "Reliable", "Quality", "Ethical", "Excellence"]} 
                        className="text-dark bg-white" 
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsPage;