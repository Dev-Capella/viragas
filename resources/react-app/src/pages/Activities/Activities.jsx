import React, { useEffect, useState } from "react";
import ActivitiesComponent from "../../components/Activities/ActivitiesComponent";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import { useTranslation } from "react-i18next";
import generalService from "../../services/generalService";
import activities from "../../assets/Activities/faaliyet5.jpg";
import { Helmet } from "react-helmet";
import Loading from "../../components/Loading/Loading";

const Activities = () => {
    const [loading, setLoading] = useState(true);
    const [loadingFade, setLoadingFade] = useState(false);
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState(null);
    const getPage = async () => {
        const result = await generalService.getPage(
            i18n.language,
            "faliyetler"
        );
        setPage(result);
    };
    useEffect(() => {
        getPage();
    }, [i18n.language]);
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
            {loading && <Loading loadingFade={loadingFade} />}
            <Helmet>
                <meta charSet="utf-8" />
                <title>{page?.meta_title}</title>
                <link rel="canonical" href={`/faaliyetler`} />
                <meta name="description" content="Vira Gas" />
            </Helmet>
            <BreadcrumbsNav imageSrc={activities} text={"Faaliyetler"} />
            <ActivitiesComponent />
        </>
    );
};

export default Activities;
