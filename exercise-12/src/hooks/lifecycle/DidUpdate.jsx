/* 
Ejemplo de uso de método componenteDidUpdate en class componente
Y uso de ooh en function componente
*/

import React, { Component, useEffect } from 'react'

export  class DidUpdate extends Component {
    componentDidUpdate() {
        console.log('Cuando el componente recibe nuevos props o cambio en su estado privado')
    }
    render() {
        return (
        <div>
            <h1>DidUpdate</h1>
        </div>
        )
    }
}


export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Cuando el componente recibe nuevos props o cambio en su estado privado')
    })
    
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    )
}

