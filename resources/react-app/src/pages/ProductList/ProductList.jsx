import React, { useEffect, useLayoutEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading/Loading.jsx";
import { useNavigate, useParams } from "react-router-dom/dist";
function ProductList() {
    const { t, i18n } = useTranslation();
    const slug = useParams();

    const [productsList, setProductList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();

    //Ürünleri getir.
    const getProductList = async () => {
        const result = await generalService.getProductList(slug.slug);
        setProductList(result);
    };

    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "urunler");
        setPage(result);
    };
    useEffect(() => {
        if (productsList !== null) {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }, [productsList]);

    useLayoutEffect(() => {
        if (slug) {
            getProductList();
        }
        scrollToTop();
        getPage();
    }, [i18n.language]);

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
    const navigate = useNavigate();
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/urunler`} />
                <meta name="description" content="Vira Gas" />
            </Helmet>
            {loading ? <Loading /> : ""}

            <BreadcrumbsNav imageSrc={page?.image} text={page?.title} />
            <div className="container mx-auto px-5 my-10">
                {productsList && (
                    <div className="grid grid-cols-4 max-xl:grid-cols-2 gap-8">
                        {productsList.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer"
                                onClick={() => navigate(item.slug)}
                            >
                                <div className="flex flex-col items-center">
                                    <h2 className="text-xl my-2 anton-regular text-justify text-gray-700 hover:text-yellow-500 duration-300  delay-100 cursor-pointer">
                                        {item.name}
                                    </h2>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-lg mb-4"
                                    />

                                    <div className="text-orange-500 flex items-center cursor-pointer transition-all duration-300 hover:text-orange-700 hover:underline">
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

export default ProductList;
