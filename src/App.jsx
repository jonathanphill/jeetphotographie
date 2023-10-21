import { useState } from 'react'
import kuljitLogo from "./assets/jeetphotographie-logos.jpeg";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <img src={kuljitLogo} alt="logo with text jeetphotographie and an image of a mountain" />
        </nav>
      </header>
    </>
  )
}

export default App
