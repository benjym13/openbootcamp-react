import React, { useState } from 'react'

const Example1 = () => {
  /* 
    Vamos a crear una valor inicial
  */
  const initialValue = 0;
  /* 
    Vamos a crear un objeto persona inicial
  */
  const initialPerson = {
    name : 'Benjy',
    email: 'bms13@hotmail.es'
  }
  /* 
  const  [variable, functionActualizar] = useState(valorInicial) 
  */
  const  [count, setCount] = useState(initialValue) ;
  const  [person, setPerson] = useState(initialPerson) ;
  /* 
    Función para actualizar el estado privado que contiene el contador
  */
  function incCounter() {
    setCount(count + 1);
  }
  /* 
    Función para actualizar el estado de la persona
  */
  function actPerson() {
    setPerson(
      {
        name: 'Benjamn',
        email: 'b.martinezsa@gamil.com'
      }
    )
  }
  return (
    <div>
      <h1>*** ejemplo de useState**</h1>
      <h2>Contador: {count}</h2>
      <h2>Datos de la persona</h2>
      <h3>Nombre :{person.name}</h3>
      <h3>Email:{person.email}</h3>
      {/* Botones para actualizar el estado del componente */}
      <button onClick={(incCounter)}> Actualizar Contador</button>
      <button onClick={(actPerson)}> Actualizar Persona</button>
    </div>
  )
}

export default Example1
