import React from "react";
import CertificaOne from "../../assets/Certificates/iso9001.jpg";
import CertificaTwo from "../../assets/Certificates/ped9723ec.jpg";
import CertificaThree from "../../assets/Certificates/ce.png";

import Slider from "react-slick";

const CertificateComponent = () => {
    const images = [
        { src: CertificaOne, alt: "iso9001" },
        { src: CertificaTwo, alt: "ped9723ec" },
        { src: CertificaThree, alt: "ce" },
    ];
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
    };
    return (
        <div className="container mx-auto my-5">
            <Slider {...settings}>
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
            </Slider>{" "}
        </div>
    );
};

export default CertificateComponent;
