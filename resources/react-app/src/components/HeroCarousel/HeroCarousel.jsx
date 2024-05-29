import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowRight
            className="slick-arrow slick-next right-4 max-md:right-6 max-md:h-24 max-md:w-24 max-lg:right-2 max-lg:w-28 max-lg:h-28 max-sm:right-2  max-sm:h-16 max-sm:w-16 h-56 w-56 z-50 transition-all duration-900 ease-in-out
            custom-hover-color-herocarousel"
            style={{
                ...style,
                display: "block",
                color: "white",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowLeft
            className="slick-arrow slick-next left-4 max-md:left-6 max-md:h-24 max-md:w-24 max-lg:left-2 max-lg:w-28 max-lg:h-28 max-sm:left-2 max-sm:h-16 max-sm:w-16 h-56 w-56 z-50 transition-all duration-900 ease-in-out
            custom-hover-color-herocarousel"
            style={{
                ...style,
                display: "block",
                color: "white",
            }}
            onClick={onClick}
        />
    );
}

const HeroCarousel = () => {
    const [products, setProducts] = useState(null);
    const { t, i18n } = useTranslation();

    const fetchData = async () => {
        const data = await generalService.getHomeSlider(i18n.language);
        console.log(data);
        setProducts(data);
    };
    useEffect(() => {
        fetchData();
    }, [i18n.language]);

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        waitForAnimate: false,
    };

    return (
        <div className="slider-container w-full h-screen overflow-hidden relative">
            <Slider {...settings}>
                {products &&
                    products.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="text-center w-full h-screen relative "
                            >
                                <img
                                    className="w-screen h-full object-cover scale-up-center"
                                    src={item.image}
                                    alt="HomeSlider"
                                />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                                    <h1 className="text-4xl font-bold">
                                        {item.title}
                                    </h1>
                                </div>
                            </div>
                        );
                    })}
            </Slider>
        </div>
    );
};

export default HeroCarousel;
