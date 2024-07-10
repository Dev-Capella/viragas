import React, { useEffect, useState } from "react";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";
import { IoTimeOutline } from "react-icons/io5";
import { parse, format } from "date-fns";
import { tr, enUS } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
const NewsHome = () => {
    const [data, setData] = useState(null);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const [locale, setLocale] = useState(tr);

    useEffect(() => {
        if (i18n.language === "tr") {
            setLocale(tr);
        } else {
            setLocale(enUS); // İngilizce için enUS locale kullanıldı
        }
    }, [i18n.language]);

    const getSlogan = async () => {
        const result = await generalService.getNewsData(i18n.language);
        const firstThreeResults = result.slice(0, 3);
        setData(firstThreeResults);
    };
    const DateFormatter = (dateStr) => {
        // Tarih dizesini JavaScript Date nesnesine çevirme
        const date = parse(dateStr, "yyyy-MM-dd HH:mm:ss", new Date());

        // Geçerli bir tarih olup olmadığını kontrol etme
        if (isNaN(date)) {
            return <p>Geçersiz tarih</p>;
        }

        // İstenen formatta tarihi oluşturma
        const formattedDate = format(date, "d MMMM yyyy", { locale });
        return formattedDate;
    };
    useEffect(() => {
        getSlogan();
    }, [i18n.language]);
    return (
        <div className="container mx-auto py-8">
            <div className="relative flex justify-center items-center my-16">
                <span className="absolute text-9xl opacity-10 z-0 whitespace-nowrap text-[#979797] font-black max-md:hidden ">
                    VİRA GAS
                </span>
                <span className="text-6xl max-lg:text-6xl flex justify-center font-extrabold text-[#303849] -mb-3">
                    {t("News")}
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {data !== null &&
                    data.map((item, i) => (
                        <div key={i} className="bg-white">
                            <div className="w-full h-auto relative">
                                <div className="absolute w-full h-full top-0 left-0 hover:bg-[#343100] opacity-30 duration-300  delay-100 cursor-pointer" />
                                <img
                                    className="w-full h-full object-cover"
                                    src={item.image}
                                    alt="Vira Gas Spring"
                                />
                            </div>
                            <div className="flex justify-start gap-4 items-center font-medium my-2">
                                <IoTimeOutline className="text-[#343280] text-2xl" />{" "}
                                <p>{DateFormatter(item.created_at)}</p>
                            </div>
                            <h2 className="text-xl my-2  text-justify text-gray-700  duration-300  delay-100 cursor-pointer">
                                {item.title}
                            </h2>
                            <div className="flex max-sm:justify-center max-sm:items-center">
                                <button
                                    onClick={() =>
                                        navigate(`/haberler/${item.slug}`)
                                    }
                                    className="mt-3 max-sm:w-full bg-[#343280] hover:bg-gray-700 duration-300 delay-100 py-4 px-6 text-white   hover:text-white"
                                >
                                    {t("ReadContinue")}
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default NewsHome;
