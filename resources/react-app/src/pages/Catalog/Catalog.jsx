import React, { useEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import { useTranslation } from "react-i18next";
import generalService from "../../services/generalService";
import CatalogComponent from "../../components/Catalog/CatalogComponent";
import Loading from "../../components/Loading/Loading";

function Catalog() {
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "katalog");
        setPage(result);
    };

    const getData = async () => {
        const result = await generalService.getCatalog(i18n.language);
        setData(result);
        setTimeout(() => {
            setLoading(false);
        }, 700);
    };

    useEffect(() => {
        getPage();
        getData();
    }, []);
    return (
        <>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/referanslar`} />
                <meta name="description" content="Vira Gas" />
            </Helmet> */}
            <BreadcrumbsNav imageSrc={page?.image} text={page?.title} />
            {loading ? <Loading /> : ""}
            <CatalogComponent data={data} />
        </>
    );
}

export default Catalog;
