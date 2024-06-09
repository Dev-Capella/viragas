import axiosInstance from "../utils/axiosClient";

const getProducts = async (value) => {
    const result = await axiosInstance.get(`get-products/${value}`);
    return result.data;
};

const getPage = async (lang, slug) => {
    const result = await axiosInstance.get(`get-page/${slug}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};

//Home Slider
const getHomeSlider = async (lang) => {
    const result = await axiosInstance.get(`get-slider`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};

//Home Product Slider
const getHomeProductSlider = async (slug) => {
    const result = await axiosInstance.get(`get-prodcut-slider`);
    return result.data;
};
const contactPost = async (data) => {
    const result = await axiosInstance.post(`contact`, data);
    return result.data;
};

//About us
const getAboutUs = async (lang) => {
    const result = await axiosInstance.get(`get-aboutus`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
//Home Slogan
const getHomeSlogan = async (lang) => {
    const result = await axiosInstance.get(`get-slogan`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
//Catalog

const getCatalog = async (lang) => {
    const result = await axiosInstance.get(`get-catalog`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
//Certificate
const getCertificate = async (lang) => {
    const result = await axiosInstance.get(`get-certificate`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
//Faliyetlerimiz
const getActivities = async (lang) => {
    const result = await axiosInstance.get(`get-activities`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
const getReferance = async (lang) => {
    const result = await axiosInstance.get(`get-referance`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
//Haberler
const getNewsData = async (lang) => {
    const result = await axiosInstance.get(`get-news`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};

const getNewData = async (lang, slug) => {
    const result = await axiosInstance.get(`get-new/${slug}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
const exportFunction = {
    getNewData,
    getNewsData,
    getProducts,
    getActivities,
    getCatalog,
    getCertificate,
    getReferance,
    getHomeProductSlider,
    getHomeSlogan,
    getPage,
    contactPost,
    getHomeSlider,
    getAboutUs,
};

export default exportFunction;
