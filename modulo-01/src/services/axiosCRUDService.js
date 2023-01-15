import axios from 'axios';

/**
 * Login method to Reqres endpoint
 * @param { string } email 
 * @param { string } password 
 */
export const login = (email, password) => {
    let body = {
        email: email,
        password: password
    }
    //return
    return axios.post('https://reqres.in/api/login', body)
}
// all USERS
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}
// all paged users
export const getPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}
// obteain user by id

// create user

//update user

// delate user