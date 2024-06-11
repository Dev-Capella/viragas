import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import LoadingPage from "../components/Loading/Loading.jsx";
import generalService from "../services/generalService.js";

import { useTranslation } from "react-i18next";

const RootLayout = () => {
    const [loading, setLoading] = useState(true);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        // İletişim sayfası yüklenirken 2 saniye boyunca loading durumunu göster
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 900);

        return () => clearTimeout(timeout);
    }, []);
    const [data, setData] = useState(null);
    const getCatalog = async () => {
        const result = await generalService.getCatalog(i18n.language);
        setData(result);
    };
    useEffect(() => {
        getCatalog();
    }, [i18n.language]);
    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <>
                    <Header data={data} />

                    <div>
                        <Outlet />
                    </div>
                    <Footer data={data} />
                </>
            )}
        </>
    );
};

export default RootLayout;
