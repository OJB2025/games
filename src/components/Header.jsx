import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='w-full h-[100px] bg-gray-200 flex gap-[5px] py-[20px] px-[100px]'>
        <Link to="/">
            <button className="btn_">homepage</button>
        </Link>
        <Link to="/tictactoe">
            <button className="btn_">tictactoe</button>
        </Link>
        <Link to="/marchy">
            <button className="btn_">Click here for marchy</button>
        </Link>
    </div>
  )
}
