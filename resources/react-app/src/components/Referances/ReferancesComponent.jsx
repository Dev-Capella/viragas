import React, { useEffect, useState } from "react";
import generalService from "../../services/generalService";
const ReferancesComponent = () => {
    const [data, setData] = useState();

    const getData = async () => {
        const result = await generalService.getReferance();

        setData(result);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="container mx-auto my-10">
            <div className="flex flex-wrap justify-start gap-4 max-xl:gap-6 max-sm:justify-center">
                {data?.map((item, i) => (
                    <div
                        key={i}
                        className="w-[19%] h-60 shadow-xl rounded-md max-sm:h-44 max-sm:w-[46%] max-sm:p-4 max-lg:w-[48%] max-xl:w-[23%] p-12 flex flex-col justify-center items-center "
                    >
                        <img
                            className="cursor-pointer w-full h-full object-contain"
                            alt={item.image_alt}
                            src={item.image}
                            width={288}
                            height={312}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReferancesComponent;
