import { useEffect, useState } from 'react'
import '../App.css'
import Scoreboard from '../components/ScoreBoard'

function Tictactoe2() {
  const [box1, setBox1] = useState('')
  const [box2, setBox2] = useState('')
  const [box3, setBox3] = useState('')
  const [box4, setBox4] = useState('')
  const [box5, setBox5] = useState('')
  const [box6, setBox6] = useState('')
  const [box7, setBox7] = useState('')
  const [box8, setBox8] = useState('')
  const [box9, setBox9] = useState('')
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [playerWins, setPlayerWins] = useState(false)
  const [scoreCounterX, setScoreCounterX] = useState(0)
  const [scoreCounterO, setScoreCounterO] = useState(0)
  const clickBox= (box,setBox)=>{
    if(box==="" && !playerWins){
      setBox(currentPlayer)                                  
    }
  }
  const swap=()=>{
    if(currentPlayer==="X"){
      setCurrentPlayer("O")
    }else{
      setCurrentPlayer("X")
    }
  }
  useEffect(()=>{
    checkplayerwin()
  },[box1, box2, box3, box4, box5, box6, box7, box8, box9])

  const checkplayerwin =()=>{
    if((box1===box2 && box2===box3 && box2 !=="")
      ||(box4===box5 && box5===box6 && box5 !=="")
      ||(box7===box8 && box8===box9 && box8 !=="")
      ||(box1===box4 && box4===box7 && box4 !=="")
      ||(box2===box5 && box5===box8 && box5 !=="")
      ||(box3===box6 && box6===box9 && box6 !=="")
      ||(box1===box5 && box5===box9 && box5 !=="")
      ||(box3===box5 && box5===box7 && box5 !=="")
  ){
      setPlayerWins(true)
      if (currentPlayer === 'X'){
        setScoreCounterX(scoreCounterX + 1)
      }else {
        setScoreCounterO(scoreCounterO + 1)
      }
    }
    else {
      swap()
    }
  }
  
  const resetGame = () => {
    setPlayerWins(false)
    setBox1('')
    setBox2('')
    setBox3('')
    setBox4('')
    setBox5('')
    setBox6('')
    setBox7('')
    setBox8('')
    setBox9('')
    setCurrentPlayer("X")
  }
  return (
    <>
    <h2>tictactoe</h2>
    {playerWins && 
    <h3>Player {currentPlayer} Wins!!!</h3>
    }
    <Scoreboard playerXscore={scoreCounterX} playerOscore={scoreCounterO} />
      <div className={`bigbox ${playerWins?'bigboxwin':''}`}>
        <div className='box' onClick={()=>{clickBox(box1, setBox1)}}>{box1}</div>
        <div className='box' onClick={()=>{clickBox(box2, setBox2)}}>{box2}</div>
        <div className='box' onClick={()=>{clickBox(box3, setBox3)}}>{box3}</div>
        <div className='box' onClick={()=>{clickBox(box4, setBox4)}}>{box4}</div>
        <div className='box' onClick={()=>{clickBox(box5, setBox5)}}>{box5}</div>
        <div className='box' onClick={()=>{clickBox(box6, setBox6)}}>{box6}</div>
        <div className='box' onClick={()=>{clickBox(box7, setBox7)}}>{box7}</div>
        <div className='box' onClick={()=>{clickBox(box8, setBox8)}}>{box8}</div>
        <div className='box' onClick={()=>{clickBox(box9, setBox9)}}>{box9}</div>
      </div>
      <button className="btn" onClick={resetGame}>Reset Game</button>
    </>
    
  )
}

export default Tictactoe2
