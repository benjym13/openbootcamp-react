import axiosConfig from "../utils/config/axios.config";

export default function getRandomUser() {
    return axiosConfig.get('/')
}