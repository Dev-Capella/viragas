import React, { useEffect, useLayoutEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading/Loading.jsx";
import { useNavigate, useParams } from "react-router-dom/dist";
import ImageGallery from "react-image-gallery";
function ProductDetail() {
    const [loading, setLoading] = useState(true);
    const [loadingFade, setLoadingFade] = useState(false);
    const { t, i18n } = useTranslation();
    const slug = useParams();
    const [productsDetail, setProductDetail] = useState(null);
    const [imageGallery, setImageGallery] = useState(null);
    const [page, setPage] = useState();

    //Ürünleri getir.
    const getProductList = async () => {
        const result = await generalService.getProductDetail(slug.slug);
        console.log(result);

        const imageGallery = result?.image_gallery || [];
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
            console.log("image_gallery boş veya tanımsız");
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
        scrollToTop();
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
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/urunler`} />
                <meta name="description" content="Vira Gas" />
            </Helmet>
            {loading && <Loading loadingFade={loadingFade} />}

            <BreadcrumbsNav imageSrc={page?.image} text={page?.title} />
            <div className="container mx-auto px-5 my-10">
                <div className="flex justify-between items-start">
                    <div className="w-2/4">
                        {imageGallery && <ImageGallery items={imageGallery} />}
                    </div>
                    <div className="w-2/4 p-5 flex flex-col gap-5">
                        <div>
                            <p className="text-gray-600 text-xl py-3">
                                Ürün Adı
                            </p>
                            <h1 className="text-gray-600 text-3xl py-3 font-bold border-b-2 ">
                                {productsDetail?.name}
                            </h1>
                        </div>

                        <div>
                            <p className="text-gray-600 text-xl py-3">
                                Ürün Açıklaması
                            </p>
                            <p className="text-gray-600 text-2xl py-3 border-b-2 ">
                                {productsDetail?.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div>
                        <p className="text-gray-600 text-xl py-3">
                            Ürün Detayları
                        </p>
                    </div>
                    <div>
                        <div className="table-container">
                            <div className="w-full detail-table relative ">
                                <div className="bg-[#ffa500] w-full flex justify-between">
                                    <p className="text-center px-6 py-2 w-[20%] flex justify-start items-center">
                                        MODEL
                                    </p>
                                    <p className="text-center px-6 py-2 w-[20%] flex justify-start items-center">
                                        Kurs mm
                                    </p>
                                    <p className="text-center px-6 py-2 w-[20%] flex justify-start items-center">
                                        L mm
                                    </p>
                                    <p className="text-center px-6 py-2 w-[20%] flex justify-start items-center">
                                        L min. mm
                                    </p>
                                    <p className="text-center px-6 py-2 w-[20%] flex justify-start items-center">
                                        D mm
                                    </p>
                                    <p className="text-center px-6 py-2 w-[20%] flex justify-start items-center">
                                        d mm
                                    </p>
                                    <p className="text-center px-6 py-2 w-[20%] flex justify-start items-center">
                                        daN
                                    </p>
                                    <p className="text-center px-6 py-2 w-[20%] flex justify-start items-center">
                                        daN
                                    </p>
                                    <p className="text-center px-6 py-2 w-[20%] flex justify-start items-center">
                                        Silindirlerin Tabanı
                                    </p>
                                    <p className="text-center px-6 py-2 w-[20%] flex justify-start items-center">
                                        Seri Bağlama
                                    </p>
                                </div>
                                {productsDetail?.newArray.map((element, i) => (
                                    <div
                                        className="flex justify-between w-full mb-8 border-[1px] border-solid border-[#ebebeb]"
                                        key={i}
                                    >
                                        <div className="flex justify-between  w-[40%] flex-col">
                                            {element?.map((item, i) => (
                                                <>
                                                    <div
                                                        key={i}
                                                        className="w-full flex justify-between py-2"
                                                    >
                                                        <p className="w-[25%] px-6">
                                                            {item.mode}
                                                        </p>
                                                        <p className="w-[25%] px-6">
                                                            {item.kursmm}
                                                        </p>
                                                        <p className="w-[25%] px-6">
                                                            {item.lmm}
                                                        </p>
                                                        <p className="w-[25%] px-6">
                                                            {item.lminmm}
                                                        </p>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                        {element?.map(
                                            (item, i) =>
                                                item.silindir_cap !== null && (
                                                    <div
                                                        className="w-[60%] flex justify-center items-center"
                                                        key={i}
                                                    >
                                                        {item.dmm !== null ? (
                                                            <p className="w-[20%] px-6 ">
                                                                <p>
                                                                    {item.dmm}
                                                                </p>
                                                            </p>
                                                        ) : (
                                                            <p className="w-[20%] px-6  "></p>
                                                        )}
                                                        {item.dmmm !== null ? (
                                                            <p className=" w-[20%] px-6 ">
                                                                <p>
                                                                    {item.dmmm}
                                                                </p>
                                                            </p>
                                                        ) : (
                                                            <p className=" w-[20%] px-6 "></p>
                                                        )}
                                                        {item.dan !== null ? (
                                                            <p className="  w-[20%] px-6 ">
                                                                {item.dan}
                                                            </p>
                                                        ) : (
                                                            <p className=" w-[20%] px-6 "></p>
                                                        )}
                                                        {item.dann !== null ? (
                                                            <p className="  w-[20%] px-6">
                                                                {item.dann}
                                                            </p>
                                                        ) : (
                                                            <p className=" w-[20%] px-6 "></p>
                                                        )}
                                                        {item.silindir_cap !==
                                                        null ? (
                                                            <p className="  w-[20%] px-6 ">
                                                                <img
                                                                    src={
                                                                        item.silindir_cap
                                                                    }
                                                                />
                                                            </p>
                                                        ) : (
                                                            <p className=" w-[20%] px-6 "></p>
                                                        )}
                                                        {item.seri_baglama !==
                                                        null ? (
                                                            <p className=" w-[20%] px-6 ">
                                                                <img
                                                                    src={
                                                                        item.seri_baglama
                                                                    }
                                                                />
                                                            </p>
                                                        ) : (
                                                            <p className=" w-[20%] px-6">
                                                                -----------
                                                            </p>
                                                        )}
                                                    </div>
                                                )
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
