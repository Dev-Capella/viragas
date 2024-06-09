import React, { useEffect, useState } from "react";
import generalService from "../../services/generalService";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
function CatalogComponent() {
    const { t, i18n } = useTranslation();

    const [data, setData] = useState();
    const getData = async () => {
        const result = await generalService.getCatalog(i18n.language);
        setData(result);
        console.log(result);
    };
    useEffect(() => {
        getData();
    }, [i18n.language]);
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-2">
            <div className="flex justify-start items-start flex-wrap my-5 ">
                {data?.map((item, i) => (
                    <a
                        key={i}
                        className="w-[19%] max-md:w-[45%] flex flex-col justify-start items-start"
                        href={item.catalog_url}
                        target="blank"
                    >
                        <img
                            className="w-full h-full p-2 cursor-pointer"
                            src={item.image}
                            alt="test"
                        />
                        <p className="text-base p-2 max-sm:text-sm font-medium cursor-pointer">
                            {item.name}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default CatalogComponent;
