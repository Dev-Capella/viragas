import React, { useEffect, useLayoutEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading/Loading.jsx";
import { useNavigate } from "react-router-dom/dist";
function Products() {
    const { t, i18n } = useTranslation();
    const [loadingFade, setLoadingFade] = useState(false);
    const [productsCategories, setProductsCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();
    const getProductsCategories = async () => {
        const result = await generalService.getProductCategories();
        setProductsCategories(result);
    };

    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "urunler");
        setPage(result);
    };
    useEffect(() => {
        if (productsCategories !== null) {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }, [productsCategories]);

    useLayoutEffect(() => {
        getProductsCategories();
        scrollToTop();
        getPage();
    }, [i18n.language]);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const navigate = useNavigate();
    useEffect(() => {
        scrollToTop();

        setTimeout(() => {
            scrollToTop();
            setLoadingFade(true);
            setTimeout(() => {
                setLoading(false);
            }, 600);
        }, 1500);
    }, []);

    return (
        <div>
            {loading && <Loading loadingFade={loadingFade} />}
            <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/urunler`} />
                <meta name="description" content="Vira Gas" />
            </Helmet>

            <BreadcrumbsNav imageSrc={page?.image} text={page?.title} />
            <div className="container mx-auto px-5 my-10">
                {productsCategories && (
                    <div className="grid grid-cols-4 max-xl:grid-cols-2 gap-8 max-sm:gap-2">
                        {productsCategories.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-3 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer"
                                onClick={() => navigate(item.slug)}
                            >
                                <div className="flex flex-col items-center relative">
                                    <div className="absolute top-2 -left-12 bg-[#343280] px-2 shadow-xl">
                                        <h2 className="text-lg my-2 font-semibold  text-justify text-white  duration-300  delay-100 cursor-pointer">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className="w-48 h-48">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain rounded-lg mb-4"
                                        />
                                    </div>

                                    <div className="text-[#343280] flex items-center cursor-pointer transition-all duration-300 hover:text-black hover:underline">
                                        <span
                                            onClick={() => navigate(item.slug)}
                                        >
                                            Detayları İncele
                                        </span>
                                        <svg
                                            className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products;
