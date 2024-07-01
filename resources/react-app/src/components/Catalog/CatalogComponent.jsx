import React, { useEffect, useState } from "react";
import generalService from "../../services/generalService";
import { useNavigate } from "react-router-dom";

function CatalogComponent({ data }) {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-2">
            <div className="flex justify-start items-start flex-wrap my-5 ">
                {data?.map((item, i) => (
                    <a
                        key={i}
                        className="relative w-[19%] max-md:w-1/2 flex flex-col justify-start items-start"
                        href={item.catalog_url}
                        target="blank"
                    >
                        <div className="relative w-full h-full transition-all">
                            <img
                                className="w-full h-full p-2 cursor-pointer"
                                src={item.image}
                                alt="test"
                            />
                            <div
                                className="absolute inset-0 bg-white opacity-0 hover:opacity-70 transition-all duration-600 ease-in-out"
                                style={{
                                    clipPath:
                                        "polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%)",
                                }}
                            ></div>
                        </div>

                        <p className="text-base p-2 max-sm:text-sm font-medium cursor-pointer">
                            {item.name}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default CatalogComponent;
