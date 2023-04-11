import './App.css';

import { useState, useEffect } from "react"
import Box from "./components/box"

function App() {


  const handleClick = () => {
    setGo("pigs")
    setBox(["", "", "", "", "", "", "", "", ""])

  }
  const [boxes, setBox] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("pigs")
  const [winningMessage, setWinningMessage] = useState(null)

  const message = "It's " + go + " turn!"


  const checkScore = () => {
    const winningCombo = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    winningCombo.forEach(array => {
      let pigWin = array.every(box => boxes[box] === "pigs")
      if (pigWin) {
        setWinningMessage("Pigs Win!!")

        return
      }
    })
    winningCombo.forEach(array => {
      let lambWin = array.every(box => boxes[box] === "lambs")
      if (lambWin) {
        setWinningMessage("Lambs Win!!")
        return
      }
    })

  }
  useEffect(() => {

    checkScore()
  }, [boxes])
  return (
    <div className="App">
      <div className='header'>Farmyard Tic-Tac-Toe</div>
      <button className='reset' onClick={handleClick}>Reset</button>
      <div className="gameboard">
        {boxes.map((box, index) => <Box key={index} id={index} box={box} boxes={boxes} setBox={setBox} go={go} setGo={setGo} winningMessage={winningMessage} />)}
      </div>
      <p className='messages'>

        {winningMessage || message}
      </p>
      <div className="footer"><a href="https://www.freepik.com/free-vector/farm-scene-nature-with-barn_5769442.htm#query=cartoon%20farm&position=2&from_view=keyword&track=ais">Image by brgfx</a> on Freepik</div>
    </div>
  );
}

export default App;
