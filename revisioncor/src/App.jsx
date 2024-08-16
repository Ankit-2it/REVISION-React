import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
import About from './components/abouttailwind'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl font-bold bg-blue-400 text-black p-4 rounded-xl mb-4'> Hloo Ankit!!</h1>
      <About />
      <Card />
      <Card />
      <Card />

    </>
  )
}

export default App
