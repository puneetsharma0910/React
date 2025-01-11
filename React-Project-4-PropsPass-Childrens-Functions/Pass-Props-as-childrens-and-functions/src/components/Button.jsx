import React from 'react'

const Button = (props) => {
  return (
      <div>
        {props.children}
        <button onClick={props.handleclick}> click me </button>
    </div>
  )
}

export default Button
