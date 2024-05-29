import React, { useEffect, useState } from "react";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import SloganBanner from "../../components/SloganBanner/SloganBanner";
import ContactForm from "../../components/Contact/contactForm.jsx";
import { Helmet } from "react-helmet";
import generalService from "../../services/generalService.js";
import { useTranslation } from "react-i18next";

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
                <meta name="description" content="Niksa Metal" />
                {page?.meta_tag.map((item, i) => (
                    <meta key={i} name="description" content={item} />
                ))}
            </Helmet>
            <HeroCarousel />
            <ProductCarousel />
            <SloganBanner />
            <ContactForm />
            <AboutCompany />
        </>
    );
}

export default Home;
