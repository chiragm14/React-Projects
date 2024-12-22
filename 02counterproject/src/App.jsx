import {useState} from 'react'
import './App.css'

function App() {

  let[counter,setCounter]=useState(15)
  
  // let counter=5;

  const addValue=()=>{

    if(counter<20){

      counter=counter+1;
      setCounter(counter)

    }

    // counter=counter+1; 
    
    console.log("Added Value:",Math.random());
  }

  const removeValue=()=>{

    if(counter>0){

      counter=counter-1;
      setCounter(counter)

    }


  }
 

  return (
    <>
      <h1>React Project</h1>
      <br />
      <h2>Counter Value: {counter}</h2>
      <br />
      <button
      onClick={addValue}>Increase Value {counter}</button>
      <br /><br />
      <button
      onClick={removeValue}>Decrease Value {counter}</button>
      <p><footer><div>New Value of Counter: {counter}</div></footer></p>

    </>
  )
}

export default App
