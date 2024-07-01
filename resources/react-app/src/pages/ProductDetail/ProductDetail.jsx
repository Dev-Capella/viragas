import React, { useEffect, useLayoutEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading/Loading.jsx";
import { useNavigate, useParams } from "react-router-dom/dist";
import ImageGallery from "react-image-gallery";
function ProductDetail() {
    const { t, i18n } = useTranslation();
    const slug = useParams();
    const [productsDetail, setProductDetail] = useState(null);
    const [imageGallery, setImageGallery] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

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
    useEffect(() => {
        if (productsDetail !== null) {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }, [productsDetail]);

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
                        <table className="w-full detail-table relative">
                            <tr className="bg-[#ffa500] w-full">
                                <th className="text-start p-6">MODEL</th>
                                <th className="text-start p-6">Kurs mm</th>
                                <th className="text-start p-6">L mm</th>
                                <th className="text-start p-6">L min. mm</th>
                                <th className="text-start p-6">D mm</th>
                                <th className="text-start p-6">d mm</th>
                                <th className="text-start p-6">daN</th>
                                <th className="text-start p-6">daN</th>
                            </tr>
                            {productsDetail?.details.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.mode}</td>
                                    <td>{item.kursmm}</td>
                                    <td>{item.lmm}</td>
                                    <td>{item.lminmm}</td>

                                    {item.dmm !== null ? (
                                        <td className="absolute top-[50%] right-[37%]">
                                            {item.dmm}
                                        </td>
                                    ) : (
                                        ""
                                    )}
                                    {item.dmmm !== null ? (
                                        <td className="absolute top-[50%] right-[26%]">
                                            {item.dmmm}
                                        </td>
                                    ) : (
                                        ""
                                    )}
                                    {item.dan !== null ? (
                                        <td className="absolute top-[50%] right-[15%]">
                                            {item.dan}
                                        </td>
                                    ) : (
                                        ""
                                    )}
                                    {item.dann !== null ? (
                                        <td className="absolute top-[50%] right-[5%]">
                                            {item.dann}
                                        </td>
                                    ) : (
                                        ""
                                    )}
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
