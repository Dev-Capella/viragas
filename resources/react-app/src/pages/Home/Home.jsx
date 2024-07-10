import React, { useEffect, useState } from "react";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import NewsHome from "../../components/NewsHome/NewsHome";
import ContactForm from "../../components/Contact/contactForm.jsx";
import { Helmet } from "react-helmet";
import generalService from "../../services/generalService.js";
import { useTranslation } from "react-i18next";
import CertificateComponent from "../../components/Certificates/CertificateComponent.jsx";
import { BsTelephone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import SloganBanner from "../../components/SloganBanner/SloganBanner";
import Loading from "../../components/Loading/Loading";
import { motion } from "framer-motion";
import HomeReference from "../../components/HomeReference/HomeReference";

function Home() {
    const [loading, setLoading] = useState(true);
    const [loadingFade, setLoadingFade] = useState(false);
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState(null);
    const [products, setProducts] = useState(null);
    const [reference, setReference] = useState(null);
    const getReference = async () => {
        const result = await generalService.getReferance();
        setReference(result);
    };
    const getPageInfo = async () => {
        const result = await generalService.getPage(i18n.language, "anasayfa");
        setPage(result);
    };
    const fetchData = async () => {
        const data = await generalService.getHomeSlider(i18n.language);

        if (data.length > 0) {
            setProducts(data);
        }
        setProducts(data);
    };

    useEffect(() => {
        fetchData();
        getReference();
        getPageInfo();
    }, [i18n.language]);
    useEffect(() => {
        setTimeout(() => {
            scrollToTop();
            setLoadingFade(true);
            setTimeout(() => {
                setLoading(false);
            }, 750);
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
                <link rel="canonical" href={`/`} />
                <meta name="description" content="Vira Gas" />
            </Helmet>
            {loading && <Loading loadingFade={loadingFade} />}
            <HeroCarousel products={products} />
            <NewsHome />
            <SloganBanner />
            <ContactForm />
            <CertificateComponent />
            <HomeReference reference={reference} />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex justify-between items-start w-full my-5  flex-col mt-20"
            >
                <div className="w-full flex justify-center items-center relative">
                    <div className="container mx-auto px-5 flex justify-between items-center max-md:flex-col">
                        <div className="flex flex-col justify-center items-center my-5 w-2/6 max-md:w-full">
                            <div className="w-24 h-24 bg-white shadow-2xl rounded-full flex justify-center items-center relative">
                                <BsTelephone className="text-3xl " />
                                <div className="absolute right-0 top-0 circle pulse bg-[#343280]"></div>
                            </div>
                            <div className="w-80 h-20 bg-white shadow-2xl flex justify-center items-center p-4 rounded max-sm:w-full max-lg:w-56">
                                <a
                                    className="text-center font-medium"
                                    href="tel:+902244824427"
                                >
                                    0224 482 44 27
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center my-5 w-2/6 max-md:w-full">
                            <div className="w-24 h-24 bg-white shadow-2xl rounded-full flex justify-center items-center relative">
                                <IoMailUnreadOutline className="text-3xl" />
                                <div className="absolute right-0 top-0 circle pulse bg-[#343280]"></div>
                            </div>
                            <div className="w-80 h-20 bg-white shadow-2xl flex justify-center items-center p-4 rounded max-sm:w-full max-lg:w-56">
                                <a
                                    className="text-center font-medium"
                                    href="mailto:sales@viragas.com"
                                >
                                    sales@viragas.com
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center my-5 w-2/6 max-md:w-full">
                            <div className="w-24 h-24 bg-white shadow-2xl rounded-full flex justify-center items-center relative">
                                <FaMapMarkerAlt className="text-3xl " />
                                <div className="absolute right-0 top-0 circle pulse bg-[#343280]"></div>
                            </div>
                            <div className="w-80 h-20 bg-white shadow-2xl flex justify-center items-center p-4 rounded max-sm:w-full max-lg:w-56">
                                <p className="text-center max-lg:text-[0.8rem] font-medium">
                                    Çalı Sanayi Bölgesi Karaali Mah. 7. Sokak
                                    No:19 Çalı / Nilüfer 16370 BURSA /TÜRKİYE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.8064538351641!2d28.92843892064158!3d40.1737720478578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca10e9d95a85a7%3A0x8e18a1adc915ad2f!2sVira!5e0!3m2!1str!2str!4v1717938894248!5m2!1str!2str"
                    width="100%"
                    height="500"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    alt="Vira Gas Spring"
                ></iframe>
            </motion.div>
        </>
    );
}

export default Home;
