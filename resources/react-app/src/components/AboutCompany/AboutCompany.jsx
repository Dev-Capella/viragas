import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiStarMedal } from "react-icons/gi";
import { GiFlyingTarget } from "react-icons/gi";
import { MdFactory } from "react-icons/md";
import { GiFlyingFlag } from "react-icons/gi";
import { useTranslation } from "react-i18next";
const AboutCompany = () => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    return (
        <div className="mt-24 mb-24 w-full h-auto relative flex justify-center items-center bg-[#f8f8f8]">
            <div className="z-50 flex flex-wrap justify-center items-center px-4 py-28 gap-10 max-2xl:px-12 max-xl:px-2 max-xl:py-24  max-md:py-4  max-md:gap-10 max-xl:grid-cols-3 max-sm:grid-cols-1 max-sm:py-12">
                <div className="flex justify-start items-center flex-col w-64 h-80">
                    <div className="flex justify-center items-center flex-col">
                        <FaPeopleGroup className="w-24 h-24 " />
                        <p className="my-5 text-2xl font-bold opacity-60">
                            {t("HomePageWhoWeAre")}
                        </p>
                    </div>
                    <p className="my-2 text-base font-normal text-center">
                        {t("HomePageWhoWeAreText")}
                    </p>
                </div>
                <div className="flex justify-start items-center flex-col w-64 h-80">
                    <div className="flex justify-center items-center flex-col">
                        <GiFlyingTarget className="w-24 h-24" />
                        <p className="my-5 text-2xl font-bold opacity-60">
                            {t("HomePageMission")}
                        </p>
                    </div>

                    <p className="my-2 text-base font-normal text-center">
                        {t("HomePageMissionText")}
                    </p>
                </div>
                <div className="flex justify-start items-center flex-col w-64 h-80">
                    <div className="flex justify-center items-center flex-col">
                        <GiFlyingFlag className="w-24 h-24" />
                        <p className="my-5 text-2xl font-bold opacity-60">
                            {t("HomePageVision")}
                        </p>
                    </div>

                    <p className="my-2 text-base font-normal text-center">
                        {t("HomePageVisionText")}
                    </p>
                </div>
                <div className="flex justify-start items-center flex-col w-64 h-80">
                    <div className="flex justify-center items-center flex-col">
                        <MdFactory className="w-24 h-24" />
                        <p className="my-5 text-2xl font-bold opacity-60">
                            {t("HomePageProductionFacility")}
                        </p>
                    </div>

                    <p className="my-2 text-base font-normal text-center">
                        {t("HomePageProductionFacilityText")}
                    </p>
                </div>
                <div className="flex justify-start items-center flex-col w-64 h-80">
                    <div className="flex justify-center items-center flex-col">
                        <GiStarMedal className="w-24 h-24" />
                        <p className="my-5 text-2xl font-bold opacity-60">
                            {t("HomePageQuality")}
                        </p>
                    </div>

                    <p className="my-2 text-base font-normal text-center">
                        {t("HomePageQualityText")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;
