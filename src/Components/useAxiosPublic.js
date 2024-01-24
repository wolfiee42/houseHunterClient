import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://house-hunter-server-iota.vercel.app/"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;