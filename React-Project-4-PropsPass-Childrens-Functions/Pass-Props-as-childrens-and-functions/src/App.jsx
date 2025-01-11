import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  function handleclick (){
    setCount(count+1);
  }

  return (
<> 
<Button handleclick = {handleclick}>
      <h1>{count}</h1>


  </Button>





  {/* <Card>
 <h1>Companies are comping in Feb </h1>
 <p>And I will grab this opportunity</p>
 <p>Ab microsoft mai job lekar hi ghar jaaunga</p>

    </Card>
   < Card>


   </Card> */}

</>



  
  )
}

export default App
