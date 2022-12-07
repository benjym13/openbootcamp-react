import React, { useState } from 'react'

const loggedUser = {
    color: 'lightgreen'
};
const unloggedUser = {
    color: 'tomato'
};
const GreetingsStyled = () => {
    const [logged, setlogged] = useState(false)
    return (
        <div>
            <h1 style={logged ? loggedUser : unloggedUser}>user</h1>
            <button onClick={() => {
                console.log('pulsando botón')
                setlogged(!logged);
            }}>
                {logged ? 'logout' : 'login'}
            </button>
        </div>
    )
}

export default GreetingsStyled