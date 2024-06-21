import React, { useEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import { useTranslation } from "react-i18next";
import generalService from "../../services/generalService";
import { Helmet } from "react-helmet";
import NewsContent from "../../components/News/NewsContent";
import Loading from "../../components/Loading/Loading";

function News() {
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "haberler");
        setPage(result);
    };
    const getData = async () => {
        const result = await generalService.getNewsData(i18n.language);
        if (result.length > 0) {
            setData(result);
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
        getPage();
    }, [i18n.language]);
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
            <NewsContent data={data} />
        </>
    );
}

export default News;
