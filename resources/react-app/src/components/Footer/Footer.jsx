import React from "react";
import whitelogo from "../../assets/HeaderLogo/whitelogo.png";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
const Footer = ({ data }) => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    return (
        <div className="w-full h-full relative">
            <div className="px-48 max-lg:px-10 max-lg:py-10 max-lg:flex-wrap max-lg:justify-between py-20 flex flex-row bg-[#343280] w-full h-auto justify-start items-start gap-2">
                <div className="container flex w-2/6 max-lg:w-full justify-start items-start">
                    <ul className="text-white">
                        <li>
                            <img
                                className="h-28 -mt-5 mb-4"
                                src={whitelogo}
                                alt="Niksa Metal"
                            />
                        </li>
                    </ul>
                </div>
                <div className="w-2/6 max-lg:w-full">
                    <ul className="text-white flex flex-col max-lg:flex-wrap max-lg:flex-row max-lg:mt-4 gap-3">
                        <li>
                            <a
                                className="text-lg border-l-2 border-white pl-2 hover:pl-4 delay-100 duration-300   "
                                href="hakkimizda"
                            >
                                {t("FooterHome")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg border-l-2 border-white pl-2 hover:pl-4 delay-100 duration-300"
                                href="hakkimizda"
                            >
                                {t("FooterAboutUs")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg border-l-2 border-white pl-2 hover:pl-4 delay-100 duration-300"
                                href="urunler"
                            >
                                {t("FooterProduct")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg border-l-2 border-white pl-2 hover:pl-4 delay-100 duration-300"
                                href={
                                    i18n.language === "tr"
                                        ? data?.catalog_url
                                        : data?.catalog_url_en
                                }
                                target="blank"
                            >
                                {t("FooterCatalog")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg border-l-2 border-white pl-2 hover:pl-4 delay-100 duration-300"
                                href={"/referanslar"}
                            >
                                {t("FooterReferance")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg border-l-2 border-white pl-2 hover:pl-4 delay-100 duration-300"
                                href={"/faaliyetler"}
                            >
                                {t("FooterActivities")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-lg border-l-2 border-white pl-2 hover:pl-4 delay-100 duration-300"
                                href="iletisim"
                            >
                                {t("FooterContact")}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex w-2/6 max-lg:w-full max-lg:mt-5 max-lg:justify-start h-60 justify-end items-starts">
                    <ul className="text-white flex flex-col gap-2">
                        <li>
                            <h2 className="font-bold text-2xl text-white mb-3">
                                {t("FooterContactİnfo")}
                            </h2>
                        </li>
                        <li className="flex justify-start items-center gap-3">
                            <FaPhone />
                            <a href="tel:0555 831 30 66" target="blank">
                                0555 831 30 66
                            </a>
                        </li>
                        <li className="flex justify-start items-center gap-3">
                            <FaWhatsapp />
                            <a href="https://wa.me/905332014873" target="blank">
                                0533 201 48 73
                            </a>
                        </li>
                        <li className="flex justify-start items-center gap-3">
                            <MdMailOutline />
                            <a href="mailto:info@niksametal.com" target="blank">
                                info@niksametal.com
                            </a>
                        </li>
                        <li className="flex justify-start items-center gap-3">
                            <FaMapMarkerAlt />
                            <p>
                                Hacıvat Mh. 5. Aksu Sk. No: 41/7 Yıldırım /
                                BURSA
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
