import React, { useRef } from 'react'
/* Las props se pueden pasar de forma generica, onst Child = (props) => Ó concretamente entre llaves onst Child = ({name}) =>  */
const Child = ({name,text, message, update}) => {
    const messageRef = useRef()
    const nameRef =  useRef()

    function pressButton () {
        const textRef = messageRef.current.value
        alert(textRef);
    }
    function pressButtonProps (text) {
        alert(`${text}`);
    }
    function submit(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }
    
    return (
        <div style={{background: 'lightblue', padding: '32px'}}>
            <p>Hello {name}</p>
            <button onClick={() => {console.log('pulsado')}}>botón 1</button>
            {/* Ejemplo de función que recibe parámetros, esta deberá estár dentro de una función anónima si no queremos que el evento se produzca al recargar la página */}
            <button onClick={() => {pressButtonProps(text)}}>botón 2</button>
            {/* Ejemplo de fución que no recibe parámetros */}
            <button onClick={pressButton}>botón 3</button>
            <input
                placeholder='insert text'
                onChange={(e) => {console.log(e.target.value)}}
                onFocus={() => {console.log('onfocus')}}
                ref={messageRef}
            ></input>
            <button
            /* el hijo recibe el parametro del método que se ejecuta en el father pero es el hijo quien lo ejecuta */
                onClick={() => { message(messageRef.current.value)}}
            >Child</button>
            <div>
                <form action="" onSubmit={submit}>
                    <input 
                        placeholder='New Name' 
                        ref={nameRef}
                        />
                    <button type='submit'> Update Name</button>
                </form>
            </div>
        </div>
    )
}

export default Child