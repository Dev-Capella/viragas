import React, { useState } from "react";
import "../../../../../node_modules/flag-icons/css/flag-icons.min.css";

const OurDealersComponent = () => {
    const europeCountry = [
        { code: "de", name: "Almanya" },
        { code: "be", name: "Belçika" },
        { code: "si", name: "Slovenya" },
        { code: "fr", name: "Fransa" },
        { code: "it", name: "İtalya" },
        { code: "pt", name: "Portekiz" },
        { code: "cz", name: "Çek Cumhuriyeti" },
        { code: "at", name: "Avusturya" },
        { code: "dk", name: "Danimarka" },
        { code: "sk", name: "Slovakya" },
        { code: "hu", name: "Macaristan" },
        { code: "no", name: "Norveç" },
        { code: "gb", name: "Birleşik Krallık" },
        { code: "ro", name: "Romanya" },
        // Diğer ülkeler buraya eklenebilir
    ];

    const worldCountry = [
        { code: "ar", name: "Arjantin" },
        { code: "cn", name: "Çin" },
        { code: "in", name: "Hindistan" },
        { code: "jp", name: "Japonya" },
        { code: "sg", name: "Singapur" },
        { code: "tr", name: "Türkiye" },
        { code: "tw", name: "Tayvan" },
        { code: "br", name: "Brezilya" },
        { code: "us", name: "Amerika" },
        { code: "ir", name: "İran" },
        { code: "mx", name: "Meksika" },
        { code: "za", name: "Güney Afrika" },
        { code: "kr", name: "Kore" },
    ];

    const [hoveredCountry, setHoveredCountry] = useState(null);

    return (
        <div className="flex flex-col container mx-auto pt-12 w-full">
            <span className="text-5xl pl-2">Avrupada</span>
            <div className="flag-container flex flex-row flex-wrap mb-16 w-full ">
                {europeCountry.map(({ code, name }) => (
                    <div
                        key={code}
                        className="flex flex-col items-center m-2 relative transition-opacity duration-300"
                        onMouseEnter={() => setHoveredCountry(name)}
                        onMouseLeave={() => setHoveredCountry(null)}
                    >
                        <span
                            className={`fi fi-${code} w-44 h-32 object-contain cursor-pointer`}
                        ></span>
                        {hoveredCountry === name && (
                            <div className="overlay absolute bottom-0  left-0 w-full h-full bg-black bg-opacity-50 text-white py-2 text-center transition-all duration-300">
                                <span> {name} </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <span className="text-5xl pl-2 ">Dünyada</span>
            <div className="flag-container flex flex-row flex-wrap">
                {worldCountry.map(({ code, name }) => (
                    <div key={code} className="flex flex-col items-center m-2">
                        <span
                            className={`fi fi-${code} w-44 h-36 object-contain cursor-pointer`}
                        ></span>
                        <span className="text-lg">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurDealersComponent;
