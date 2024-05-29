import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import ContactForm from "../../components/Contact/contactForm";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import generalService from "../../services/generalService";

const contactComponent = () => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };

    return (
        <div className=" border-radius-6px box-shadow-double-large flex flex-col justify-center w-full items-center -mt-16  relative z-10">
            <ContactForm />
            <div className="flex flex-row  justify-center items-center mt-24 mb-8 w-full gap-8 max-sm:p-2 max-sm:gap-4">
                <p className="font-semibold lg:text-2xl max-sm:text-xl max-sm:text-center">
                    {t("ContactSocialMedia")}
                </p>
                <hr className=" border-t w-56 max-sm:w-48 border-gray-300" />
                <FaFacebook
                    size={32}
                    className="hover:text-blue-500 
                    transition-all 
                    duration-300
                    cursor-pointer 
                    max-sm:max-h-6"
                />
                <FaInstagram
                    size={34}
                    className="hover:text-[#F60485]  
                    transition-all
                    duration-300 
                    cursor-pointer 
                    max-sm:max-h-6"
                />
                <IoLogoYoutube
                    size={34}
                    className="hover:text-[#FF0000]
                transition-all
                duration-300
                cursor-pointer 
                max-sm:max-h-8
                "
                />
            </div>
            <div className="bg-gray-50 justify-around  w-full h-auto max-sm:w-full max-sm:h-auto max-sm:pl-4 max-sm:pr-4 max-md:pl-4 max-md:pr-4 max-lg:pl-4 max-lg:pr-4 max-xl:pl-4 max-xl:pr-4 flex flex-row pl-80 pr-80 pt-16 pb-8 ">
                <div className="flex flex-col items-center pb-8 ">
                    <div className="pb-8">
                        <BsTelephone
                            size={56}
                            className="hover:text-green-700
                            transition-all
                            duration-300
                            max-sm:max-h-8"
                        />
                    </div>

                    <p className="font-semibold max-sm:text-xs max-sm:text-center">
                        {" "}
                        <a href="tel:05558313066" target="blank">
                            {" "}
                            0555 831 30 66
                        </a>{" "}
                    </p>
                    <p className="font-semibold max-sm:text-xs max-sm:text-center">
                        <a href="https://wa.me/905332014873" target="blank">
                            0533 201 48 73
                        </a>
                    </p>
                </div>
                <div className="flex flex-col items-center pb-8">
                    <div className="pb-8">
                        <FaMapMarkerAlt
                            size={56}
                            className="hover:text-orange-500
                           transition-all
                           duration-300
                   
                           max-sm:max-h-8"
                        />
                    </div>

                    <p className="font-semibold max-sm:text-xs max-sm:text-center max-sm:w-1/2">
                        {" "}
                        Hacıvat Mh. 5. Aksu Sk. No: 41/7 Yıldırım / BURSA
                    </p>
                </div>
                <div className="flex flex-col items-center pb-8 ">
                    <div className="pb-8 ">
                        <IoMailUnreadOutline
                            size={56}
                            className="hover:text-blue-500
                            transition-all
                            duration-300
                    
                            max-sm:max-h-8"
                        />
                    </div>

                    <p className="font-semibold max-sm:text-xs">
                        {" "}
                        <a href="mailto:info@niksametal.com">
                            {" "}
                            info@niksametal.com{" "}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default contactComponent;
