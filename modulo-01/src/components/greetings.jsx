import React, { useState } from 'react'
import PropTypes from 'prop-types'
const Greetings = (props) => {
  const  [ age, setAge] = useState(29);
  const cumpleaños = () => {
    setAge(age + 1);
  }
  return (
    <div>
      <h1> Hola { props.name }</h1>
      <p>tengo {age}</p>
      <button onClick={cumpleaños}>suma años</button>
    </div>
  )
}

Greetings.propTypes = {
    name: PropTypes.string
}

export default Greetings

