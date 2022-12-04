/* 
Ejemplo de uso de useState(), useContext()
*/

import React, { useState, useContext } from 'react'
/* 
El  componente1 va recibir un contexto que tiene
un valor que proviene del componente padre
*/
/* 
Inicializamos un estado con in valor nulll que va a 
rellenarse con los valores del padre 
*/

const MyContext = React.createContext(null);

const ComponenteUno = () => {
    const state = useContext(MyContext); 
    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <ComponenteDos></ComponenteDos>
        </div>
    )
}

const ComponenteDos = () => {
    const state = useContext(MyContext); 
    return (
        <div>
            <h2>La sesión es:{state.sesion}</h2>
        </div>
        );
    }


export default function ContextComponent () {
    const initialState = {
        token: '12345',
        sesion: 1
    }
    // Creamos el estado de este componente
    const [sesionData, setSesion] = useState(initialState);

    function actData () {
        console.log(sesionData.sesion + 1);
        setSesion(
            {
                token: 'newToken',
                sesion: sesionData.sesion + 1
            }
        );
    }

    return (
        <MyContext.Provider value={sesionData}>
            {/* Pruede leer los datos de initial State  */}
            <ComponenteUno></ComponenteUno>
            <button onClick={actData}>Actualizar</button>
        </MyContext.Provider>
    )
}



