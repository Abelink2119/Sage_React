import Button from"./components/Button"
import "./App.css"
import {useState} from"react"
function App(){
  const [counter,setCounter]=useState(1)

  return<div>
        <h1>first component</h1>
        <Button text="Login"/>
        <br/>
        <br/>
        <Button text="Register"/>
        <br/>
        <br/>
        <Button text="Logout"/>
        <br/>
        <br/>
        {/*state*/}
        <button onClick={()=>setCounter(counter+1)}>Add</button>
        <h1>{counter}</h1>
         <button onClick={()=>setCounter(counter-1)}>Subtract</button>
       
  </div>
}
export default App