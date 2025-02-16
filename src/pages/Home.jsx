import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate=useNavigate()
  return (
    <div>
        <Header/>
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-screen flex flex-col items-center justify-center text-white">
          <div className="text-center space-y-8">
            {/* attention is needed here  */}
              <h1 className="text-5xl font-bold tracking-wider">
                Welcome to Lateef Games!
              </h1>
              <p className="text-lg">
                Your gateway to thrilling and exciting adventures. Dive into the world of gaming and discover new experiences!
              </p>
              <div>
                <button 
                onClick={()=>{
                  navigate('/tictactoe')
                }}
                className="mt-4 bg-yellow-500 text-black py-3 px-6 rounded-full font-semibold text-xl 
                hover:w-[250px] hover:bg-yellow-400 cursor-pointer transition duration-1000 ease-in-out">
                  Start Tictactoe
                </button>
              </div>
          </div>
        </div>
    </div>
  )
}
