import React from "react";
import "../../../../../node_modules/flag-icons/css/flag-icons.min.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const OurDealersComponent = () => {
    const { t, i18n } = useTranslation();
    const europeCountry = [
        { code: "de", name: t("Almanya") },
        { code: "be", name: t("Belcika") },
        { code: "si", name: t("Slovenya") },
        { code: "fr", name: t("Fransa") },
        { code: "it", name: t("Italya") },
        { code: "pt", name: t("Portekiz") },
        { code: "cz", name: t("CekCumhuriyeti") },
        { code: "at", name: t("Avusturya") },
        { code: "dk", name: t("Danimarka") },
        { code: "sk", name: t("Slovakya") },
        { code: "hu", name: t("Macaristan") },
        { code: "no", name: t("Norvec") },
        { code: "gb", name: t("BirlesikKrallık") },
        { code: "ro", name: t("Romanya") },
        // Diğer ülkeler buraya eklenebilir
    ];

    const worldCountry = [
        { code: "ar", name: t("Arjantin") },
        { code: "cn", name: t("Çin") },
        { code: "in", name: t("Hindistan") },
        { code: "jp", name: t("Japonya") },
        { code: "sg", name: t("Singapur") },
        { code: "tr", name: t("Türkiye") },
        { code: "tw", name: t("Tayvan") },
        { code: "br", name: t("Brezilya") },
        { code: "us", name: t("Amerika") },
        { code: "ir", name: t("İran") },
        { code: "mx", name: t("Meksika") },
        { code: "za", name: t("GüneyAfrika") },
        { code: "kr", name: t("Kore") },
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,

            translateY: 20,
        },
        visible: {
            opacity: 1,
            translateY: 0,
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 2, duration: 1 }}
            className="flex flex-col container mx-auto pt-12 w-full"
        >
            <span className="text-5xl pl-2 mb-4 max-sm:flex max-sm:text-4xl max-sm:justify-center ">
                Dünyada
            </span>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="flag-container flex flex-row flex-wrap w-full mb-12 max-sm:justify-center"
            >
                {worldCountry.map(({ code, name }) => (
                    <motion.div
                        variants={item}
                        key={code}
                        className="flex flex-col items-center m-2"
                    >
                        <span
                            className={`fi fi-${code} w-44 h-32 object-contain cursor-pointer max-md:w-44 max-xl:w-32 max-2xl:w-48`}
                        ></span>
                        <span className="text-lg p-2">{name}</span>
                    </motion.div>
                ))}
            </motion.div>
            <span className="text-5xl pl-2 mb-4 max-sm:text-4xl max-sm:flex max-sm:justify-center">
                Avrupada
            </span>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="flag-container flex flex-row flex-wrap mb-16 w-full max-sm:justify-center"
            >
                {europeCountry.map(({ code, name }) => (
                    <motion.div
                        variants={item}
                        key={code}
                        className="flex flex-col items-center m-2"
                    >
                        <span
                            className={`fi fi-${code} w-44 h-32 object-contain cursor-pointer max-md:w-44 max-xl:w-32 max-2xl:w-48`}
                        ></span>
                        <span className="text-lg p-2"> {name} </span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default OurDealersComponent;
