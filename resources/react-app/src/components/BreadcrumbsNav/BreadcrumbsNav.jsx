import React from "react";
const BreadcrumbsNav = ({ imageSrc, text, title }) => {
    return (
        <div className="relative flex justify-center items-center">
            <img
                className="w-full object-cover h-[425px] max-md:h-56"
                src={imageSrc}
                alt={text}
            ></img>
            <div className="absolute inset-0 bg-black opacity-50 "></div>
            <p className="absolute w-full text-white text-[14rem]  max-2xl:text-[10rem] max-xl:text-[8rem] max-lg:text-[6rem] max-md:text-[2rem] font-bold opacity-10 text-center">
                VİRA GAS
            </p>
            <h1 className="text-white font-bold text-7xl max-xl:text-3xl max-md:text-2xl absolute inset-0 flex items-center justify-center">
                {title ? title : text}
            </h1>
        </div>
    );
};

export default BreadcrumbsNav;
