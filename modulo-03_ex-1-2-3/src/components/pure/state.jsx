import React, { useState } from 'react'


const State = ({contacto}) => {
  // const [variablae, método act] useState(var init);
  const [status, setEstado] = useState(contacto.status);

  function changeStatus(){
    status? setEstado(false):setEstado(true)
  } 
  return (
    <div>
      <p>Contacto { status ? 'En Línea' : ' No conectado'}</p>
      <button onClick={changeStatus}>
        Cambiar estado
      </button>
    </div>
  )
}

export default State
