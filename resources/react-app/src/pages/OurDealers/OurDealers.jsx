import React from "react";
import OurDealersComponent from "../../components/OurDealers/OurDealersComponent";
import BreadcrumbsNav from "../../components/BreadcrumbsNav/BreadcrumbsNav";
import bayifotoornek from "../../assets/OurDealers/banner1.jpg";
const OurDealers = () => {
    return (
        <>
            <BreadcrumbsNav
                /* hata vermesin diye bu foto koydum değişcek*/
                imageSrc={bayifotoornek}
                text={"Bayilerimiz"}
            />
            <OurDealersComponent />
        </>
    );
};

export default OurDealers;
