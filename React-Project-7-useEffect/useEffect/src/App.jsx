

import { useEffect, useState } from 'react';
import './App.css'

function App() {
  
  const[count,setCount] = useState(0)
  const[table, setTable] = useState(0)
  useEffect(() => {
     alert("only when count is updated")
  
  } , [count,table])
  
  function handleClick() {
    setCount(count+1)
  }
  function handleTable(){
    setTable(table+10);
  }
  

  return (
    
  <div>
     <p>table is updated  {table}</p>
     <button onClick={handleTable}>Submit</button>

    <p>you have clicked {count} times</p>
    <button onClick={handleClick}>Click me </button>
  </div>
    
  )
}

export default App
