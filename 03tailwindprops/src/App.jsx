import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let Obj={
    username:"Chirag",
    age:21
  }

  let newArr=[1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-6'>TAILWIND CSS</h1>

     <Card username="CHIRAG" newObj={Obj} newArray={newArr} btnText="CLICK ME"/>
     <Card username="EDA" className='pt-4'btnText="Click Here"/>

    </>
  )
}

export default App
