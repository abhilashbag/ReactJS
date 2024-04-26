import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "abhilash",
    age: 23
  }
  let newArr =[1,2,3];
  return (
    <>
      <h1 className='bg-orange-500 p-4 text-black rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="chaiaurcode" btnText ="click me"/>
      <Card username="abhi" />
    </>
  )
}

export default App
