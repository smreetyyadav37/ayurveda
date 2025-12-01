import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'; 

const TeamPage = () => {
    return (
        <section className="bg-primary min-h-screen pb-20">
            <AnimatedHeaderSection
                subTitle={"Our Strength, Our People"}
                title={"The Samoha Team"}
                text={"Meet the dedicated professionals and visionary leaders committed to our mission."}
                textColor={"text-dark"}
            />
            
            <div className="container mx-auto px-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                </div>
                
                <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold text-dark/70 mb-4">
                        The dedicated team behind Samoha will be revealed soon!
                    </h3>
                    <div className="w-1/3 h-px bg-dark/10 mx-auto" />
                </div>
                
                <div className="mt-16 text-center">
                    <div className="bg-accent3/10 rounded-2xl p-10 max-w-4xl mx-auto border border-accent3/20">
                        <h3 className="text-2xl font-bold text-dark mb-2">Join Our Mission</h3>
                        <p className="text-dark/70 mb-6">We are always looking for passionate individuals who embody our core values.</p>
                        <Link to="/contact" className="inline-block bg-accent1 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent3 transition">
                            Contact Us for Careers
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamPage;