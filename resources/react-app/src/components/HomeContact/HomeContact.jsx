import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const HomeContact = () => {
    return (
        <div className="flex flex-row w-full justify-center pl-40 pr-40 mt-32 mb-32 gap-20 border-2 rounded shadow-sm  pt-6 pb-6">
            <div className="w-full flex justify-end">
                <form className="flex flex-col">
                    <input
                        className="bg-[#041c3b] rounded-lg border border-white py-2 p-2 text-white shadow-lg w-96"
                        type="text"
                        placeholder="Adınız"
                    ></input>

                    <input
                        className="bg-[#041c3b] rounded-lg border border-white py-2 p-2 text-white shadow-lg w-96"
                        type="text"
                        placeholder="Mail"
                    ></input>

                    <input
                        className="bg-[#041c3b] rounded-lg border border-white py-2 p-2 text-white shadow-lg w-96"
                        type="text"
                        placeholder="Konu"
                    ></input>

                    <textarea
                        className="bg-[#041c3b] rounded-lg border border-white py-2 p-2 text-white shadow-lg w-96"
                        type="text"
                        placeholder="Mesaj"
                    ></textarea>
                    <button className="  bg-[#041c3b] rounded-lg border border-white px-5 py-2 hover:bg-[#16365e] duration-150 hover:scale-105 text-white">
                        Gönder
                    </button>
                </form>
            </div>
            <div class="border-r-4 border-[#343280] h-500"></div>
            <div className="w-full ">
                <p className="text-5xl w-full font-bold">
                    Bizimle iletişime geç!
                </p>
                <p className="text-xl mt-4 text-[#706f7b]">
                    25 yıldan fazla tecrübemizle size hizmet etmek için
                    buradayız.
                </p>
                <p className="text-xl text-[#706f7b] ">
                    İstek , şikayet ve bilgi için bize ulaşabilirsin!
                </p>
                <ul className="mt-4">
                    <li>
                        <div className="flex flex-row gap-2 items-center">
                            <BsFillTelephoneFill />
                            <p className="font-bold"> 0555 831 30 66</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row gap-2 items-center">
                            <IoLogoWhatsapp />
                            <p className="font-bold"> 0533 201 48 73</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row gap-2 items-center">
                            <IoIosMail />
                            <p className="font-bold">info@niksametal.com</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row gap-2 items-center">
                            <FaLocationDot />
                            <p className="font-bold">
                                Hacıvat Mh. 5. Aksu Sk. No: 41/7 Yıldırım /
                                BURSA
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomeContact;
