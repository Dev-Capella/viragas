import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import generalService from "../services/generalService.js";

import { useTranslation } from "react-i18next";

const RootLayout = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        // İletişim sayfası yüklenirken 2 saniye boyunca loading durumunu göster

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
            <Header data={data} />
            <div>
                <Outlet />
            </div>
            <Footer data={data} />
        </>
    );
};

export default RootLayout;
