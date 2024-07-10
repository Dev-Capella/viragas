import axiosInstance from "../utils/axiosClient";

const getProducts = async (value) => {
    const result = await axiosInstance.get(`get-products/${value}`);
    return result.data;
};
const getProductCategories = async () => {
    const result = await axiosInstance.get(`get-products-categories`);
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

//Ürünler
const getProductList = async (slug) => {
    const result = await axiosInstance.get(`get-product-list/${slug}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": "tr",
        },
    });
    return result.data;
};
const getProductDetail = async (slug) => {
    const result = await axiosInstance.get(`get-product-detail/${slug}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": "tr",
        },
    });
    return result.data;
};

const getSecondPorudct = async (lang) => {
    const result = await axiosInstance.get(`get-second-product`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
const getSecondPorudctDetail = async (lang, slug) => {
    const result = await axiosInstance.get(
        `/get-second-product-detail/${slug}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": lang,
            },
        }
    );
    return result.data;
};
const getThirtPorudct = async (lang) => {
    const result = await axiosInstance.get(`get-thirt-product`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
const getThirtPorudctDetail = async (lang, slug) => {
    const result = await axiosInstance.get(
        `/get-thirt-product-detail/${slug}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": lang,
            },
        }
    );
    return result.data;
};
const getFourthPorudct = async (lang) => {
    const result = await axiosInstance.get(`get-fourth-product`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result.data;
};
const getFourthPorudctDetail = async (lang, slug) => {
    const result = await axiosInstance.get(
        `/get-fourth-product-detail/${slug}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": lang,
            },
        }
    );
    return result.data;
};

const exportFunction = {
    getFourthPorudctDetail,
    getFourthPorudct,
    getThirtPorudctDetail,
    getThirtPorudct,
    getSecondPorudctDetail,
    getSecondPorudct,
    getProductCategories,
    getProductList,
    getProductDetail,
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
