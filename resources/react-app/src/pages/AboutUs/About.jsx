import React, { useEffect, useRef, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import aboutusphoto from "../../assets/AboutUs/01.jpg";
import aboutusphoto2 from "../../assets/AboutUs/vira-gas-spring.jpg";
import aboutusbanner from "../../assets/AboutUs/aboutusbanner2.jpg";

import { motion, useAnimation } from "framer-motion";
import CertificateComponent from "../../components/Certificates/CertificateComponent";
import Loading from "../../components/Loading/Loading";

const About = () => {
    const [loading, setLoading] = useState(true);
    const [loadingFade, setLoadingFade] = useState(false);
    const { t, i18n } = useTranslation();
    const controls = useAnimation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    const [data, setData] = useState(null);
    const [certificate, setCertificate] = useState(null);

    const getAboutus = async () => {
        const result = await generalService.getAboutUs(i18n.language);
        if (result) {
            setData(result);
        }
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

    useEffect(() => {
        controls.start({ opacity: 1, x: 0 });
    }, [controls]);
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Element görünür hale geldiğinde
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Elementin yarıdan fazlası göründüğünde
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            // Komponent kaldırıldığında observer'ı temizle
            observer.disconnect();
        };
    }, []);
    useEffect(() => {
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
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/hakkimizda`} />
                <meta name="description" content="Vira Gas" />
            </Helmet>
            {loading && <Loading loadingFade={loadingFade} />}
            <BreadcrumbsNav imageSrc={page?.image} text={page?.title} />
            <div className="flex flex-col mt-20 mb-40 max-sm:mb-4 max-sm:mt-8">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        x: isVisible ? 0 : -100,
                    }}
                    transition={{ duration: 1, delay: 2 }}
                    className="flex flex-row container mx-auto justify-center mb-52 max-md:mb-12 max-md:flex-col-reverse max-md:items-center max-lg:mb-8 "
                >
                    <div className="w-2/5 px-8 relative max-md:w-full max-md:pt-8 max-lg:w-2/4 max-lg:px-0">
                        <div>
                            <span className="text-[3.5rem] max-lg:text-3xl max-md:text-4xl flex justify-center font-extrabold text-[#303849] max-xl:text-4xl">
                                {t("AboutUsFirstTitle")}
                            </span>
                        </div>
                        <motion.div ref={aboutRef} className="px-4 mb-5">
                            <p className=" mt-4 text-justify ">
                                <span className="font-extrabold">
                                    {t("AboutUsViraGas")}
                                </span>{" "}
                                {t("AboutUsContentOne")}
                            </p>
                            <p className=" mt-4 text-justify  ">
                                {t("AboutUsContentTwo1")}{" "}
                                <span className="font-extrabold">
                                    {" "}
                                    {t("AboutUsViraGas")}{" "}
                                </span>{" "}
                                {t("AboutUsContentTwo2")}
                            </p>
                            <p className=" mt-4 text-justify ">
                                <span className="font-extrabold">
                                    {t("AboutUsViraGas")}
                                </span>{" "}
                                {t("AboutUsContentThree")}
                            </p>
                            <p className=" mt-4 text-justify ">
                                <span className="font-extrabold">
                                    {t("AboutUsViraGas")}
                                </span>{" "}
                                {t("AboutUsContentFour")}
                            </p>
                        </motion.div>
                    </div>
                    <div className="w-1/3 h-full relative group max-md:w-10/12 max-md:px-8 max-lg:px-0 max-lg:w-5/12">
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
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        x: isVisible ? 0 : -100,
                    }}
                    transition={{ duration: 1, delay: 2 }}
                    className="flex flex-row container mx-auto justify-center max-md:flex-col max-md:items-center "
                >
                    <motion.div className="w-1/3 h-full relative group max-md:w-10/12 max-md:px-8 max-lg:px-0 max-lg:w-5/12 ">
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
                    </motion.div>
                    <div className="w-2/5 px-8  relative max-md:w-full max-md:pt-8 max-lg:w-2/4 max-lg:px-0">
                        <div>
                            <span className="text-[3rem] flex justify-center font-extrabold text-[#303849] max-md:text-4xl max-lg:text-3xl max-xl:text-[2rem] max-2xl:text-[2.75rem]">
                                {t("AboutUsSecondTitle")}
                            </span>
                        </div>
                        <div className="px-4">
                            <p className="mt-4 text-justify ">
                                {t("AboutUsSecondContentOne")}
                                <p className=" mt-4 text-justify ">
                                    {t("AboutUsSecondContentTwo")}
                                </p>
                                <p className=" mt-4 text-justify ">
                                    <span className="font-extrabold">
                                        {t("AboutUsViraGasTwo")}
                                    </span>{" "}
                                    {t("AboutUsSecondContentThree")}
                                </p>
                                <p className=" mt-4 text-justify ">
                                    {t("AboutUsSecondContentFour")}
                                </p>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="mb-24">
                <CertificateComponent />
            </div>
        </>
    );
};

export default About;
