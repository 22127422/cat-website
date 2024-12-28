import { useState } from 'react'
import './App.css'

function App() {
  const [isStarted, setIsStarted] = useState(false)

  const handleStart = () => {
    if (!isStarted) {
      setIsStarted(true)
    }
  }

  return (
    <div className="container" onClick={handleStart}>
      {isStarted ? (
        <video
          src="/spin.webm"
          autoPlay
          loop
          muted={false}
          className="spinning-cat"
          style={{ pointerEvents: "none" }}
        />
      ) : (
        <div className="spinning-cat" />
      )}
    </div>
  )
}

export default App

