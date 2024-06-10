import React, { useEffect, useState } from "react";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import ReferancesComponent from "../../components/Referances/ReferancesComponent";
import { useTranslation } from "react-i18next";
import references from "../../assets/Referances/references1aooo.png";
import generalService from "../../services/generalService";
import { Helmet } from "react-helmet";
const Referances = () => {
    const { t, i18n } = useTranslation();

    const [page, setPage] = useState(null);
    const getPage = async () => {
        const result = await generalService.getPage(
            i18n.language,
            "referanslar"
        );
        setPage(result);
    };
    useEffect(() => {
        getPage();
    }, [i18n.language]);

    return (
        <div>
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{page?.meta_title}</title>
                    <link rel="canonical" href={`/referanslar`} />
                    <meta name="description" content="Vira Gas" />
                </Helmet>
                <BreadcrumbsNav imageSrc={references} text={page?.title} />
                <ReferancesComponent />
            </>
        </div>
    );
};

export default Referances;
