import React, { useEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import ContactComponent from "../../components/Contact/contactComponent.jsx";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import { useTranslation } from "react-i18next";
import generalService from "../../services/generalService.js";
import { Helmet } from "react-helmet";
const Contact = () => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    const [page, setPage] = useState(null);
    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "iletisim");
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
                <link rel="canonical" href={`/iletisim`} />
                <meta name="description" content="Niksa Metal" />
                {page?.meta_tag.map((item, i) => (
                    <meta key={i} name="description" content={item} />
                ))}
            </Helmet>
            <BreadcrumbsNav imageSrc={page?.image} text={page?.title} />
            <ContactComponent />
            <GoogleMap />
        </>
    );
};

export default Contact;
