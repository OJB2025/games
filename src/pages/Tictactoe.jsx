import { useEffect, useState } from 'react'
import '../App.css'
import Scoreboard from '../components/ScoreBoard'
import Header from '../components/Header'

function Tictactoe() {
  const [boxes, setBoxes] = useState(Array(9).fill('')) // 9 boxes initialized to empty
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [playerWins, setPlayerWins] = useState(false)
  const [score, setScore] = useState([0, 0]) // [scoreCounterX, scoreCounterO]

  const clickBox = (index) => {
    if (boxes[index] === '' && !playerWins) {
      // ["","","",'',"","","","",'']
      //boxes[index] = currentPlayer
      const newBoxes = [...boxes] //copied the content of a state into a variable
      newBoxes[index] = currentPlayer //change the content at the clicked index in the newVariable
      setBoxes(newBoxes) //replace boxed with the updated variable
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

    for (let pattern of winPatterns) { //loop through winPatterns
      const [a, b, c] = pattern
      if (boxes[a] //if boxes[a] is empty
        && boxes[a] === boxes[b] //if boxes[a] is equal to boxes[b]
        && boxes[b] === boxes[c] //if boxes[b] is equal to boxes[c]
        ) { //
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
      <Header/>
      <h2 className='text-[50px] text-center w-full'>Tic Tac Toe</h2>
      <div className='flex justify-center'>
      <button className="btn m-auto my-[30px]" onClick={resetGame}>Reset Game</button>
      </div>
      {playerWins && <h3>Player {currentPlayer} Wins!!!</h3>}
      <Scoreboard playerXscore={score[0]} playerOscore={score[1]} />
      <div className={`bigbox_ ${playerWins ? 'bigboxwin_' : ''}`}>
        {boxes.map((box, index) => (
          <div
            key={index}
            className='box_'
            onClick={() => clickBox(index)}
          >
            {box}
          </div>
        ))}
      </div>
      
    </>
  )
}

export default Tictactoe
