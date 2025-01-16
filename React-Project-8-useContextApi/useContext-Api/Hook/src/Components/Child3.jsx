import React from 'react'
import { createcontext } from '../App'
import { useContext } from 'react'

const Child3 = () => {
    const user  = useContext(createcontext)
  return (
    <div>


         {user.name}
      
    </div>
  )
}

export default Child3
