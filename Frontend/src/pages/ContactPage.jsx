import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { socials } from '../constants';
import { Icon } from '@iconify/react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'; 

const API_CONTACT_URL = 'https://samoha-api.onrender.com'; 

const ContactPage = () => {
    const location = useLocation();
    const productName = location.state?.productName;

    const [formData, setFormData] = useState({ name: '', email: '', subject: '' });
    const [message, setMessage] = useState(''); 
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (productName) {
            setMessage(`Dear Samoha Team,\n\nI would like to inquire about the product "${productName}".\n\nPlease share details regarding pricing and distribution availability.\n\nThank you.`);
        }
    }, [productName]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setStatus('Sending inquiry...');

        const fullData = { ...formData, message: message }; 

        try {
            const response = await fetch(API_CONTACT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fullData),
            });

            if (response.ok) {
                setStatus('✅ Inquiry sent successfully! We will contact you at your provided email.');
                setFormData({ name: '', email: '', subject: '' }); 
                setMessage(''); 
            } else {
                const errorData = await response.json();
                setStatus(`❌ Failed: ${errorData.message || 'Server error occurred.'}`);
            }
        } catch (error) {
            setStatus('❌ Network error. Please ensure the backend server is running.');
        }
    };

    return (
        <section className="bg-primary min-h-screen pb-20">
            <AnimatedHeaderSection
                subTitle={"GET IN TOUCH WITH SAMOHA"}
                title={"Contact Us"}
                text={"We'd love to hear from you and discuss how Samoha Life Science can be your trusted partner."}
                textColor={"text-dark"}
            />

            <div className="container mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">

                <div className="p-8 lg:p-10 bg-white rounded-2xl shadow-xl border border-dark/5">
                    <h2 className="text-2xl font-bold text-accent1 mb-6">
                        {productName ? `Inquiry: ${productName}` : 'Send Us a Message'}
                    </h2>
                    
                    <form className="space-y-5" onSubmit={handleSubmit}> 
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-dark/60">Your Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-3 bg-gray-50 border border-dark/10 rounded-lg focus:border-accent1 focus:ring-1 focus:ring-accent1 outline-none transition" required />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-dark/60">Your Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 bg-gray-50 border border-dark/10 rounded-lg focus:border-accent1 focus:ring-1 focus:ring-accent1 outline-none transition" required />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-dark/60">Subject</label>
                            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full p-3 bg-gray-50 border border-dark/10 rounded-lg focus:border-accent1 focus:ring-1 focus:ring-accent1 outline-none transition" required />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-dark/60">Message</label>
                            <textarea 
                                name="message" 
                                rows="6" 
                                className="w-full p-3 bg-gray-50 border border-dark/10 rounded-lg focus:border-accent1 focus:ring-1 focus:ring-accent1 outline-none transition resize-none" 
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="w-full bg-accent1 text-primary py-4 rounded-lg font-bold hover:bg-accent3 transition duration-300 shadow-md flex justify-center items-center">
                            Submit Inquiry <Icon icon="lucide:send" className="ml-2" />
                        </button>
                    </form>

                    {status && <p className={`mt-4 text-center font-semibold ${status.startsWith('✅') ? 'text-accent1' : 'text-red-600'}`}>{status}</p>}

                </div>

                <div className="p-8 lg:p-10 bg-accent3/10 rounded-2xl shadow-lg border border-accent3/20 h-fit">
                    <h2 className="text-2xl font-bold text-dark mb-8">Contact Information</h2>
                    
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="bg-white p-3 rounded-lg shadow-sm text-accent1 mr-4">
                                <Icon icon="lucide:mail" className="size-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dark">Email Us</h3>
                                <p className="text-dark/70">Samohalifescience@gmail.com</p>
                                <p className="text-dark/70">info@mysamoha.com</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="bg-white p-3 rounded-lg shadow-sm text-accent1 mr-4">
                                <Icon icon="lucide:phone" className="size-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dark">Call Us</h3>
                                <p className="text-dark/70">+91-8000080000</p>
                                <p className="text-sm text-dark/50 mt-1">Mon-Sat, 9am - 6pm</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="bg-white p-3 rounded-lg shadow-sm text-accent1 mr-4">
                                <Icon icon="lucide:map-pin" className="size-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dark">Head Office</h3>
                                <p className="text-dark/70">Samoha Life Science Pvt Ltd,</p>
                                <p className="text-dark/70">New Delhi</p>
                            </div>
                        </div>
                        
                        <div className="pt-8 border-t border-dark/10">
                            <h3 className="text-lg font-bold text-dark mb-4">Connect With Us</h3>
                            <p className="text-dark/70">Social Channels coming soon...</p>
                            <div className="flex gap-4">
                                {socials.map((social, index) => (
                                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" 
                                       className="bg-white p-3 rounded-full text-accent1 shadow-sm hover:bg-accent1 hover:text-white transition duration-300">
                                        {social.name === "Instagram" && <Icon icon="lucide:instagram" className="size-5" />}
                                        {social.name === "Youtube" && <Icon icon="lucide:youtube" className="size-5" />}
                                        {social.name === "LinkedIn" && <Icon icon="lucide:linkedin" className="size-5" />}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;