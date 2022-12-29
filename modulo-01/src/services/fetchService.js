export  const getAllUsers = async() => {
    let response = await fetch('https://reqres.in/api/users')    
        // we return the JSON
        return response.json();      
}
export const getAPegeUsers = async(page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`)    
        // we return the JSON
        return response.json();      
}

export const getUsersDetail = async(id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`)    
        // we return the JSON
        return response.json();      
}