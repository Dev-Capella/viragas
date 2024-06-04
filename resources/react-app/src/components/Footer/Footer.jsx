import React from "react";
import whitelogo from "../../assets/HeaderLogo/logo.png";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
const Footer = ({ data }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-full h-full relative">
            <div className="px-48 gap-4 flex justify-between max-lg:px-10 max-lg:py-10 max-lg:flex-wrap max-lg:justify-between py-20  flex-row bg-[#303849] w-full h-auto  items-start ">
                <div className="flex flex-col w-2/6 max-lg:w-full justify-start items-start">
                   <div className="h-10">
                        <img
                            className="w-full h-full -mt-5 mb-4"
                            src={whitelogo}
                            alt="Niksa Metal"
                        />
                   </div>
                    <div className="h-full mt-5">
                        <p className="text-white">
                            VIRA GAS SPRINGS kalıp sektöründe faaliyete başladığı
                            ilk günden itibaren ‘’sektörde olmayan’’ fiyat rekabeti,
                            servis hızı ve kalitesi, stoktan satış gibi kavramları
                            sunarak müşteri odaklılığını, ortaya koymuştur.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-2/6 max-lg:w-full justify-start items-start">
                   <div className="h-10">
                        <h2 className="font-bold text-2xl text-white mb-3">
                            {t("FooterContactİnfo")}
                        </h2>
                   </div>
                    <div className="h-full mt-5">
                    <ul className="text-white flex flex-col gap-2">
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
        </div>
    );
};

export default Footer;
