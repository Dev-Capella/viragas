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
import { CiInstagram, CiMail } from "react-icons/ci";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Header = ({ data }) => {
    const [navbar, setNavbar] = useState(false);
    const [navItem, setNavItem] = useState(" ");
    const [langOpen, setLangOpen] = useState(false);
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
        console.log(i18n.language);
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
                            <div className="hidden max-sm:block">
                                <div className="flex flex-row w-full h-12 px-4 bg-[#cecdcc]">
                                    <ul className="flex flex-row w-full h-full justify-between items-center">
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
                                        <li className="flex flex-row items-center gap-2">
                                            <FaPhoneAlt className="text-orange-600 text-lg" />
                                            <a
                                                href="tel:+902244824427"
                                                className="hover:text-[#334162] transition-colors duration-300 text-[0.8rem]"
                                            >
                                                0224 482 44 27
                                            </a>
                                        </li>
                                        <li className="flex flex-row items-center gap-2">
                                            <IoMdMail className="text-orange-600 text-lg" />
                                            <a
                                                href="mailto:sales@viragas.com"
                                                className="hover:text-[#334162] transition-colors duration-300 text-[0.8rem]"
                                            >
                                                sales@viragas.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full border-b border-[#ffffff1a] max-sm:hidden">
                                <div className="w-[85%] flex justify-between items-center text-white text-sm  mx-auto px-2  max-xl:mx-0 max-xl:px-0">
                                    <div className="border-r  border-[#ffffff1a] p-2 flex justify-start items-center">
                                        <FaMapMarkerAlt className="text-orange-600 text-lg mr-2" />
                                        Çalı Sanayi Bölgesi Karaali Mah. 7.
                                        Sokak No:19 Çalı / Nilüfer 16370 BURSA
                                        /TÜRKİYE
                                    </div>
                                    <div className="border-r  border-[#ffffff1a] p-2 flex justify-start items-center cursor-pointer">
                                        <IoMdMail className="text-orange-600 text-lg mr-2" />
                                        <a
                                            href="mailto:sales@viragas.com"
                                            target="blank"
                                        >
                                            sales@viragas.com
                                        </a>
                                    </div>
                                    <div className="border-r border-[#ffffff1a] p-2 flex justify-start items-center cursor-pointer">
                                        <FaPhoneAlt className="text-orange-600 text-lg mr-2" />
                                        <a href="tel:+9022448244271">
                                            0224 482 44 27
                                        </a>
                                    </div>
                                    <div className="border-r border-[#ffffff1a] p-2 flex justify-start items-center">
                                        <div className="flex justify-center w-full">
                                            <a
                                                href="https://www.instagram.com/viragassprings/"
                                                target="blank"
                                            >
                                                <AiFillInstagram className="text-orange-600 text-lg mr-2 hover:scale-110" />
                                            </a>
                                            <a
                                                href="https://www.facebook.com/viragassprings/"
                                                target="blank"
                                            >
                                                <FaFacebookF className="text-orange-600 text-lg mr-2 hover:scale-110" />
                                            </a>
                                            <a href="/" target="blank">
                                                <BsTwitterX className="text-orange-600 text-lg mr-2 hover:scale-110" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="border-r border-[#ffffff1a] p-2 flex justify-start items-center">
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

                    <div className="mx-auto px-2   max-xl:mx-0 max-xl:px-0 ">
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
                                        className={`flex justify-between items-center max-xl:text-sm max-lg:px-0 ${
                                            navbar ? "" : "mt-8"
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
                                                        src={HeaderLogo}
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
                                                        src={whitelogo}
                                                        alt="Vira Gas"
                                                    />
                                                </a>
                                            </div>
                                        )}

                                        <div className="w-full flex justify-end items-center text-white gap-12 max-xl:gap-8 max-lg:gap-2">
                                            <a
                                                className={
                                                    navItem === "/"
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
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
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
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
                                                className={
                                                    navItem === "/urunler"
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
                                                              navbar
                                                                  ? "text-black text-with-underline2"
                                                                  : "text-with-underline"
                                                          }`
                                                }
                                                href="/urunler"
                                            >
                                                {t("HeaderProduct")}
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/bayilerimiz"
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
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
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
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
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
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
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline text-with-underline2"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
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
                                                        ? `text-base font-semibold underline-offset-8 ${
                                                              navbar
                                                                  ? "text-black underline"
                                                                  : "underline"
                                                          }`
                                                        : `text-base font-medium ${
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
                            open ? "opacity-95" : "opacity-0"
                        }`}
                    >
                        <div className="space-y-1 px-2 pt-2 pb-3 navbar-open-close">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    target={item.target ? "_blank" : ""}
                                    className="block px-3 py-2 rounded-md  font-medium"
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
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Header;
