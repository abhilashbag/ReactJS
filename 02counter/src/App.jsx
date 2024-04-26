import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(5)

  //let counter = 5;
  const addValue = () =>{
    //this update once
    setCounter(counter + 1)
    setCounter(counter + 1)
   //this increase the at atime 3 value
    // setCounter(prevCounter => prevCounter +1)
    // setCounter(prevCounter => prevCounter +1)
    // setCounter(prevCounter => prevCounter +1)
    // console.log("clicked",counter);
  }
  const removeValue = () =>{
    if(counter > 0){

      setCounter(counter - 1 )
    }
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <br />
     <button onClick={removeValue}>remove Value {counter}</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default App
