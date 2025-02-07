import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment,reset,incrementByAmount } from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount,setAmount]   = useState(0);
  const Count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }
  function handleAmount(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>

      <br />

      <p>Count:{Count}</p>

      <br />

      <button onClick={handleDecrementClick}>-</button>

      <button onClick ={handleReset}id="reset">Reset</button>
      <input onChange={(e) => setAmount(e.target.value)} value={amount}    type="number" placeholder="Enter value" 
      />
      <button onClick={handleAmount}>Inc by value</button>
    </div>
  );
}

export default App;
