import React, { useEffect } from 'react'

function App() {
  const [typedText, setTypedText] = React.useState('')
  const [timeRemaining, setTimeRemaining] = React.useState(100)

  function handleChange(e) {
    setTypedText(e.target.value)
  }

  function countWords(str) {
    const arr = typedText.trim().split(' ');
    const filteredWords = arr.filter(word => word !== '')
    console.log(filteredWords.length) 
  }

  useEffect(() => {
    if(timeRemaining > 0 ) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
    }, 1000)
    }
}, [timeRemaining])

  return(
    <div>
      <h1>The Keys Are Lava &#127755;</h1>
      <textarea 
        name='typing-area'
        value={typedText}
        onChange={handleChange}/>
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={countWords}>Start</button>
      <h1>Word Count:</h1>
    </div>
  )
}

export default App;
