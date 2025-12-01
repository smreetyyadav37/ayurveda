import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import Marquee from '../components/Marquee';

const API_BASE_URL = 'https://samoha-api.onrender.com/api/products';

const HomePage = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_BASE_URL);
                if (response.ok) {
                    const data = await response.json();
                    setFeaturedProducts(data.slice(0, 3));
                }
            } catch (err) {
                console.error("Failed to fetch featured products:", err);
            }
        };
        fetchProducts();
    }, []);

    const mainText = `Samoha Life science Pvt Ltd is dedicated to enriching lives by providing quality, WHO-GMP approved products to eradicate pain and sufferings. We are committed to excellence and unwavering dedication to holistic well-being.`;
    
    const linkBlock = (title, path, description) => (
        <Link to={path} className="block p-8 border border-dark/20 hover:border-accent1 transition duration-300 bg-primary shadow-sm hover:shadow-lg">
            <h2 className="text-3xl font-bold text-accent1 mb-2">{title}</h2>
            <p className="text-base text-dark/70">{description}</p>
        </Link>
    );

    return (
        <section id="home-page" className="bg-primary min-h-screen">
            <AnimatedHeaderSection
                subTitle={"Committed to Quality. Dedicated to Life."}
                title={"Samoha Life Science"}
                text={mainText}
                textColor={"text-dark"}
                animate={false} 
            />
            
            <div className="container mx-auto px-6 py-16">
                <h2 className="section-heading text-dark px-0">Quick Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {linkBlock("Our Values", "/values-mission", "Explore our foundation: Respect, Honesty, Happiness, and our commitment to WHO-GMP standards.")}
                    {linkBlock("About Us", "/about", "Read our complete story, mission, and how we strive to be your trusted solution provider.")}
                    {linkBlock("Our Team", "/team", "Meet the dedicated professionals and founders driving Samoha Life Science forward.")}
                </div>

                <div className="mt-20">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="section-heading text-dark px-0 mb-0 border-none">Featured Products</h2>
                        <Link to="/products" className="hidden md:block text-accent1 hover:text-highlight font-semibold">
                            View All Products &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map(product => (
                            <Link 
                                key={product._id} 
                                to={`/products/${product._id}`}
                                className="p-4 border border-dark/10 rounded-lg bg-white shadow-md hover:shadow-xl transition duration-300 group block"
                            >
                                <div className="w-full h-48 overflow-hidden rounded-md mb-4 flex items-center justify-center">
                                    <img 
                                        src={product.imageUrl} 
                                        alt={product.name} 
                                        className="h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-dark group-hover:text-accent1 transition">{product.name}</h3>
                                <p className="text-sm text-dark/70 my-2 h-10 overflow-hidden text-ellipsis line-clamp-2">
                                    {product.description}
                                </p>
                                <span className="text-accent1 font-semibold text-sm mt-2 inline-block">
                                    View Details &rarr;
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 md:hidden text-center">
                        <Link to="/products" className="text-accent1 hover:text-highlight font-semibold">
                            View All Products &rarr;
                        </Link>
                    </div>
                </div>
            </div>

            <Marquee items={["Quality", "Trust", "Excellence", "WHO-GMP"]} className="text-dark bg-accent1/20 border-y-2 border-accent1" reverse={true} />
        </section>
    );
};

export default HomePage;