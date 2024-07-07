import React, { useEffect, useState } from "react";

import LoadingPhoto from "../../assets/LoadingPage/viralogo23.png";
const Loading = ({ loadingFade }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (loadingFade) {
            setFadeOut(true);
        }
    }, [loadingFade]);
    return (
        <div
            className={`fixed top-0 left-0 bg-white h-screen w-full flex items-center justify-center z-[99999999] transition-opacity duration-1000 ${
                fadeOut ? "opacity-0" : "opacity-100"
            }`}
        >
            <div className="relative flex flex-col w-full h-auto justify-center items-center gap-8">
                <img className="w-96" src={LoadingPhoto} alt="Vira Gas" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-fade-in-left-to-right"></div>
            </div>
        </div>
    );
};

export default Loading;
