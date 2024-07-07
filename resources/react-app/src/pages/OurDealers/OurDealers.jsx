import React, { useEffect, useState } from "react";
import OurDealersComponent from "../../components/OurDealers/OurDealersComponent";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import ourdealers from "../../assets/OurDealers/ourdealers.jpg";
import Loading from "../../components/Loading/Loading";
const OurDealers = () => {
    const [loading, setLoading] = useState(true);
    const [loadingFade, setLoadingFade] = useState(false);
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
            <BreadcrumbsNav imageSrc={ourdealers} text={"Bayilerimiz"} />
            {loadingFade && <OurDealersComponent />}
        </>
    );
};

export default OurDealers;
