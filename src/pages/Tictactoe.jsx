import { useEffect, useState } from 'react'
import '../App.css'
import Scoreboard from '../components/ScoreBoard'

function Tictactoe() {
  const [boxes, setBoxes] = useState(Array(9).fill('')) // 9 boxes initialized to empty
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [playerWins, setPlayerWins] = useState(false)
  const [score, setScore] = useState([0, 0]) // [scoreCounterX, scoreCounterO]

  const clickBox = (index) => {
    if (boxes[index] === '' && !playerWins) {
      const newBoxes = [...boxes]
      newBoxes[index] = currentPlayer
      setBoxes(newBoxes)
    }
  }

  const swap = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
  }

  useEffect(() => {
    checkPlayerWin()
  }, [boxes]) // Trigger check on box changes

  const checkPlayerWin = () => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
      [0, 4, 8], [2, 4, 6] // Diagonal
    ]

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern
      if (boxes[a] && boxes[a] === boxes[b] && boxes[b] === boxes[c]) {
        setPlayerWins(true)
        updateScore()
        return
      }
    }

    swap()
  }

  const updateScore = () => {
    if (currentPlayer === 'X') {
      setScore([score[0] + 1, score[1]]) // Increment X score
    } else {
      setScore([score[0], score[1] + 1]) // Increment O score
    }
  }

  const resetGame = () => {
    setPlayerWins(false)
    setBoxes(Array(9).fill('')) // Reset boxes to empty
    setCurrentPlayer("X")
  }

  return (
    <>
      <h2>Tic Tac Toe</h2>
      {playerWins && <h3>Player {currentPlayer} Wins!!!</h3>}
      <Scoreboard playerXscore={score[0]} playerOscore={score[1]} />
      <div className={`bigbox ${playerWins ? 'bigboxwin' : ''}`}>
        {boxes.map((box, index) => (
          <div
            key={index}
            className='box'
            onClick={() => clickBox(index)}
          >
            {box}
          </div>
        ))}
      </div>
      <button className="btn" onClick={resetGame}>Reset Game</button>
    </>
  )
}

export default Tictactoe
