import React, { useState } from "react";

const ProductCard = ({ item }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
                    {item.title}
                </h2>
                <div className="w-full h-48 rounded-lg mb-4 bg-gray-200 relative overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                            imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => setImageLoaded(true)}
                    />
                    {!imageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10"></div>
                        </div>
                    )}
                </div>
                <div className="text-orange-500 flex items-center cursor-pointer transition-all duration-300 hover:text-orange-700 hover:underline">
                    <span>Detayları İncele</span>
                    <svg
                        className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
