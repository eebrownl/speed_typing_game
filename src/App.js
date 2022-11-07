import React, { useEffect } from 'react'

function App() {
  const [typedText, setTypedText] = React.useState('')
  const [timeRemaining, setTimeRemaining] = React.useState(5)
  const [gameStarted, setGameStarted] = React.useState(false)

  function handleChange(e) {
    setTypedText(e.target.value)
  }

  function countWords(str) {
    const arr = typedText.trim().split(' ');
    const filteredWords = arr.filter(word => word !== '')
    console.log(filteredWords.length) 
  }

  function startGame() {
    setGameStarted(true)
  }

  useEffect(() => {
    if(timeRemaining > 0 && gameStarted) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
    }, 1000)
    } else if(timeRemaining === 0) {
      setGameStarted(false)
    }
}, [timeRemaining, gameStarted])

  return(
    <div>
      <h1>The Keys Are Lava &#127755;</h1>
      <textarea 
        name='typing-area'
        value={typedText}
        onChange={handleChange}/>
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame}>Start</button>
      <h1>Word Count:</h1>
    </div>
  )
}

export default App;
