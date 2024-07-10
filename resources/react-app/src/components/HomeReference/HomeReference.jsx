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
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };
    return (
        <div className="container mx-auto my-5">
            <Slider {...settings}>
                {reference !== null &&
                    reference?.map((item, index) => (
                        <div key={index} className="w-1/6 h-48   mx-2 my-2">
                            <img
                                src={item.image}
                                alt={item.image_alt}
                                className="w-full h-full object-contain p-4" // İhtiyaca göre yüksekliği ayarlayabilirsiniz
                            />
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default HomeReference;
