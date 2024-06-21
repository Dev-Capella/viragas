import React, { useLayoutEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import productBanner from "../../assets/product/productbanneraa7.jpg";
import generalService from "../../services/generalService";
import { useParams } from "react-router-dom";
import LoadingPage from "../../components/Loading/Loading.jsx";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Image } from "antd";
import Loading from "../../components/Loading/Loading.jsx";
function Products() {
    const { t, i18n } = useTranslation();

    const [productsCategories, setProductsCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();
    const getProductsCategories = async () => {
        const result = await generalService.getProductCategories();
        if (result.length > 0) {
            setLoading(false);
            setProductsCategories(result);
        }
    };

    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "ürünler");
        setPage(result);
    };

    useLayoutEffect(() => {
        getProductsCategories();
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
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/urunler`} />
                <meta name="description" content="Vira Gas" />
            </Helmet>
            {loading ? <Loading /> : ""}

            <BreadcrumbsNav imageSrc={productBanner} text={page?.title} />
            <div className="container mx-auto px-5">
                {productsCategories &&
                    productsCategories.map((item, i) => (
                        <div>
                            {item.title}
                            <img src={item.image} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Products;
