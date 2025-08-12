import Button from"./components/Button"
import "./App.css"
import ReactList from"./components/conditional Rendering/ReactList" 
import UseEffectHook from"./components/conditional Rendering/UseEffectHook"
import LoginAndLogout from"./components/conditional Rendering/LoginAndLogout"
import PreviousValue from"./components/conditional Rendering/PreviousValue"
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
        <h1 style={{color:"red",dispaly:"inline-block",backgroundColor:"blue"}}> {counter}</h1>
         <button onClick={()=>setCounter(counter-1)}>Subtract</button>
         <br/>
         <br/>  
         <LoginAndLogout/>
         <br/>
         <br/>  
         <ReactList/>
         <UseEffectHook/>
         <br/>
         <PreviousValue/>
       
  </div>
}
export default App