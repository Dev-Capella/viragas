import React from "react";

const BreadcrumbsNav = ({ imageSrc, text }) => {
    return (
        <div className="relative">
            <img
                className="w-full object-cover h-96 max-md:h-56"
                src={imageSrc}
                alt={text}
            ></img>
            <div className="absolute inset-0 bg-black opacity-30 "></div>
            <h1 className="text-white font-bold text-7xl max-xl:text-3xl max-md:text-2xl absolute inset-0 flex items-center justify-center">
                {text}
            </h1>
        </div>
    );
};

export default BreadcrumbsNav;
