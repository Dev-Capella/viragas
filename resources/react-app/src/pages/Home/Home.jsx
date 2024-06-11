import React, { useEffect, useState } from "react";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import SloganBanner from "../../components/SloganBanner/SloganBanner";
import ContactForm from "../../components/Contact/contactForm.jsx";
import { Helmet } from "react-helmet";
import generalService from "../../services/generalService.js";
import { useTranslation } from "react-i18next";
import CertificateComponent from "../../components/Certificates/CertificateComponent.jsx";

function Home() {
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState(null);
    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "anasayfa");
        setPage(result);
    };

    useEffect(() => {
        getPage();
    }, [i18n.language]);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/`} />
                <meta name="description" content="Vira Gas" />
            </Helmet>
            <HeroCarousel />
            <ProductCarousel />
            <SloganBanner />
            <ContactForm />
            <CertificateComponent />
        </>
    );
}

export default Home;
