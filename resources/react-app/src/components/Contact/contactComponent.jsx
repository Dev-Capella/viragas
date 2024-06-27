import React, { useEffect, useRef, useState } from "react";
import ContactForm from "../../components/Contact/contactForm";
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import generalService from "../../services/generalService";
const ContactComponent = () => {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Element görünür hale geldiğinde
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0 } // Elementin yarıdan fazlası göründüğünde
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            // Komponent kaldırıldığında observer'ı temizle
            observer.disconnect();
        };
    }, []);

    return (
        <div className=" border-radius-6px box-shadow-double-large flex flex-col justify-center w-full items-center mt-10  relative z-10">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : -100,
                }}
                transition={{ duration: 1 }}
                className="flex justify-between items-start w-full my-5 mt-10 flex-col"
            >
                <div
                    ref={contactRef}
                    className="w-full flex justify-center items-center relative"
                >
                    <div className="container mx-auto px-5 flex justify-between items-center max-md:flex-col">
                        <div className="flex flex-col justify-center items-center my-5 w-2/6 max-md:w-full">
                            <div className="w-24 h-24 bg-white shadow-2xl rounded-full flex justify-center items-center relative">
                                <BsTelephone className="text-3xl " />
                                <div className="absolute right-0 top-0 circle pulse bg-orange-500"></div>
                            </div>
                            <div className="w-80 h-20 bg-white shadow-2xl flex justify-center items-center p-4 rounded max-sm:w-full max-lg:w-56">
                                <a
                                    className="text-center font-medium"
                                    href="tel:+902244824427"
                                >
                                    0224 482 44 27
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center my-5 w-2/6 max-md:w-full">
                            <div className="w-24 h-24 bg-white shadow-2xl rounded-full flex justify-center items-center relative">
                                <IoMailUnreadOutline className="text-3xl" />
                                <div className="absolute right-0 top-0 circle pulse bg-orange-500"></div>
                            </div>
                            <div className="w-80 h-20 bg-white shadow-2xl flex justify-center items-center p-4 rounded max-sm:w-full max-lg:w-56">
                                <a
                                    className="text-center font-medium"
                                    href="mailto:sales@viragas.com"
                                >
                                    sales@viragas.com
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center my-5 w-2/6 max-md:w-full">
                            <div className="w-24 h-24 bg-white shadow-2xl rounded-full flex justify-center items-center relative">
                                <FaMapMarkerAlt className="text-3xl " />
                                <div className="absolute right-0 top-0 circle pulse bg-orange-500"></div>
                            </div>
                            <div className="w-80 h-20 bg-white shadow-2xl flex justify-center items-center p-4 rounded max-sm:w-full max-lg:w-56">
                                <p className="text-center max-lg:text-[0.8rem] font-medium">
                                    Çalı Sanayi Bölgesi Karaali Mah. 7. Sokak
                                    No:19 Çalı / Nilüfer 16370 BURSA /TÜRKİYE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <ContactForm />
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.8064538351641!2d28.92843892064158!3d40.1737720478578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca10e9d95a85a7%3A0x8e18a1adc915ad2f!2sVira!5e0!3m2!1str!2str!4v1717938894248!5m2!1str!2str"
                    width="100%"
                    height="500"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    alt="Vira Gas Spring"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactComponent;
