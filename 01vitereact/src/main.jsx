import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    // <<div>
    //   Custom App-moo
    // </div>>
    <App/>
  )
}

ReactDOM.createRoot(document.getElementById('root')).
render(
  // <React.StrictMode>
    <MyApp/>

  // </React.StrictMode>,
)
