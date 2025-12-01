import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const API_BASE_URL = 'https://samoha-api.onrender.com/api/products';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/${id}`);
                if (!response.ok) {
                    throw new Error(`Product not found`);
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError("Product details could not be loaded.");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleInquiry = () => {
        if (product) {
            navigate('/contact', {
                state: { productName: product.name }
            });
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center text-xl text-accent1">Loading Details...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">{error}</div>;
    if (!product) return <div className="min-h-screen flex items-center justify-center text-xl">Product not found.</div>;

    const displayPrice = (product.price || 0.00).toFixed(2);

    return (
        <section className="bg-primary min-h-screen pt-12 pb-20">
            <div className="container mx-auto px-6 mb-8 pt-10">
                <Link to="/products" className="inline-flex items-center text-dark/60 hover:text-accent1 transition duration-300">
                    <Icon icon="lucide:arrow-left" className="mr-2" />
                    Back to Products
                </Link>
            </div>

            <div className="container mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-dark/5">
                    <div className="flex flex-col lg:flex-row">
                        
                        <div className="lg:w-1/2 bg-gray-50 flex items-center justify-center p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-dark/10">
                            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-full object-contain drop-shadow-lg transform hover:scale-105 transition duration-500"
                                />
                            </div>
                        </div>

                        <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 bg-accent1/10 text-accent1 text-sm font-semibold rounded-full w-fit mb-4 uppercase tracking-wider">
                                {product.category}
                            </span>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                                {product.name}
                            </h1>

                            <p className="text-lg text-dark/70 leading-relaxed mb-8">
                                {product.description}
                            </p>

                            <div className="bg-primary/30 rounded-xl p-6 mb-8">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex justify-between items-center border-b border-dark/10 pb-3">
                                        <span className="text-dark/60 font-medium">Formulation</span>
                                        <span className="text-dark font-semibold">{product.unit}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-dark/10 pb-3">
                                        <span className="text-dark/60 font-medium">Usage</span>
                                        <span className="text-dark font-semibold">
                                            {product.description.toLowerCase().includes("i.v.") ? "Clinical / Hospital Use" : "General Use"}
                                        </span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center pt-1">
                                        <span className="text-dark/60 font-medium">MRP</span>
                                        <span className="text-2xl font-bold text-accent1">₹{displayPrice}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleInquiry}
                                className="w-full bg-accent1 text-primary py-4 rounded-xl text-lg font-bold hover:bg-accent3 transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                            >
                                Inquire About This Product
                                <Icon icon="lucide:send" className="ml-3 group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <p className="mt-4 text-xs text-dark/40 text-center">
                                * Prices and availability subject to change. Contact us for bulk orders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;