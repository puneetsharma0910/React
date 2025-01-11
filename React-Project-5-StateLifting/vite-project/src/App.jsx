
import { useState } from 'react'
import Card from './components/Card'

function App() {
  // const [name,setName] = useState(' ')
   const [name,setname] = useState('')
  return (
    
   <div>
         <Card title = "card:1" name={name} setname = {setname} />
         <Card title = "card:2" name={name} setname = {setname} />
         <p>i am inside parent and value of name is {name}</p>
   </div>
  )
}

export default App
