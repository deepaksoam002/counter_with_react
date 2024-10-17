import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  const[message, setMessage] = useState(' ')
const addValue = ()=>{
  if(counter<20){
  setCounter(counter+1)
  setMessage(' ')
  }else{
    setMessage('your count reach higher limit')
  }
}
const removeValue = ()=>{
  if(counter>0){
  setCounter(counter-1)
  setMessage(' ')
  }else{
    setMessage('your count reach lower limit')
  }
}

  return (
    <>
    <h1>Counter | React</h1>
    <h5>your count is {counter}</h5>
    <button onClick={addValue} id='button'>Add Value</button>
    <button onClick={removeValue} id='button'>Remove Value</button>
    {<p>{message}</p>}

    </>
  )
}

export default App
