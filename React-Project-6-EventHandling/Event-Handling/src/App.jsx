
import './App.css'

function App() {

// function  handlingClick(){
//     alert("click kar diya hai mujhe")
//   }
// function handlingOver(e){
//   alert("para hia bhai", e.target.value)
// }
function onChange(e){
  console.log("value change ho rahi hai: ", e.target.value)
}
function handleSubmit(e){
e.preventDefault();
alert("haa bol submit kardu")
}
 
  return (
  <div>
    <form  onSubmit={handleSubmit}>
      <input type="text" onChange={onChange}  />
      <button >
        Submit
      </button>
    </form>












    {/* immediate invocation  */}
    {/* <button onClick={alert("kar dia hai click mujhe")}>
       Click ME
    </button> */}
    {/* <p onMouseOver={handlingOver}> i am para</p>
    <button>
      Click Me
    </button>
  </div> */}
  </div>
  )
}

export default App
