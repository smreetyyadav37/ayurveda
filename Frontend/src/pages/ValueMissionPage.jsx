import React from 'react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'; 
import { servicesData } from '../constants';

const ValuesMissionPage = () => {
    return (
        <section className="bg-primary min-h-screen pb-20">
            <AnimatedHeaderSection
                subTitle={"Our Core Principles"}
                title={"Values & Mission"}
                text={"The foundation of our business is built on Respect, Honesty, and Happiness."}
                textColor={"text-dark"}
            />
            
            <div className="container mx-auto px-6 mt-10">
                <div className="grid gap-8">
                    {servicesData.map((section, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg border border-dark/5 p-8 lg:p-10">
                            <h2 className="text-3xl font-bold text-accent1 mb-4">{section.title}</h2>
                            <p className="text-lg text-dark/70 mb-8 max-w-3xl">{section.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="p-6 bg-primary/20 rounded-xl border border-dark/5 hover:border-accent1/30 transition duration-300">
                                        <div className="flex items-center mb-3">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent1 text-white text-sm font-bold mr-3">
                                                {itemIndex + 1}
                                            </span>
                                            <h3 className="text-xl font-semibold text-dark">{item.title}</h3>
                                        </div>
                                        <p className="text-dark/60 leading-relaxed pl-11">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesMissionPage;