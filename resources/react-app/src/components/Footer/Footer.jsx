import React from "react";
import FooterLogo from "../../assets/Footer/downloa.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineFax } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Footer = ({ data }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-full h-full flex flex-col bg-[#363384]">
            <div className="pt-24 pb-32 flex flex-col w-full max-sm:px-0 max-sm:py-8 max-sm:flex-col max-lg:px-0 max-lg:pb-12 max-xl:px-8">
                <div className="flex flex-row w-full container mx-auto gap-40 max-md:flex-col max-md:gap-8 max-md:items-center max-xl:gap-0 max-2xl:gap-20">
                    <div className="flex flex-col w-1/3 px-4 max-sm:w-full max-md:items-center max-2xl:justify-center">
                        <div className="w-72 object-contain max-xl:w-full ">
                            <img
                                src={FooterLogo}
                                alt="Vira Gas"
                                className="w-full h-full object-contain"
                            ></img>
                        </div>
                    </div>
                    <div className="flex flex-row w-full gap-40 max-md:flex-col max-md:gap-0 max-xl:flex-col max-xl:gap-12 max-2xl:gap-12">
                        <div className="flex flex-col px-4 w-full justify-center items-center gap-4 max-sm:w-full max-md:py-8">
                            <ul className="list-none flex flex-row gap-10 text-white font-semibold max-md:flex-wrap max-md:justify-center max-md:gap-3 ">
                                <li className=" text-lg max-md:text-[1rem]">
                                    <Link
                                        to="/"
                                        className="text-with-underline"
                                    >
                                        {t("FooterHome")}
                                    </Link>
                                </li>
                                <li className=" text-lg max-md:text-[1rem]">
                                    <Link
                                        to="/kurumsal"
                                        className="text-with-underline "
                                    >
                                        {t("FooterInstitutional")}
                                    </Link>
                                </li>
                                <li className=" text-lg max-md:text-[1rem]">
                                    <Link
                                        to="/urunler"
                                        className="text-with-underline "
                                    >
                                        {t("FooterProduct")}
                                    </Link>
                                </li>
                                <li className=" text-lg max-md:text-[1rem]">
                                    <Link
                                        to="/haberler"
                                        className="text-with-underline "
                                    >
                                        {t("FooterNews")}
                                    </Link>
                                </li>
                                <li className=" text-lg max-md:text-[1rem]">
                                    <Link
                                        to="/bayilerimiz"
                                        className="text-with-underline "
                                    >
                                        {t("FooterOurDealers")}
                                    </Link>
                                </li>
                            </ul>
                            <ul className="list-none flex flex-row text-white gap-10 font-semibold max-md:flex-wrap max-md:justify-center max-md:gap-4">
                                <li className=" text-lg max-md:text-[1rem]">
                                    <Link
                                        to="/katalog"
                                        className="text-with-underline "
                                    >
                                        {t("FooterCatalog")}
                                    </Link>
                                </li>
                                <li className=" text-lg max-md:text-[1rem]">
                                    <Link
                                        to="/referanslar"
                                        className="text-with-underline "
                                    >
                                        {t("FooterReference")}
                                    </Link>
                                </li>
                                <li className=" text-lg max-md:text-[1rem]">
                                    <Link
                                        to="/faaliyetler"
                                        className="text-with-underline "
                                    >
                                        {t("FooterActivities")}
                                    </Link>
                                </li>
                                <li className=" text-lg max-md:text-[1rem]">
                                    <Link
                                        to="/iletisim"
                                        className="text-with-underline "
                                    >
                                        {t("FooterContact")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col px-4 w-full max-sm:pb-8  justify-center items-center">
                            <ul className="list-none text-white flex flex-col gap-4">
                                <li className=" text-lg flex flex-row items-center gap-2 max-md:text-center max-xl:text-center">
                                    <p className="max-md:text-[1rem]">
                                        Çalı Sanayi Bölgesi Karaali Mah. 7.
                                        Sokak No:19 Çalı Nilüfer /Bursa /Türkiye
                                    </p>
                                </li>

                                <li className=" text-lg flex flex-row items-center gap-2 max-md:justify-center max-xl:justify-center">
                                    <MdOutlinePhoneInTalk size={24} />
                                    <a
                                        href="tel:+902244824427"
                                        className="max-md:text-[1rem]"
                                    >
                                        (+90) 224 482 44 27
                                    </a>
                                </li>
                                <li className=" text-lg flex flex-row items-center gap-2 max-md:justify-center max-xl:justify-center">
                                    <MdOutlineFax size={24} />
                                    <a
                                        href="fax:+902244824427"
                                        className="max-md:text-[1rem]"
                                    >
                                        (+90) 224 482 44 27
                                    </a>
                                </li>
                                <li className=" text-lg flex flex-row items-center gap-2 max-md:justify-center max-xl:justify-center">
                                    <CiMail size={24} />
                                    <a
                                        href="mailto:sales@viragas.com"
                                        className="max-md:text-[1rem]"
                                    >
                                        sales@viragas.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t flex flex-row justify-between container mx-auto py-4 max-xl:px-4">
                <div>
                    <p className="text-white font-light max-md:text-[0.9rem]">
                        © 2024 VİRA Gas Springs, tüm hakları saklıdır.
                    </p>
                </div>
                <div className="flex flex-row">
                    <ul className="flex flex-row gap-4 items-center justify-center">
                        <li>
                            <Link
                                to={"https://www.facebook.com/viragassprings"}
                                target="blank"
                            >
                                <FaFacebookF
                                    size={18}
                                    color="white"
                                    className="hover:text-blue-500 cursor-pointer transition-colors duration-300"
                                />
                            </Link>
                        </li>
                        <li>
                            <BsTwitterX
                                size={18}
                                color="white"
                                className="hover:text-gray-400 cursor-pointer transition-colors duration-300"
                            />
                        </li>
                        <li>
                            <Link
                                to={"https://www.instagram.com/viragassprings/"}
                                target="blank"
                            >
                                <FaInstagram
                                    size={18}
                                    color="white"
                                    className="hover:text-orange-700 cursor-pointer transition-colors duration-300"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
