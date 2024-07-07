import React from "react";
import Slider from "react-slick";

const HomeReference = ({ reference }) => {
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
            <Slider className="w-full px-4 overflow-hidden" {...settings}>
                {reference !== null &&
                    reference?.map((item, index) => (
                        <div
                            key={index}
                            className="w-48 h-48 rounded-3xl mx-2 my-2 px-6"
                        >
                            <img
                                src={item.image}
                                alt={item.image_alt}
                                className="w-full h-full object-contain" // Adjust the height as needed
                            />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default HomeReference;
