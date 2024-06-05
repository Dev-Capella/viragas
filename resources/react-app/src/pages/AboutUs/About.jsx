import React, { useEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import aboutusphoto from "../../assets/AboutUs/01.jpg";
import aboutusphoto2 from "../../assets/AboutUs/vira-gas-spring.jpg";
const About = () => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    const [data, setData] = useState(null);
    const [certificate, setCertificate] = useState(null);

    const getAboutus = async () => {
        const result = await generalService.getAboutUs(i18n.language);
        setData(result);
    };
    const getCertificate = async () => {
        const result = await generalService.getCertificate(i18n.language);
        setCertificate(result);
    };
    const [page, setPage] = useState(null);
    const getPage = async () => {
        const result = await generalService.getPage(
            i18n.language,
            "hakkimizda"
        );
        setPage(result);
    };

    useEffect(() => {
        getAboutus();
        getPage();
        getCertificate();
    }, [i18n.language]);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/hakkimizda`} />
                <meta name="description" content="Niksa Metal" />
            </Helmet>
            <BreadcrumbsNav imageSrc={page?.image} text={page?.title} />
            <div className="flex flex-col mt-20 mb-20">
                <div className="flex flex-row container mx-auto justify-center mb-52 max-md:mb-12 max-md:flex-col-reverse max-md:items-center max-lg:mb-8 ">
                    <div className="w-2/5 px-8 pt-24 relative max-md:w-full max-md:pt-8 max-lg:w-2/4 max-lg:px-0">
                        <div>
                            <span className="absolute top-12 right-2 text-9xl opacity-10 z-0 whitespace-nowrap text-[#979797] font-black max-md:hidden max-lg:text-7xl max-lg:top-20 max-lg:right-6 max-xl:text-7xl max-xl:top-20 max-xl:right-8 max-2xl:text-[7rem] max-2xl:-right-2 max-2xl:top-16">
                                VİRA GAS
                            </span>
                            <span className="text-6xl max-lg:text-3xl max-md:text-4xl flex justify-center font-extrabold text-[#303849] max-xl:text-4xl">
                                FİRMA PROFİLİ
                            </span>
                        </div>
                        <div className="px-4">
                            <p className="tracking-widest mt-4 leading-7  text-justify">
                                <span className="font-extrabold">
                                    VIRA GAS SPRINGS
                                </span>{" "}
                                sac şekillendirme sektöründe faaliyet gösteren
                                ve 2002 yılında kalıp gazlı yayları üretmek
                                amacıyla kurulmuş bir firmadır.
                            </p>
                            <p className="tracking-widest mt-4 leading-7 text-justify">
                                Kalıp Gazlı Yayları türkiye’de ilk kez{" "}
                                <span className="font-extrabold">
                                    VIRA GAS SPRINGS
                                </span>{" "}
                                tarafından üretilmiştir. Türkiye’de ilk olmanın
                                verdiği gurur ve heyecanla üretimine ürün
                                çeşitlerini artırarak devam etmektedir.
                            </p>
                            <p className="tracking-widest mt-4 leading-7 text-justify">
                                <span className="font-extrabold">
                                    VIRA GAS SPRINGS
                                </span>{" "}
                                2005 yılında 97/23/EC Avrupa Birliği ‘’ Basınçlı
                                Kaplar Direktifi‘’ne uygun olarak CE belgesi
                                almış ve ürün yeterliliğini Avrupa normlarında
                                kanıtlamıştır.
                            </p>
                            <p className="tracking-widest mt-4 leading-7 text-justify">
                                <span className="font-extrabold">
                                    VIRA GAS SPRINGS
                                </span>{" "}
                                2006 yılında ilk ihracatını Almanya’ya yaparak
                                yurt dışı pazarlarda da kalitesinin
                                geçerliliğini fiilen göstermiştir.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 relative group max-md:w-10/12 max-md:px-8 max-lg:px-0 max-lg:w-5/12">
                        <img
                            className="w-full h-full object-contain px-4 absolute -top-5 -right-24 z-0 opacity-50 max-md:-right-4 max-md:-top-1 max-md:px-0  max-lg:-right-4"
                            src={aboutusphoto2}
                            alt="ViraGas"
                        ></img>
                        <img
                            className="w-full h-full object-contain px-4 relative z-10 max-md:px-0"
                            src={aboutusphoto2}
                            alt="ViraGas"
                        ></img>
                    </div>
                </div>
                <div className="flex flex-row container mx-auto justify-center max-md:flex-col max-md:items-center ">
                    <div className="w-1/3 relative group max-md:w-10/12 max-md:px-8 max-lg:px-0 max-lg:w-5/12 ">
                        <img
                            className="w-full h-full object-contain px-4 absolute -top-5 right-24 max-md:-right-8 max-md:-top-1 max-md:px-0 z-0 opacity-50 max-lg:right-4"
                            src={aboutusphoto}
                            alt="ViraGas"
                        ></img>
                        <img
                            className="w-full h-full object-contain px-4 relative z-10 max-md:px-0"
                            src={aboutusphoto}
                            alt="ViraGas"
                        ></img>
                    </div>
                    <div className="w-2/5 px-8 pt-24 relative max-md:w-full max-md:pt-8 max-lg:w-2/4 max-lg:px-0">
                        <div>
                            <span className="absolute top-16 right-2 text-9xl  opacity-10 z-0 whitespace-nowrap text-[#979797] font-black max-md:hidden max-lg:text-7xl max-lg:right-6 max-lg:top-20 max-xl:text-7xl max-xl:top-20 max-xl:right-8 max-2xl:text-[7rem] max-2xl:-right-2 max-2xl:top-16">
                                VİRA GAS
                            </span>
                            <span className="text-[3.5rem] flex justify-center font-extrabold text-[#303849] max-md:text-4xl max-lg:text-3xl max-xl:text-4xl max-2xl:text-[2.75rem]">
                                VİRA GAS Teknoloji
                            </span>
                        </div>
                        <div className="px-4">
                            <p className="tracking-widest mt-4 leading-7  text-justify">
                                Analiz çalışmalarından itibaren, hammadde
                                şartları ve ısıl işlem süreçleri, laboratuvar
                                ortamında kontrol edilmekte ve en son
                                yazılımlarla takip edilmektedir.
                                <p className="tracking-widest mt-4 leading-7 text-justify">
                                    Müşterilerimizin yüksek hassasiyetleri,
                                    hizmet standartlarını ve özel isteklerini
                                    karşılamak için gelişmiş üretim araçları ve
                                    uygulamaları kullanılmaktadır.
                                </p>
                                <p className="tracking-widest mt-4 leading-7 text-justify">
                                    <span className="font-extrabold">
                                        VIRA GAZLI YAY
                                    </span>{" "}
                                    mühendisleri, gelişmiş güvenlik ve
                                    güvenilirlik standartlarına göre, 2D/3D
                                    teknik çizimleri geliştirme tasarımları
                                    yapmaktadır.
                                </p>
                                <p className="tracking-widest mt-4 leading-7 text-justify">
                                    Mil yüzeyine uygulanan özel işlemlerle
                                    normal standartların üzerine çıkılmakta ve
                                    en zorlu şartlarda bile kusursuz çalışan
                                    gazlı yaylara yeni sınırlar
                                    belirlenmektedir.
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
