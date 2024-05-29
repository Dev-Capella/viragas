import React from "react";

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 bg-white h-screen w-full flex items-center justify-center z-[99999999]">
            <div className="relative w-full sm:w-3/4 md:w-2/4 lg:w-1/4 h-1/3 flex items-center justify-center">
                <div className="h-8 w-8 flex items-center justify-center bg-[#343280] rounded-full animate-bounce"></div>
                <div
                    className="h-8 w-8 flex items-center justify-center bg-[#343280] rounded-full animate-bounce"
                    style={{ animationDelay: "-0.32s" }}
                ></div>
                <div
                    className="h-8 w-8 flex items-center justify-center bg-[#343280] rounded-full animate-bounce"
                    style={{ animationDelay: "-0.64s" }}
                ></div>
            </div>
        </div>
    );
};

export default Loading;
