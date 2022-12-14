import React, { useState } from 'react'

const logginStyle = {
    backgroundColor: 'green'
}

const loggoutStyle = {
    backgroundColor: 'tomato'
}

const LoginButton = ({action, styleProp}) => {
    return (
        <button onClick={action} style={styleProp}>Login</button>
    )
}

const LogoutButton = ({action, styleProp}) => {
    return (
        <button onClick={action} style={styleProp}> Logout</button>
    )
}

// ? expresión true && exxpreción => se redenriza la expresión
// ? expresión false && expresión => no rendereiza la expresión

const ConditionalRender = () => {


    const [access, setAccess] = useState(false);
    const [messages, setMessages] = useState(0)

    /* const updateAccess = () => {
        setAccess(!access);
    } */
    const loginAction = () => {
        setAccess(true);
    }
    const logoutAction = () => {
        setAccess(false);
    }

    function addMessages () {
        setMessages(messages + 1);
    }

    let buttonAccess;

    /* if(access) {
        buttonAccess = <button onClick={updateAccess}>Login</button>
    } else {
        buttonAccess = <button onClick={updateAccess}>Logout</button>
    } */
    
    if(access) {
        buttonAccess = <LogoutButton action={logoutAction} styleProp={loggoutStyle}></LogoutButton> 
    } else {
        buttonAccess = <LoginButton action={loginAction} styleProp={logginStyle}></LoginButton>
    }

    
    return (
        <div>
            {/* Optional button */}
            {buttonAccess}

            {/* {
            access ? 
            <button onClick={updateAccess}>Login</button> 
            :
            <button onClick={updateAccess}>Logout</button>
            } */}

            {/* nº messages with && */}
            {/* {messages > 0 && messages === 1 && <p>tienes {messages} mensaje sin leer</p>}
            {messages > 1  && <p>tienes {messages} mensajes sin leer</p>}
            {messages === 0 && <p> No tienes mensajes</p>}
            <button onClick={addMessages}>add Messages</button> */}

            {/* nº messages with ternary operator */}
            { messages > 0 ? 
                <p>tienes {messages} mensaje{messages > 1 ? 's' : null } sin leer </p>:
                <p> No tienes mensajes</p>
            }
            <button onClick={addMessages}>add Messages</button>
        </div>
    )
}

export default ConditionalRender
