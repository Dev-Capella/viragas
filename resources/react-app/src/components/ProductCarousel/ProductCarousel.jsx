import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <MdKeyboardArrowRight
            className="slick-arrow slick-next -right-0 max-md:-right-2 max-sm:w-12 max-sm:right-2 max-lg:right-2 max-xl:w-20 max-xl:h-24 max-xl:right-4 max-2xl:w-20 max-2xl:h-20 max-2xl:right-8 max-3xl:w-20 max-3xl:h-20 max-3xl:right-8 h-56 w-40 z-40"
            style={{
                ...style,
                display: "block",
                color: "#343280",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowLeft
            className="slick-arrow slick-next -left-0 max-md:-left-1 max-sm:w-12 max-sm:left-2 max-lg:-left-4  max-xl:w-20 max-xl:h-24 max-xl:left-4 max-2xl:w-20 max-2xl:h-20 max-2xl:left-8 h-56 w-40 z-40"
            style={{
                ...style,
                display: "block",
                color: "#343280",
            }}
            onClick={onClick}
        />
    );
}

const ProductCarousel = () => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };

    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await generalService.getHomeProductSlider();
            console.log(data);
            setProducts(data);
        };
        fetchData();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "center",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        centerMode: true,
        centerPadding: "0px",
    };

    return (
        <div className="slider-container  container mx-auto mt-10 mb-36 product-carousel">
            <div>
                <p className="text-center font-bold text-4xl mb-12 text-[#343280]">
                    {t("HomePageProduct")}
                </p>
            </div>
            <Slider className=" flex" {...settings}>
                {products &&
                    products.map((item, i) => (
                        <div key={i} className="">
                            <div className="flex flex-row justify-center items-center relative">
                                <img
                                    className="w-10/12 h-10/12"
                                    src={item.image}
                                    alt={item.image_alt}
                                />
                            </div>
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default ProductCarousel;
