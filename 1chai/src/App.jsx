import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
function App() {
  const [count, setCount] = useState(0)
  const user={
    name:"Ajay",
    age:28,
    Lname:"Sengar"
  }
  return (
    <>
     <h1 className="text-red-500">Ajay Sengar</h1>
     <Card name={user.name} age={user.age}/>
    </>
  )
}

export default App
