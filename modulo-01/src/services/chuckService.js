import axios from "../utils/config/axioschuck.config";

export default function getChuckJokes () {
    return axios.get('/');
}