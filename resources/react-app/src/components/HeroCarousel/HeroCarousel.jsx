import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";

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
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        appendDots: (dots) => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    bottom: "1.2rem",
                }}
            >
                <ul
                    className="flex justify-center items-center gap-8"
                    style={{ margin: "0px" }}
                >
                    {" "}
                    {dots}{" "}
                </ul>
            </div>
        ),
    };

    return (
        <div className="slider-container w-full h-screen max-lg:h-[500px] max-sm:h-[350px] overflow-hidden relative">
            <Slider {...settings}>
                {products &&
                    products.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="text-center w-full h-screen max-lg:h-[500px] max-sm:h-[350px] relative "
                            >
                                {item.video !== null ? (
                                    <video
                                        className="w-screen h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        src={item.video} // Accessing the first video's download link
                                    >
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                ) : (
                                    <img
                                        className="w-screen h-full object-cover scale-up-center"
                                        src={item.image}
                                        alt="HomeSlider"
                                    />
                                )}

                                <div className="absolute inset-0 bg-black opacity-70"></div>
                                <div class=" animate-fade-in absolute top-1/2 max-lg:top-[40%]  left-1/2 max-xl:left-0 transform -translate-x-1/2 -translate-y-1/2 max-xl:translate-x-0 max-xl:transltae-y-0 text-white w-full flex justify-center items-center">
                                    <p class=" w-full text-white text-[20rem]  max-2xl:text-[16rem] max-xl:text-[12rem] max-lg:text-[8rem] max-md:text-[4rem] font-bold opacity-10">
                                        VİRA GAS
                                    </p>
                                    <p class=" absolute text-6xl font-extrabold max-xl:text-4xl text-white max-md:text-2xl px-12 max-md:px-2">
                                        {item?.title}
                                    </p>
                                    <p class=" absolute text-2xl max-xl:text-xl max-md:text-lg font-medium tracking-wider text-white bottom-0">
                                        {item?.content}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
            </Slider>
        </div>
    );
};

export default HeroCarousel;
