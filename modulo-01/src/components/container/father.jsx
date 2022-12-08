import React, { useState } from 'react'
import Child from '../pure/child'

const Father = () => {
    const [name, setName] = useState('Benjamín')
    function alertMessage(text) {
        alert(`message from child: ${text}`)
    }
    function updateName(name) {
        setName(name);
    }
    return (
        <div>
            <Child
                text='Como estás'
                /* enviamos el método al hijo por props */
                name={name}
                message={alertMessage}
                update={updateName}
            ></Child>
        </div>
    )
}

export default Father