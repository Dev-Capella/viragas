import React, { useEffect, useState } from "react";
import generalService from "../../services/generalService";
const ReferancesComponent = () => {
    const [data, setData] = useState();

    const getData = async () => {
        const result = await generalService.getReferance();
        console.log(result);
        setData(result);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="container mx-auto my-10">
            <div className="flex flex-wrap justify-start">
                {data?.map((item, i) => (
                    <div
                        key={i}
                        className="w-1/4 h-96 max-sm:h-44 max-lg:w-2/4  p-4 flex flex-col justify-center items-center "
                    >
                        <img
                            className="cursor-pointer w-full h-full"
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
