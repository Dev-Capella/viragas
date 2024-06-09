import React, { useEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import { useTranslation } from "react-i18next";
import generalService from "../../services/generalService";
import CatalogComponent from "../../components/Catalog/CatalogComponent";

function Catalog() {
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState(null);
    const [data, setData] = useState(null);
    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "katalog");
        setPage(result);
    };
    useEffect(() => {
        getPage();
    }, []);
    return (
        <>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/referanslar`} />
                <meta name="description" content="Niksa Metal" />
            </Helmet> */}
            <BreadcrumbsNav imageSrc={page?.image} text={page?.title} />
            <CatalogComponent />
        </>
    );
}

export default Catalog;
