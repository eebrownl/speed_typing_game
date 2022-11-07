import React, { useEffect } from 'react'

function App() {
const STARTING_TIME = 2

  const [typedText, setTypedText] = React.useState('')
  const [timeRemaining, setTimeRemaining] = React.useState(STARTING_TIME)
  const [gameStarted, setGameStarted] = React.useState(false)
  const [wordCount, setWordCount] = React.useState(0)
  

  function handleChange(e) {
    setTypedText(e.target.value)
  }

  function countWords(str) {
    const arr = typedText.trim().split(' ');
    const filteredWords = arr.filter(word => word !== '')
    return filteredWords.length
  }

  function startGame() {
    setGameStarted(true)
    setWordCount(0)
    setTimeRemaining(STARTING_TIME)
    setTypedText('')
  }

  function endGame() {
    setGameStarted(false)
    const numWords = countWords(typedText)
    setWordCount(numWords)
  }
  useEffect(() => {
    if(timeRemaining > 0 && gameStarted) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
    }, 1000)
    } else if(timeRemaining === 0) {
      endGame()
    }
}, [timeRemaining, gameStarted])

  return(
    <div>
      <h1>The Keys Are Lava &#127755;</h1>
      <textarea 
        name='typing-area'
        value={typedText}
        onChange={handleChange}
        disabled = {!gameStarted}/>
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled = {gameStarted}>Start</button>
      <h1>Word Count:{wordCount}</h1>
    </div>
  )
}

export default App;
