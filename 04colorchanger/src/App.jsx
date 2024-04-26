import { useState } from "react"


function App() {
  const [color , setColor] = useState("black")

  return (
    <>
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}>
    
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-3xl px-3 py-2">
    <button
    onClick={() => setColor("red")}
     className="ouline-none px-4 py-1 rounded-full text-white
     shadow-lg" 
     style={{backgroundColor: "red"}}
     >Red</button>
    <button
    onClick={() => setColor("olive")}
     className="ouline-none px-4 py-1 rounded-full text-white
     shadow-lg" 
     style={{backgroundColor: "olive"}}
     >Olive</button>
    <button
    onClick={() => setColor("cadetblue")}
     className="ouline-none px-4 py-1 rounded-full text-white
     shadow-lg" 
     style={{backgroundColor: "cadetblue"}}
     >CadetBlue</button>
    <button
    onClick={() => setColor("blue")}
     className="ouline-none px-4 py-1 rounded-full text-white
     shadow-lg" 
     style={{backgroundColor: "blue"}}
     >Blue</button>
    <button
    onClick={() => setColor("orange")}
     className="ouline-none px-4 py-1 rounded-full text-white
     shadow-lg" 
     style={{backgroundColor: "orange"}}
     >Orange</button>
    <button
    onClick={() => setColor("teal")}
     className="ouline-none px-4 py-1 rounded-full text-white
     shadow-lg" 
     style={{backgroundColor: "teal"}}
     >Teal</button>
    <button
    onClick={() => setColor("green")}
     className="ouline-none px-4 py-1 rounded-full text-white
     shadow-lg" 
     style={{backgroundColor: "green"}}
     >Green</button>

      </div>
    </div>
   </div>
    </>
  )
}

export default App
