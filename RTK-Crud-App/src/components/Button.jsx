
import React from 'react'

const varients = {
    blue : 'bg-blue-500 text-white',
    red : 'bg-red-500 text-white'
}

function Button(props) {
    const {child , className , onClick , varient = 'blue'} = props
  return (
    <button className={` px-3 py-1.5 rounded-md ${className} ${varients[varient]}`} onClick={onClick}>
        {child}
    </button>
  )
}

export default Button