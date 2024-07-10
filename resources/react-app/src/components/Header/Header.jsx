import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderLogo from "../../assets/HeaderLogo/logo.png";
import whitelogo from "../../assets/HeaderLogo/logo.png";
import generalService from "../../services/generalService";
import { AiFillInstagram } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import turkishflag from "../../assets/HeaderFlag/turkishflag.jpg";
import englishflag from "../../assets/HeaderFlag/englishflag.jpg";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import WhiteLogoo from "../../assets/Footer/yeni-logo.png";
const Header = ({ data }) => {
    const [navbar, setNavbar] = useState(false);
    const [navItem, setNavItem] = useState(" ");
    const [langOpen, setLangOpen] = useState(false);
    const [navModal, setNavModal] = useState(false);
    const { t, i18n } = useTranslation();

    const navigate = useNavigate();
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    /*Bayrak değiştirme*/

    const changeLanguagee = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };
    const slug = window.location.pathname;
    useEffect(() => {
        setNavItem(slug);
    }, [slug]);
    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    const isMobile = window.innerWidth <= 768;

    const navigation = [
        { name: "Anasayfa", href: "/" },
        { name: "Kurumsal", href: "/kurumsal" },
        { name: "Ürünlerimiz", href: "/urunler" },
        { name: "Haberler", href: "/haberler" },
        { name: "Bayilerimiz", href: "/bayilerimiz" },
        {
            name: "Katalog",
            href: "/katalog",
        },
        { name: "Referanslar", href: "/referanslar" },
        { name: "Faaliyetler", href: "/faaliyetler" },
        { name: "İletişim", href: "/iletisim" },
    ];

    return (
        <Disclosure
            as="nav"
            className={`absolute top-0 z-50 w-full max-sm:relative max-md:bg-white ${
                !isMobile && navbar
                    ? "sticky top-0 bg-white shadow-md z-[99999] transition-all duration-500"
                    : ""
            }`}
            style={{ top: !isMobile && navbar ? "0" : "" }}
        >
            {({ open }) => (
                <>
                    {!navbar && (
                        <>
                            <div className="hidden max-md:block">
                                <div className="flex flex-row w-full h-12 px-4 bg-[#363384]">
                                    <ul className="flex flex-row w-full h-full justify-between items-center text-white">
                                        <li className="flex flex-row items-center gap-2">
                                            <FaPhoneAlt
                                                color="white"
                                                className=" text-lg"
                                            />
                                            <a
                                                href="tel:+902244824427"
                                                className="text-[0.8rem]"
                                            >
                                                (+90) 224 482 44 27
                                            </a>
                                        </li>
                                        <li className="flex flex-row items-center gap-2">
                                            <IoMdMail
                                                color="white"
                                                className=" text-lg"
                                            />
                                            <a
                                                href="mailto:sales@viragas.com"
                                                className="text-[0.8rem]"
                                            >
                                                sales@viragas.com
                                            </a>
                                        </li>
                                        <li className="items-center text-[0.8rem]">
                                            {i18n.language === "en" ? (
                                                <img
                                                    className="w-6 cursor-pointer hover:scale-110"
                                                    src={turkishflag}
                                                    alt="Vira Gas"
                                                    onClick={() =>
                                                        changeLanguagee("tr")
                                                    }
                                                />
                                            ) : (
                                                <img
                                                    className="w-6 cursor-pointer hover:scale-110"
                                                    src={englishflag}
                                                    alt="Vira Gas"
                                                    onClick={() =>
                                                        changeLanguagee("en")
                                                    }
                                                />
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full border-b border-[#ffffff1a] max-md:hidden">
                                <div className="w-[85%] flex justify-between items-center text-white text-sm  mx-auto px-2  max-xl:mx-0 max-xl:px-8 max-xl:w-full">
                                    <div className="border-r  border-[#ffffff1a]  flex justify-start items-center w-full">
                                        <FaMapMarkerAlt
                                            color="white"
                                            className="text-lg mr-2"
                                        />
                                        <p className="max-lg:text-[0.8rem]">
                                            Çalı Sanayi Bölgesi Karaali Mah. 7.
                                            Sokak No:19 Çalı / Nilüfer 16370
                                            BURSA /TÜRKİYE
                                        </p>
                                    </div>
                                    <div className="border-r  border-[#ffffff1a]  flex justify-center items-center cursor-pointer w-full">
                                        <IoMdMail
                                            color="white"
                                            className="text-lg mr-2 "
                                        />
                                        <a
                                            href="mailto:sales@viragas.com"
                                            target="blank"
                                        >
                                            sales@viragas.com
                                        </a>
                                    </div>
                                    <div className="border-r border-[#ffffff1a]  flex justify-center items-center cursor-pointer w-full max-xl:w-2/3">
                                        <FaPhoneAlt
                                            color="white"
                                            className="text-lg mr-2"
                                        />
                                        <a href="tel:+9022448244271">
                                            0224 482 44 27
                                        </a>
                                    </div>
                                    <div className="border-r border-[#ffffff1a]  flex justify-center items-center w-full max-xl:w-1/3">
                                        <div className="flex justify-center w-full">
                                            <a
                                                href="https://www.facebook.com/viragassprings/"
                                                target="blank"
                                                className="pr-4"
                                            >
                                                <FaFacebookF
                                                    size={18}
                                                    color="white"
                                                    className="hover:scale-110 cursor-pointer"
                                                />
                                            </a>
                                            <a
                                                href="/"
                                                target="blank"
                                                className="pr-4"
                                            >
                                                <BsTwitterX
                                                    size={18}
                                                    color="white"
                                                    className="hover:scale-110 cursor-pointer"
                                                />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/viragassprings/"
                                                target="blank"
                                            >
                                                <FaInstagram
                                                    size={18}
                                                    color="white"
                                                    className="hover:scale-110 cursor-pointer"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="border-r border-[#ffffff1a]  flex justify-center items-center w-1/6">
                                        {i18n.language === "en" ? (
                                            <img
                                                className="w-6 cursor-pointer hover:scale-110"
                                                src={turkishflag}
                                                alt="Vira Gas"
                                                onClick={() =>
                                                    changeLanguagee("tr")
                                                }
                                            />
                                        ) : (
                                            <img
                                                className="w-6 cursor-pointer hover:scale-110"
                                                src={englishflag}
                                                alt="Vira Gas"
                                                onClick={() =>
                                                    changeLanguagee("en")
                                                }
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="mx-auto px-2 max-xl:mx-0 max-xl:px-0 mt-8 max-sm:mt-0">
                        <div
                            className={
                                navbar
                                    ? "relative flex sm:h-auto h-auto items-center justify-between transition-all duration-500 "
                                    : "relative flex sm:h-20 h-16 items-center justify-between"
                            }
                        >
                            <div className="absolute flex-row inset-y-0 left-0 flex items-center md:hidden justify-between w-full px-6">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex  items-center justify-center p-2 text-slate-700 ring-2 ring-inset ring-white max-md:mt-2">
                                    <div
                                        className={`hamburger-menu ${
                                            open ? "open" : ""
                                        }`}
                                    >
                                        <span className="line"></span>
                                        <span className="line"></span>
                                        <span className="line"></span>
                                    </div>
                                </Disclosure.Button>
                                <img
                                    className="block lg:hidden h-12"
                                    src={HeaderLogo}
                                    onClick={() => navigate("/")}
                                    alt="Vira Gas"
                                />
                            </div>

                            <div className="flex items-center justify-center sm:items-stretch sm:justify-around text-[#191919] font-semibold w-full ">
                                <div className="hidden md:block w-[85%] max-xl:w-full">
                                    <div
                                        className={`flex justify-between items-center max-xl:text-sm max-lg:px-4 py-4 ${
                                            navbar ? "" : ""
                                        } max-xl:px-10`}
                                    >
                                        {navbar ? (
                                            <div className="flex flex-shrink-0 items-center max-xl:w-32 w-52">
                                                <a href="/">
                                                    <img
                                                        className="block w-auto lg:hidden"
                                                        src={HeaderLogo}
                                                        alt="Vira Gas"
                                                    />
                                                </a>
                                                <a href="/">
                                                    <img
                                                        className="hidden w-auto lg:block"
                                                        src={
                                                            navbar
                                                                ? HeaderLogo
                                                                : WhiteLogoo
                                                        }
                                                        alt="Vira Gas"
                                                    />
                                                </a>
                                            </div>
                                        ) : (
                                            <div className="flex flex-shrink-0 items-center max-xl:w-32 w-52">
                                                <a href="/">
                                                    <img
                                                        className="block w-auto lg:hidden"
                                                        src={whitelogo}
                                                        alt="Vira Gas"
                                                    />
                                                </a>
                                                <a href="/">
                                                    <img
                                                        className="hidden w-auto lg:block"
                                                        src={
                                                            navbar
                                                                ? HeaderLogo
                                                                : WhiteLogoo
                                                        }
                                                        alt="Vira Gas"
                                                    />
                                                </a>
                                            </div>
                                        )}

                                        <div className="w-full flex justify-end items-center text-white gap-10 max-xl:gap-4 max-lg:gap-2">
                                            <a
                                                className={
                                                    navItem === "/"
                                                        ? `text-base font-semibold underline-offset-8 max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/"
                                            >
                                                {t("HeaderHome")}
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/kurumsal"
                                                        ? `text-base font-semibold underline-offset-8 max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/kurumsal"
                                            >
                                                {t("HeaderAboutUs")}
                                            </a>
                                            <a
                                                onMouseEnter={() =>
                                                    setNavModal(true)
                                                }
                                                onMouseLeave={() =>
                                                    setNavModal(false)
                                                }
                                                className={
                                                    navItem === "/urunler"
                                                        ? `text-base font-semibold underline-offset-8 relative flex flex-col justify-center items-center max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black relative underline flex flex-col justify-center items-center"
                                                                  : "underline relative flex flex-col justify-center"
                                                          }`
                                                        : `text-base font-medium  relative max-lg:text-[0.9rem] flex flex-col justify-center items-center ${
                                                              navbar
                                                                  ? "text-black relative "
                                                                  : "relative flex flex-col justify-center"
                                                          }`
                                                }
                                                href="/urunler"
                                            >
                                                <span>
                                                    {t("HeaderProduct")}
                                                </span>

                                                {navModal && (
                                                    <div class="absolute bg-white top-6 w-max flex flex-col gap-3 border border-gray-400 ">
                                                        <a
                                                            href="/urunler/kalip-gazli-yaylari"
                                                            className="text-black hover:bg-[#343280] hover:text-white"
                                                        >
                                                            <p className="  p-2">
                                                                {t(
                                                                    "ProductsKalıpGaz"
                                                                )}
                                                            </p>
                                                        </a>
                                                        <a
                                                            href="/urunler/gazli-yay-baglanti-elemanlari"
                                                            className="text-black hover:bg-[#343280] hover:text-white"
                                                        >
                                                            <p className="p-2">
                                                                {t(
                                                                    "ProductsGazlıYay"
                                                                )}
                                                            </p>
                                                        </a>
                                                        <a
                                                            href="/urunler/gazli-yay-basinc-takip-cihazi"
                                                            className="text-black hover:bg-[#343280] hover:text-white"
                                                        >
                                                            <p className=" p-2">
                                                                {t(
                                                                    "ProductsBasınc"
                                                                )}
                                                            </p>
                                                        </a>
                                                    </div>
                                                )}
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/haberler"
                                                        ? `text-base font-semibold underline-offset-8 max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/haberler"
                                            >
                                                {t("News")}
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/bayilerimiz"
                                                        ? `text-base font-semibold underline-offset-8 max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium  max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/bayilerimiz"
                                            >
                                                {t("HeaderOurDealers")}
                                            </a>
                                            <a
                                                className={
                                                    navItem === "katalog"
                                                        ? `text-base font-semibold underline-offset-8 max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/katalog"
                                            >
                                                {t("HeaderCatalog")}
                                            </a>

                                            <a
                                                className={
                                                    navItem === "/referanslar"
                                                        ? `text-base font-semibold underline-offset-8 max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/referanslar"
                                            >
                                                {t("HeaderReferance")}
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/faaliyetler"
                                                        ? `text-base font-semibold underline-offset-8 max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black underline text-with-underline2"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/faaliyetler"
                                            >
                                                {t("HeaderActivities")}
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/iletisim"
                                                        ? `text-base font-semibold underline-offset-8   max-lg:text-[0.9rem]  ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium max-lg:text-[0.9rem] ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/iletisim"
                                            >
                                                {t("HeaderContact")}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel
                        className={`md:hidden  opacity-0 duration-200 delay-200 ${
                            open ? "opacity-95 bg-white w-full" : "opacity-0"
                        }`}
                        style={{ position: "absolute", zIndex: 9999 }}
                    >
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            {navigation.map((item, key) => (
                                <Disclosure.Button
                                    key={key}
                                    onClick={() => navigate(item.href)}
                                    target={item.target ? "_blank" : ""}
                                    className="block px-3 py-2 rounded-md  font-medium w-full text-left"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            {/* <div className="flex justify-start items-center px-3 py-2 gap-5">
                                <p
                                    className={`${
                                        i18n.language === "en"
                                            ? "cursor-pointer font-bold"
                                            : "cursor-pointer hover:scale-105 duration-200 delay-200 hover:opacity-50"
                                    }`}
                                    onClick={() => changeLanguage("en")}
                                >
                                    ENG
                                </p>
                                /
                                <p
                                    className={`${
                                        i18n.language === "tr"
                                            ? "cursor-pointer font-bold"
                                            : "cursor-pointer hover:scale-105 duration-200 delay-200 hover:opacity-50"
                                    }`}
                                    onClick={() => changeLanguage("tr")}
                                >
                                    TR
                                </p>
                            </div> */}
                        </motion.div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Header;
