import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'; 

const API_BASE_URL = 'https://samoha-api.onrender.com/api/products';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_BASE_URL);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <div className="min-h-screen flex items-center justify-center text-xl text-accent1">Loading Catalog...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">{error}</div>;

    return (
        <section className="bg-primary min-h-screen pb-20">
            <AnimatedHeaderSection
                subTitle={"WHO-GMP Certified Quality"}
                title={"Our Products"}
                text={"Explore our range of WHO-GMP approved pharmaceutical formulations designed for holistic well-being."}
                textColor={"text-dark"}
            />
            
            <div className="container mx-auto px-6 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => ( 
                        <Link 
                            key={product._id} 
                            to={`/products/${product._id}`} 
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-dark/5 group flex flex-col"
                        >
                            <div className="relative w-full h-56 bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
                                <img
                                    src={product.imageUrl} 
                                    alt={product.name}
                                    className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-accent1 uppercase tracking-wider bg-accent1/10 px-2 py-1 rounded-md">
                                        {product.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-accent1 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-dark/60 mb-4 line-clamp-2 flex-grow">
                                    {product.description}
                                </p>

                                <div className="pt-4 border-t border-dark/10 flex items-center justify-between mt-auto"> 
                                    <span className="text-lg font-bold text-dark">₹{product.price.toFixed(2)}</span> 
                                    <span className="text-accent1 font-semibold text-sm flex items-center">
                                        Details <Icon icon="lucide:arrow-right" className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {products.length === 0 && <p className="text-center text-dark/70 text-xl">No products found in the catalog.</p>}
            </div>
        </section>
    );
};

export default ProductsPage;