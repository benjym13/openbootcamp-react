/* 
Ejemplo de uso de useState(), useRef, useEffect.
*/

import React, { useState, useEffect, useRef } from 'react'

const Example2 = () => {
    // vamos a crear dos contadores
    // cada uno es un estado diferente
    const  [counter1, setCounter1] =  useState(0);
    const  [counter2, setCounter2] =  useState(0);

    /* 
    vamos a crear una Refencia con useRef() para asociar una variable
    con un elemento del DOM del componente( vista HTML)
     */
    const myRef = useRef();
    function incOne() {
        setCounter1(counter1 + 1);
    }
    function incTwo() {
        setCounter2(counter2 + 1);
    }
    /* 
    Trabjando con useEffect(), varías casuísticas:
        - Caso 1 : Ejecuta siempre un snippet de código. Cada vez que exista un cambio en el estado del componete se ejecuta aquello que esté dentro del useEffect()
    */
    /* useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE ');
        console.log('Mostrando refencia al elemento del DOM');
        console.log(myRef);
    }); */
    /* 
    - Caso 2 : Ejecuta siempre un snippet de código cuando cambie un estado concreto. En este caso le pasamos como parametro el counter 1 para que solo se ejecute el useEffect cuando cambie el contador 1 y no el 2.
    */
    /* useEffect(() =>{
        console.log('CAMBIO EN EL ESTADO DEL Counter 1 ');
        console.log('Mostrando refencia al elemento del DOM');
        console.log(myRef)
    },[counter1]); */

    /* 
    - Caso 3: 
    */

    useEffect(() =>{
        console.log('CAMBIO EN EL ESTADO DEL Counter 1 ');
        console.log('Mostrando refencia al elemento del DOM');
        console.log(myRef.value)
    },[counter1, counter2]);

    return (
        <div>
            <h1>*** ejemplo de useState y useEFfect **</h1>
            <h2>CONTADOR 1:{counter1}</h2>
            <h2>CONTADOR 2:{counter2}</h2>
            <h4 ref={myRef} value="head"> Ejemplo de elemento referenciado</h4>
            <button onClick={incOne}>Contador 1</button>
            <button onClick={incTwo}>Contador 2</button>
        </div>
    )
}

export default Example2
