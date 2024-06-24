import React from "react";
import { motion } from "framer-motion";
import LoadingPhoto from "../../assets/LoadingPage/viralogo23.png";
const Loading = () => {
    return (
        <div className="fixed top-0 left-0 bg-white h-screen w-full flex items-center opacity-100 justify-center z-[99999999]">
            <div className="flex flex-col w-full h-auto justify-center items-center gap-8">
                <div>
                    <motion.img
                        initial={{ scale: 1.1, opacity: 1 }} //Animasyon başlamadan önce
                        animate={{ scale: 0.1, opacity: 0 }} //Animasyon başladıktan sonra
                        transition={{ duration: 1 }}
                        src={LoadingPhoto}
                        alt="HedarLogo"
                        //Width ayarları sonra yapılcak.
                    ></motion.img>
                </div>
            </div>
        </div>
    );
};

export default Loading;
