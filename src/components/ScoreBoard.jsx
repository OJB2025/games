import React from 'react';

function Scoreboard({ playerXscore, playerOscore }) {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Game Scoreboard</h1>
      
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-500">
            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Player</th>
            <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-6 text-sm font-medium text-gray-800">Player X</td>
            <td className="py-3 px-6 text-sm font-medium text-gray-800">{playerXscore}</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-6 text-sm font-medium text-gray-800">Player O</td>
            <td className="py-3 px-6 text-sm font-medium text-gray-800">{playerOscore}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
