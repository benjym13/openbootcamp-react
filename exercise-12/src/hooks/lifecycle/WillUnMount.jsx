/* 
    Ejemplo del uso del método componentWillUnMount en class
    ehemplo de uso del hook para function componente
*/

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {
    componentWillUnmount() {
        console.log('componente antes de que desaperezca ')
    }
    render() {
        return (
        <div>
            <h1>WillUnMount</h1>
        </div>
        )
    }
}


export const WillUnMountHook = () => {
    useEffect(() => {
        return () => {
            console.log('componente antes de que desaperezca ')
        }
    }, [third])
    
    return (
        <div>
                <h1>WillUnMount</h1>
        </div>
    )
}
