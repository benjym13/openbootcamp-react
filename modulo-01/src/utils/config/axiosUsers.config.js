import axios from 'axios';
export default axios.create(
    {
        baseURL: 'https://randomuser.me/api',
        responseType: '',
        timeout:6000
    }
)