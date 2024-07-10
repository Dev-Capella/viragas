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
                            <div className="absolute w-full h-full top-0 left-0 hover:bg-[#343280] opacity-30 duration-300  delay-100 cursor-pointer" />
                            <img
                                className="w-full h-full p-2 cursor-pointer"
                                src={item.image}
                                alt="test"
                            />
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
