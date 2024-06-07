import React from "react";
import whitelogo from "../../assets/HeaderLogo/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineFax } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Footer = ({ data }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-full h-full flex flex-row  border-t">
            <div className="px-40 pt-24 pb-32 flex flex-row w-full max-sm:px-0 max-sm:py-8 max-sm:flex-col max-lg:px-0 max-lg:pb-12 max-xl:px-8 ">
                <div className="flex flex-col w-1/3 px-4 max-sm:w-full">
                    <div className="w-24">
                        <img
                            src={whitelogo}
                            alt="Vira Gas"
                            className="w-full h-full"
                        ></img>
                    </div>
                    <p className="mt-4 text-[#878898] w-[82%] leading-7">
                        VIRA GAS SPRINGS sac şekillendirme sektöründe faaliyet
                        gösteren ve 2002 yılında kalıp gazlı yayları üretmek
                        amacıyla kurulmuş bir firmadır
                    </p>
                    <div className="flex flex-row mt-4">
                        <ul className="flex flex-row gap-4 items-center justify-center">
                            <li>
                                <FaFacebookF
                                    size={18}
                                    className="hover:text-blue-500 transition-colors duration-300"
                                />
                            </li>
                            <li>
                                <BsTwitterX
                                    size={18}
                                    className="hover:text-gray-400 transition-colors duration-300"
                                />
                            </li>
                            <li>
                                <CiInstagram
                                    size={22}
                                    className="hover:text-orange-700 transition-colors duration-300"
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col px-4 w-1/5 max-sm:w-full max-sm:py-8">
                    <ul className="list-none">
                        <p className="font-semibold text-[#242e45] mb-2 text-xl">
                            Vira Gas
                        </p>
                        <li className="text-[#878898] text-lg">
                            <Link
                                to="/kurumsal"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                Kurumsal
                            </Link>
                        </li>
                        <li className="text-[#878898] text-lg">
                            <Link
                                to="/faaliyetler"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                Faaliyetler
                            </Link>
                        </li>
                        <li className="text-[#878898] text-lg">
                            <Link
                                to="/referanslar"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                Referanslar
                            </Link>
                        </li>
                        <li className="text-[#878898] text-lg">
                            <Link
                                to="/iletisim"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                İletişim
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col px-4 w-1/5 max-sm:w-full max-sm:pb-8">
                    <ul className="list-none">
                        <p className="font-semibold text-[#242e45] mb-2 text-xl">
                            Vira Gas
                        </p>
                        <li className="text-[#878898] text-lg">
                            <Link
                                to="/urunler"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                Ürünler
                            </Link>
                        </li>
                        <li className="text-[#878898] text-lg">
                            <Link
                                to="/katalog"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                Katalog
                            </Link>
                        </li>
                        <li className="text-[#878898] text-lg">
                            <Link
                                to="/bayilerimiz"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                Bayiler
                            </Link>
                        </li>
                        <li className="text-[#878898] text-lg">
                            <Link
                                to="/belgelerimiz"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                Belgelerimiz
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col px-4 w-1/5 max-sm:w-full max-sm:pb-8 max-lg:w-[22%]">
                    <ul className="list-none">
                        <p className="font-semibold text-[#242e45] mb-2 text-xl">
                            İletişim
                        </p>
                        <li className="text-[#878898] text-lg flex flex-row items-center gap-2 ">
                            <MdOutlinePhoneInTalk className="hover:text-green-500 transition-colors duration-300" />
                            <a
                                href="tel:02244824427"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                {" "}
                                0224 482 44 27{" "}
                            </a>
                        </li>
                        <li className="text-[#878898] text-lg flex flex-row items-center gap-2">
                            <MdOutlineFax className="hover:text-orange-400 transition-colors duration-300" />
                            <a
                                href="fax:02244824427"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                {" "}
                                0224 482 44 27{" "}
                            </a>
                        </li>
                        <li className="text-[#878898] text-lg flex flex-row items-center gap-2 ">
                            <CiMail className="hover:text-blue-500 transition-colors duration-300" />
                            <a
                                href="mailto:sales@viragas.com"
                                className="hover:text-[#334162] transition-colors duration-300"
                            >
                                sales@viragas.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col px-4 w-1/5 max-sm:w-full">
                    <ul className="list-none">
                        <p className="font-semibold text-[#242e45] mb-2 text-xl">
                            Adres
                        </p>
                        <li className="text-[#878898] text-base">
                            Çalı Sanayi Bölgesi Karaali Mah. 7. Sokak No:19 Çalı
                        </li>
                        <li className="text-[#878898] text-base">
                            Nilüfer 16370 BURSA
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
