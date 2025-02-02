import { useState } from 'react'
import './App.css'

function App() {
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
  const clickBox= (box,setBox)=>{
    if(box===""){
      setBox(currentPlayer)
      if(currentPlayer==="X"){
        setCurrentPlayer("O")
      }else{
        setCurrentPlayer("X")
      }                                    
    }
  }
  return (
    <>
    <h2>tictactoe</h2>
      <div className='bigbox'>
          <div className='box'
          onClick={()=>{
            clickBox(box1, setBox1)
          }
          }
          >{box1}</div>
          <div className='box'
          onClick={()=>{
            clickBox(box2, setBox2)
          }
          }>{box2}</div>
          <div className='box'
          onClick={()=>{
            clickBox(box3, setBox3)
          }
          }>{box3}</div>
          <div className='box'>{box4}</div>
          <div className='box'>{box5}</div>
          <div className='box'>{box6}</div>
          <div className='box'>{box7}</div>
          <div className='box'>{box8}</div>
          <div className='box'>{box9}</div>
      </div>
    </>
    
  )
}

export default App
