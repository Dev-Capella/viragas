import React from "react";
import test from "../../assets/News/test.jpg";
import { IoTimeOutline } from "react-icons/io5";
import { parse, format } from "date-fns";
import { tr } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
function NewsContent({ data }) {
    const navigate = useNavigate();
    const DateFormatter = (dateStr) => {
        // Tarih dizesini JavaScript Date nesnesine çevirme
        const date = parse(dateStr, "yyyy-MM-dd HH:mm:ss", new Date());

        // Geçerli bir tarih olup olmadığını kontrol etme
        if (isNaN(date)) {
            return <p>Geçersiz tarih</p>;
        }

        // İstenen formatta tarihi oluşturma
        const formattedDate = format(date, "d MMMM yyyy", { locale: tr });
        return formattedDate;
    };
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-md:px-5">
                {data !== null &&
                    data.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white flex flex-col justify-between items-start"
                        >
                            <div className="w-full h-auto relative">
                                <div className="absolute w-full h-full top-0 left-0 hover:bg-[#343280] opacity-30 duration-300  delay-100 cursor-pointer" />
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
                            <h2 className="text-xl my-2 font-bold  text-justify text-gray-700  duration-300  delay-100 cursor-pointer">
                                {item.title}
                            </h2>
                            <button
                                onClick={() => navigate(item.slug)}
                                className="mt-3 bg-[#343280] hover:bg-gray-700 duration-300 delay-100 py-4 px-6 text-white  hover:text-white"
                            >
                                Devamını Oku
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default NewsContent;
