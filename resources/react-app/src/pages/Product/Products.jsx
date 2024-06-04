import React, { useLayoutEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import prodcutBanner from "../../assets/product/productbanner.jpg";
import generalService from "../../services/generalService";
import { useParams } from "react-router-dom";
import LoadingPage from "../../components/Loading/Loading.jsx";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Image } from "antd";
function Products() {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };

    const [products, setProducts] = useState(null);
    const [pagination, setPagination] = useState(1);
    const [paginationValue, setPaginationValue] = useState(null);
    const [loading, setLoading] = useState(true);

    const getProducts = async (pagValue) => {
        const result = await generalService.getProducts(pagValue);
        console.log(result);
        const value = Math.ceil(result.total / 10);
        const paginationArray = [];
        for (let i = 0; i < value; i++) {
            const element = { index: i };
            paginationArray.push(element);
        }
        setPaginationValue(paginationArray);
        setProducts(result.data);
        setLoading(false);
    };
    const [page, setPage] = useState(null);
    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "ürünler");
        setPage(result);
    };

    useLayoutEffect(() => {
        getProducts(pagination);
        scrollToTop();
        getPage();
    }, [pagination, i18n.language]);

    const nextItem = () => {
        if (pagination !== paginationValue.length) {
            setPagination(pagination + 1);
        }
    };
    const previusItem = () => {
        if (pagination !== 1) {
            setPagination(pagination - 1);
        }
    };
    function scrollToTop() {
        const scrollStep = -window.scrollY / (500 / 15); // Her adımda kaydırma miktarı
        const scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                // Sayfayı yavaşça yukarı doğru kaydır
                window.scrollBy(0, scrollStep);
            } else {
                // Sayfa en başa geldiğinde zamanlayıcıyı temizle
                clearInterval(scrollInterval);
            }
        }, 15); // 15 milisaniyede bir kaydırma
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/urunler`} />
                <meta name="description" content="Niksa Metal" />
                
            </Helmet>
            <BreadcrumbsNav imageSrc={page?.image} text={page?.title} />
            {loading ? (
                <LoadingPage />
            ) : (
                <div className="container mx-auto my-10">
                    <div className="flex flex-wrap justify-start">
                        {products &&
                            products.map((item, i) => (
                                <div
                                    key={i}
                                    className="w-1/4 h-96 max-sm:h-auto max-lg:w-2/4 p-4 flex flex-col justify-center items-center"
                                >
                                    <Image
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "#f3f3f3",
                                        }}
                                        src={item.image}
                                        alt={item.image_alt}
                                    />
                                    <p className="py-2 cursor-pointer">
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="flex items-center gap-4">
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                onClick={() => previusItem()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-4 h-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                    ></path>
                                </svg>
                            </button>
                            {}
                            <div className="flex items-center gap-2">
                                {paginationValue?.map((item, i) => (
                                    <button
                                        key={i}
                                        className={
                                            pagination === item.index + 1
                                                ? "relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                : "relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        }
                                        type="button"
                                        onClick={() =>
                                            setPagination(item.index + 1)
                                        }
                                    >
                                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                            {item.index + 1}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                onClick={() => nextItem()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-4 h-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
