import React from "react";
import OurDealersComponent from "../../components/OurDealers/OurDealersComponent";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import ourdealers from "../../assets/OurDealers/ourdealers.jpg";
const OurDealers = () => {
    return (
        <>
            <BreadcrumbsNav
                /* hata vermesin diye bu foto koydum değişcek*/
                imageSrc={ourdealers}
                text={"Bayilerimiz"}
            />
            <OurDealersComponent />
        </>
    );
};

export default OurDealers;
