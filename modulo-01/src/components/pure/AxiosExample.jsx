import React, { useEffect, useState } from 'react'
import getRandomUser from '../../services/axiosService'

const AxiosExample = () => {

    const [randomUser, setRandomUser] = useState(null)

    const setUser = () => {
        getRandomUser().then((response) => {
            console.table(response.data.results[0]);
            setRandomUser(response.data.results[0]);
            /* console.log(randomUser[0].gender) */
        }).catch()
    }
    
    useEffect(() => {
        setUser();
    }, [])
    

    return (
        <div>
            <h1>Axios Example</h1>
        {
            randomUser != null ? 
            (<div>
                <h2>{randomUser.name.title} {randomUser.name.first} {randomUser.name.last}</h2>
                <p>{randomUser.gender}</p>
                <p>{randomUser.email}</p>
            </div>):
            (<p>Not users</p>)
        }
        </div>
    )
}

export default AxiosExample
