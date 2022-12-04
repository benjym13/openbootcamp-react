import React from 'react'

const Example4 = (props) => {
  return (
    <div>
        <h1>My name is: {props.name}</h1>
        {props.children}
    </div>
  )
}

export default Example4
