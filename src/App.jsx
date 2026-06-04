import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './Greeting'

function App() {
  const [cnt, setCnt] = useState(0)

  const countup = () => {
    setCnt(cnt + 1)
    console.log("押された");
  }

  return (
    <>
      <h1>みだしを書く</h1>
      <Greeting name="Cyber" onClick={countup} Greet="こんにちは" />
      {cnt}
      <button >おせ</button>
    </>
  )
}

export default App
