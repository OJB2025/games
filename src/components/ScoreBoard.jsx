import React from 'react';

function Scoreboard({playerXscore, playerOscore}) {
  return (
    <div>
      <h1>Game Scoreboard</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Player X</td>
            <td>{playerXscore}</td>
          </tr>
          <tr>
            <td>Player O</td>
            <td>{playerOscore}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
