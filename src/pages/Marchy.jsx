import { useEffect, useState } from 'react'
import '../App.css'
import Scoreboard from '../components/ScoreBoard'

function Marchy() {
  const [boxes, setBoxes] = useState(Array(100).fill(0)) // 9 boxes initialized to empty
  
  const shuffleArray = (array) =>{
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Get a random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  useEffect(()=>{
    let array1 = []
    for(let i=0; i<=49; i++){
        array1.push(i)
    }
    let merged_array = array1.concat(array1);
    setBoxes(shuffleArray(merged_array))
  },[])


  return (
    <>
      <h2>Tic Tac Toe</h2>
      <div className={`bigbox2 `}>
        {boxes.map((box, index) => (
          <div
            key={index}
            className='box'
          >
            {box}
          </div>
        ))}
      </div>s
    </>
  )
}

export default Marchy
