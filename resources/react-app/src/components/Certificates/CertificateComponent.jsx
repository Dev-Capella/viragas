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
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="container mx-auto overflow-hidden relative mt-10"
        >
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
                    <div
                        key={index}
                        className="w-1/6 h-48 border max-sm:border-0 rounded-3xl mx-2 my-2"
                    >
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
        </motion.div>
    );
};

export default CertificateComponent;
