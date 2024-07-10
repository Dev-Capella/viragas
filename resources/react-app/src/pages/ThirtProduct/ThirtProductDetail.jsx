import React, { useEffect, useLayoutEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading/Loading.jsx";
import { useNavigate, useParams } from "react-router-dom/dist";
import ImageGallery from "react-image-gallery";
function ThirtProductDetail() {
    const [loading, setLoading] = useState(true);
    const [loadingFade, setLoadingFade] = useState(false);
    const { t, i18n } = useTranslation();
    const slug = useParams();
    const [productsDetail, setProductDetail] = useState(null);
    const [imageGallery, setImageGallery] = useState(null);
    const [page, setPage] = useState();

    //Ürünleri getir.
    const getProductList = async () => {
        const result = await generalService.getThirtPorudctDetail(
            i18n.language,
            slug.slug
        );
        console.log(result);

        const imageGallery = result?.images || [];
        if (imageGallery.length > 0) {
            const updatedImageGallery = [];

            // forEach yerine map fonksiyonu kullanarak her bir element için yeni bir nesne oluştur
            imageGallery.forEach((element) => {
                updatedImageGallery.push({
                    original: element,
                    thumbnail: element,
                });
            });

            // setImageGallery ile güncellenmiş imageGallery dizisini ayarla
            setImageGallery(updatedImageGallery);
            console.log(updatedImageGallery);
        } else {
            console.log("images boş veya tanımsız");
        }
        setProductDetail(result);
    };

    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "urunler");
        setPage(result);
    };

    useLayoutEffect(() => {
        if (slug) {
            getProductList();
        }

        getPage();
    }, [i18n.language]);

    // function scrollToTop() {
    //     const scrollStep = -window.scrollY / (500 / 15); // Her adımda kaydırma miktarı
    //     const scrollInterval = setInterval(function () {
    //         if (window.scrollY !== 0) {
    //             // Sayfayı yavaşça yukarı doğru kaydır
    //             window.scrollBy(0, scrollStep);
    //         } else {
    //             // Sayfa en başa geldiğinde zamanlayıcıyı temizle
    //             clearInterval(scrollInterval);
    //         }
    //     }, 15); // 15 milisaniyede bir kaydırma
    // }

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
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/urunler`} />
                <meta name="description" content="Vira Gas" />
            </Helmet>
            {loading && <Loading loadingFade={loadingFade} />}

            <BreadcrumbsNav imageSrc={page?.image} text={t("ProductsBasınc")} />
            <div className="container mx-auto px-5 my-10">
                <div className="flex justify-between items-start">
                    <div className="w-2/4">
                        {imageGallery && <ImageGallery items={imageGallery} />}
                    </div>
                    <div className="w-2/4 p-5 flex flex-col gap-5">
                        <div>
                            <p className="text-gray-600 text-xl py-3 max-sm:py-0">
                                {t("ProductName")}
                            </p>
                            <h1 className="text-gray-600 text-3xl py-3 font-bold border-b-2 max-sm:text-base max-sm:pt-0">
                                {productsDetail?.title}
                            </h1>
                        </div>

                        <div>
                            <p className="text-gray-600 text-xl py-3 max-sm:py-0">
                                {t("ProductDescrip")}
                            </p>
                            <p className="text-gray-600 text-2xl py-3 border-b-2 max-sm:text-base max-sm:pt-0">
                                {productsDetail?.content}
                            </p>
                        </div>
                    </div>
                </div>
                {productsDetail?.product_detail !== null &&
                    productsDetail?.product_detail !== " " && (
                        <>
                            <div className="w-full flex flex-col">
                                <div>
                                    <p className="text-gray-600 font-bold text-xl py-3">
                                        {t("ProductDetail")}
                                    </p>
                                </div>
                                <div>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: productsDetail?.product_detail,
                                        }}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                <div className="flex justify-center items-center">
                    <img
                        className="w-full h-full"
                        src={productsDetail?.last_image}
                        alt="Vira Gas Spring"
                    />
                </div>
            </div>
        </div>
    );
}

export default ThirtProductDetail;
