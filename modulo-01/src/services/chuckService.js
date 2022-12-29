import axios from "../utils/axioschuck.config";

export default function getChuckJokes () {
    return axios.get('/');
}