import { useState , useCallback ,useEffect, useRef} from 'react'

function App() {
 const [length , setLength] = useState(8)
 const [numberAllow , setNumberAllow] = useState(false);
 const [charAllow , setcharAllow] = useState(false);
 const [password, setPasssword] = useState("");

 // useRef Hook 
 const passwordRef = useRef(null)

 const passwordGenerator = useCallback( ()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllow) str += "0123456789"
  if(charAllow) str += "!#$%^&*[]{}~`@-_+"

  for(let i= 0 ; i<= length ; i++ ){
    let char = Math.floor(Math.random() * str.length +1)
    pass += str.charAt(char)
  }
  setPasssword(pass)
 }, [length , numberAllow , charAllow , setPasssword]) 

 const copyPasswordToClickBoard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current.setSelectionRange(0,99);
  window.navigator.clipboard.writeText(password)
 },[password])

 useEffect(()=>{
  passwordGenerator()
 },[length ,numberAllow , charAllow,passwordGenerator] )


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-6 my-8 text-orange-500 bg-gray-700'>
     <h1 className='text-white text-center font-medium font-size-1rem'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text"
    value={password}
    className='outline-none w-full py-3 px-3'
    placeholder='password'
    readOnly
    ref={passwordRef}
    />
    <button
    onClick={copyPasswordToClickBoard}
     className='bg-blue-700 px-4 py-2 text-white shrink-0'>copy</button>

      </div>
      <div className='flex text-sm gap-x-1'>
      <div className='flex text-sm gap-x-1'>
        <input type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
    <input 
    type='checkbox'
    defaultChecked={numberAllow}
    id="numberInput"
    onChange={()=>{
      setNumberAllow((prev) => !prev);
    }}
    />
    <label htmlFor="">Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
    <input 
    type='checkbox'
    defaultChecked={charAllow}
    id="charInput"
    onChange={()=>{
      setcharAllow((prev) => !prev);
    }}
    />
    <label htmlFor="">Characters</label>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
