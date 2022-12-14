import React from 'react'

export const Allcycles = () => {
    useEffect(() => {
        console.log('componente creado');
        const intervalID =  setInterval(()=>{
            console.log('actualización del componente')
        }, 1000);
        
        return () => {
            console.log('Coponente va a desaparecer')
            clearInterval(intervalID);
        }
        }, [])
        
    return (
        <div>Allcycles</div>
    )
}
