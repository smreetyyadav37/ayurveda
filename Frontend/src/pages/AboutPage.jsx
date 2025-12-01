import React from 'react';
import { AnimatedTextLines } from '../components/AnimatedTextLines';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'; 

const AboutPage = () => {
    const aboutText = `Our endeavour is to emerge as a trusted partner and solution provider. We are committed to enhancing lives, ensuring happiness by our quality products. We aspire to contribute to society by elevating the quality of life through our commitment to excellence and unwavering dedication to producing high-quality products.\n\nFor us, quality is the utmost important aspect, hence our products are getting manufactured in WHO-GMP approved plants. We are dedicated to crafting products that not only address medical needs but also contribute to holistic well-being.`;

    return (
        <section className="bg-primary min-h-screen pb-20">
            <AnimatedHeaderSection
                subTitle={"Our Story"}
                title={"About Samoha"}
                text={"A Commitment to Excellence and Quality of Life."}
                textColor={"text-dark"}
            />
            
            <div className="container mx-auto px-6 mt-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-dark/5 p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-2xl font-bold text-accent1 mb-6">Our Story & Vision</h2>
                            <AnimatedTextLines 
                                text={aboutText} 
                                className={"text-lg text-dark/80 leading-relaxed space-y-4"} 
                                animate={true}
                            />
                            
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="p-4 bg-primary/30 rounded-lg border border-dark/5">
                                    <h3 className="font-bold text-dark mb-1">WHO-GMP</h3>
                                    <p className="text-sm text-dark/60">Certified Manufacturing</p>
                                </div>
                                <div className="p-4 bg-primary/30 rounded-lg border border-dark/5">
                                    <h3 className="font-bold text-dark mb-1">Holistic</h3>
                                    <p className="text-sm text-dark/60">Well-being Focus</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
                                <img 
                                    src="/images/about.png" 
                                    alt="Samoha Facility"
                                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;