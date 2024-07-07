import React, { useEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import { useTranslation } from "react-i18next";
import generalService from "../../services/generalService";
import { Helmet } from "react-helmet";
import NewsDetailComp from "../../components/News/NewsDetailComp";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function News() {
    const [loading, setLoading] = useState(true);
    const [loadingFade, setLoadingFade] = useState(false);
    const { slug } = useParams();
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState(null);
    const [data, setData] = useState(null);
    const getPage = async () => {
        const result = await generalService.getPage(i18n.language, "haberler");
        setPage(result);
    };

    const getData = async () => {
        const result = await generalService.getNewData(i18n.language, slug);
        setData(result);
    };
    useEffect(() => {
        getPage();
        getData();
    }, [i18n.language, slug]);
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
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/referanslar`} />
                <meta name="description" content="Vira Gas" />
            </Helmet> */}
            {loading && <Loading loadingFade={loadingFade} />}
            <BreadcrumbsNav
                imageSrc={page?.image}
                text={page?.title}
                title={data?.title}
            />
            <NewsDetailComp data={data} />
        </>
    );
}

export default News;
