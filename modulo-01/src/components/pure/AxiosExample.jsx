import React, { useEffect, useState } from 'react'
import getRandomUser from '../../services/axiosService'

const AxiosExample = () => {

    const [randomUser, setRandomUser] = useState({})

    const setUser = () => {
        getRandomUser().then((response) => {
            console.table(response.data.results[0]);
            setRandomUser(response.data.results);
            /* console.log(randomUser[0].gender) */
        }).catch()
    }
    
    useEffect(() => {
        setUser();
    }, [])
    

    return (
        <div>
            {/* <p>{randomUser[0].name.title} {randomUser[0].name.first} {randomUser[0].name.last}</p>
            <p>{randomUser[0].gender}</p>
            <p>{randomUser.gender}</p> */}
        </div>
    )
}

export default AxiosExample
