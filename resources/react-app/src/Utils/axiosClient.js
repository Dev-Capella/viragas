import axios from "axios";
const AxiosClient = axios.create({
    baseURL: `https://www.viragas.com/api/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default AxiosClient;
