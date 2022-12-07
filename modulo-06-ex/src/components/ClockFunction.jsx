import React, { useState, useEffect } from 'react'

    const ClockFunction = () => {

        const initialUser = {
            fecha: new Date(),
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José' 
        };

        const [user, setUser] = useState(initialUser);

        const actEdad = () => {
            setUser({
                ...user,
                fecha: new Date(),
                edad: user.edad + 1,
            })
        }

        useEffect(() => {
            const intervalAge = setInterval(() => {
                actEdad();
            }, 1000)
            return () => {
                clearInterval(intervalAge);
            }
        })
    return (
        <div>
            <h2>
            Hora Actual: {user.fecha.toLocaleTimeString()}
            </h2>
            <h3>{user.nombre} {user.apellidos}</h3>
            <h1>Edad: {user.edad}</h1>
        </div>
    )
}

export default ClockFunction
