import React from "react";

function NewsDetailComp({ data }) {
    return (
        data && (
            <div className="container mx-auto px-20 max-md:px-5 flex flex-col justify-start items-start mt-10 mb-5">
                <div className="w-full flex flex-col md:flex-row">
                    <div className="w-full">
                        <div className="w-1/2 h-auto float-left pr-6 pb-4 max-md:float-none max-md:w-full max-md:p-0 relative">
                            <div className="absolute w-[90%] h-[90%] bg-[#343280] opacity-40 -top-4 -left-4 z-20" />
                            <img
                                src={data?.image}
                                alt={data?.title}
                                className="w-full h-full object-cover float-left max-md:float-none relative z-40 cursor-pointer 
                                hover:-translate-y-4 hover:-translate-x-4 duration-300 delay-150 transition-transform"
                            />
                        </div>

                        <p className="my-2 text-5xl max-md:text-2xl text-gray-700 text-start pb-4 font-bold">
                            {data?.title}
                        </p>
                        <div
                            className="text-2xl font-bold danger-html-write max-md:text-justify"
                            dangerouslySetInnerHTML={{ __html: data?.content }}
                        />
                    </div>
                </div>
            </div>
        )
    );
}

export default NewsDetailComp;
