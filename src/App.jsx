import React from 'react'
import Marchy from './pages/Marchy'
import Tictactoe from './pages/Tictactoe'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/marchy" element={<Marchy/>}/>
        <Route path="/tictactoe" element={<Tictactoe></Tictactoe>}/>
      </Routes>
    </div>
  )
}
