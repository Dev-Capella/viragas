import React, { useState } from "react";
import worldmap from "../../assets/OurDealers/worldmap.png";
import deu from "../../assets/OurDealers/germany.jpeg";
import bel from "../../assets/OurDealers/belgium.jpg";
import fra from "../../assets/OurDealers/france.jpg";
import ita from "../../assets/OurDealers/italy.jpg";
import prt from "../../assets/OurDealers/portugal.jpeg";
import cze from "../../assets/OurDealers/Czech.jpg";
import aut from "../../assets/OurDealers/austria.jpg";
import dnk from "../../assets/OurDealers/denmark.jpg";
import svn from "../../assets/OurDealers/slovenia.jpg";
import svk from "../../assets/OurDealers/Slovak.jpg";
import hun from "../../assets/OurDealers/hungary.png";
import nor from "../../assets/OurDealers/norveç.jpg";
import gbr from "../../assets/OurDealers/unitedkingdom.jpg";
import rou from "../../assets/OurDealers/romania.png";
import arg from "../../assets/OurDealers/argentina.jpg";
import chn from "../../assets/OurDealers/china.jpg";
import ind from "../../assets/OurDealers/hindistan.jpg";
import jpn from "../../assets/OurDealers/japan.jpg";
import sgp from "../../assets/OurDealers/singapore.jpg";
import tur from "../../assets/OurDealers/turkey.jpg";
import twn from "../../assets/OurDealers/taiwan.jpg";
import bra from "../../assets/OurDealers/brazil.jpg";
import usa from "../../assets/OurDealers/unitedstates.jpg";
import irn from "../../assets/OurDealers/iran.jpg";
import zaf from "../../assets/OurDealers/southafrica.jpg";
import mex from "../../assets/OurDealers/mexico.jpg";
import kor from "../../assets/OurDealers/korea.jpg";
import locationPlaceholder from "../../assets/OurDealers/placeholderLocation.png";

const OurDealersComponent = () => {
    const locations = [
        {
            id: "deu",
            name: "Germany",
            top: "15%",
            left: "50%",
            img: deu,
        },
        { id: "bel", name: "Belgium", top: "19%", left: "46%", img: bel },
        { id: "fra", name: "France", top: "22%", left: "44%", img: fra },
        { id: "ita", name: "Italy", top: "27%", left: "52%", img: ita },
        { id: "prt", name: "Portugal", top: "24%", left: "42%", img: prt },
        {
            id: "cze",
            name: "Czech Republic",
            top: "18%",
            left: "52%",
            img: cze,
        },
        { id: "aut", name: "Austria", top: "21%", left: "51%", img: aut },
        { id: "dnk", name: "Denmark", top: "9%", left: "47%", img: dnk },
        { id: "svn", name: "Slovenia", top: "24%", left: "54%", img: svn },
        {
            id: "svk",
            name: "Slovak Republic",
            top: "20%",
            left: "54%",
            img: svk,
        },
        { id: "hun", name: "Hungary", top: "21%", left: "55%", img: hun },
        { id: "nor", name: "Norway", top: "6%", left: "48%", img: nor },
        {
            id: "gbr",
            name: "United Kingdom",
            top: "14%",
            left: "44%",
            img: gbr,
        },
        { id: "rou", name: "Romania", top: "24%", left: "57%", img: rou },
        { id: "arg", name: "Argentina", top: "80%", left: "27%", img: arg },
        { id: "chn", name: "China", top: "36%", left: "75%", img: chn },
        { id: "ind", name: "India", top: "42%", left: "69%", img: ind },
        { id: "jpn", name: "Japan", top: "27%", left: "86%", img: jpn },
        { id: "sgp", name: "Singapore", top: "51%", left: "77%", img: sgp },
        { id: "tur", name: "Turkey", top: "31%", left: "60%", img: tur },
        { id: "twn", name: "Taiwan", top: "43%", left: "84%", img: twn },
        { id: "bra", name: "Brazil", top: "60%", left: "30%", img: bra },
        { id: "usa", name: "United States", top: "24%", left: "18%", img: usa },
        { id: "irn", name: "Iran", top: "39%", left: "63%", img: irn },
        { id: "mex", name: "Mexico", top: "40%", left: "13%", img: mex },
        { id: "zaf", name: "South Africa", top: "42%", left: "49%", img: zaf },
        { id: "kor", name: "Korea", top: "27%", left: "83%", img: kor },
        // Diğer noktalar burada...
    ];

    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
    };

    const closeModal = () => {
        setSelectedLocation(null);
    };

    return (
        <div className="bg-[#303849]">
            <div className=" relative w-full h-full">
                <img
                    src={worldmap}
                    alt="WorldMap"
                    className="object-contain w-full h-full"
                />
                {locations.map((location) => (
                    <img
                        src={locationPlaceholder}
                        alt={locationPlaceholder}
                        key={location.id}
                        className="absolute rounded-full w-[3%]  cursor-pointer hover:-translate-y-2 transform transition-transform duration-500"
                        style={{ top: location.top, left: location.left }}
                        onClick={() => handleLocationClick(location)}
                    />
                ))}
                {selectedLocation && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                        <div className="bg-white  rounded flex flex-row w-3/12 ">
                            <div className="w-80 h-48">
                                <img
                                    src={selectedLocation.img}
                                    alt="Location"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-lg font-bold flex items-center justify-center w-full">
                                {selectedLocation.name}
                            </h2>

                            <button
                                onClick={closeModal}
                                className="flex items-start justify-items-start h-8 pt-4 pr-4"
                            >
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurDealersComponent;
