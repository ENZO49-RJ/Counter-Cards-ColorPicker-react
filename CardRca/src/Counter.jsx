import { useState } from "react";
import "./Counter.css"

export default function Counter(){

  const [count,setCount] = useState(0)

  function increment(){
    setCount(count + 1)
  }
  function decrement(){
    setCount(count - 1)
  }
  function reset(){
    setCount(0)
  }
  return (
    <div className="Container">
      <p className="Count">{count}</p>
      <button className="Counter-button" onClick={increment}>
        Increment
      </button>
      <button className="Counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="Counter-button" onClick={reset}>
        Reset
      </button>
    </div>
  );

}