import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "https://house-hunter-server-iota.vercel.app/"
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;