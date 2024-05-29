import React, { useEffect, useState } from "react";
import generalService from "../../services/generalService";
import Loading from "../Loading/Loading";
import { useTranslation } from "react-i18next";

const ActivitiesComponent = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const { t, i18n } = useTranslation();

    const getData = async () => {
        const result = await generalService.getActivities(i18n.language);
        console.log(result);
        setData(result);
        setLoading(true);
    };

    useEffect(() => {
        getData();
    }, [i18n.language]);
    return false ? (
        <Loading />
    ) : (
        <div className="w-full flex justify-center">
            <div className="container mx-auto flex flex-col">
                {data?.map((item, i) => (
                    <div
                        key={i}
                        className={`w-full flex justify-between max-md:flex-col items-start my-4 max-md:px-3 ${
                            i % 2 === 0 ? "flex-row-reverse" : ""
                        }`}
                    >
                        <div className="w-1/4 max-md:w-full h-auto">
                            <img
                                className="w-full h-full object-cover"
                                src={item.image}
                                alt={item.image_alt}
                            />
                        </div>
                        <div className="w-3/4 max-md:w-full p-10 max-md:p-2">
                            <h1 className="text-xl pb-3">{item.title} </h1>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivitiesComponent;
