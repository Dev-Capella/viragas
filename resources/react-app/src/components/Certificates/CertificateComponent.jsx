import React from "react";
import CertificaOne from "../../assets/Certificates/iso9001.jpg";
import CertificaTwo from "../../assets/Certificates/ped9723ec.jpg";
import CertificaThree from "../../assets/Certificates/ce.png";
import CertificaFour from "../../assets/Certificates/bureauveritas.png";
import { motion } from "framer-motion";

const CertificateComponent = () => {
    const images = [
        { src: CertificaOne, alt: "iso9001" },
        { src: CertificaTwo, alt: "ped9723ec" },
        { src: CertificaThree, alt: "ce" },
        { src: CertificaFour, alt: "bureauveritas" },
    ];

    return (
        <div className="container mx-auto overflow-hidden relative">
            <motion.div
                animate={{
                    x: ["0%", "-50%"], // Move the slider by its half width to create a seamless loop
                    transition: {
                        ease: "linear",
                        duration: 15,
                        repeat: Infinity,
                    },
                }}
                className="flex flex-row flex-nowrap"
                style={{ width: "200%" }} // Ensures all images fit for smooth scrolling
            >
                {images.concat(images).map((image, index) => (
                    <div key={index} className="w-1/6 h-48 px-4 py-2">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-contain" // Adjust the height as needed
                        />
                    </div>
                ))}
            </motion.div>
            {/* Left gradient overlay */}
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            {/* Right gradient overlay */}
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
    );
};

export default CertificateComponent;
