import React, { useState } from 'react'

const Square = () => {

    const initialRGB = {
        r: 0,
        g:0,
        b:0,
    }

    let value;
    const randomNumber = () => {
        value = Math.floor(Math.random() * 255) + 1;
        return value;
    }
    const [rgb, setRGB] = useState(initialRGB);
    const [mangeInterval, setMangeInterval] = useState(0)
    const updateRGB = () => {
        let red = randomNumber();
        let green = randomNumber();
        let blue = randomNumber();
        setRGB({
            r: red,
            g: green,
            b: blue
        })
    }
    
    const invervalID = () => {
        setMangeInterval(setInterval(updateRGB, 500))
    }
    
    const clearIntervalID = () => {
        console.log(rgb.r)
        clearInterval(mangeInterval);
    }
    return (
        <div>
            
            <div className='info' >
                R-{rgb.r}
                G-{rgb.g}
                B-{rgb.b}
            </div>
            <div 
                className='square'
                style={{ width: '255px', height: '255px', backgroundColor: `rgb(${rgb.r} ,${rgb.g}, ${rgb.b})`, margin: 'auto' }}
                onMouseEnter={invervalID}
                onMouseLeave={clearIntervalID}
                onDoubleClick={clearIntervalID}
            ></div>
        </div>
    )
}

export default Square
