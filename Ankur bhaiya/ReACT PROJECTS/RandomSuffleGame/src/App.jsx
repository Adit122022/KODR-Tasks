import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  const updateMoves = () => setMoves(moves + 1);
  const updateScore = () => setScore(score + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-700 text-white flex flex-col items-center p-4">
      <header className="text-center py-6">
        <h1 className="text-4xl font-extrabold drop-shadow-md">
          Memory Game
        </h1>
        <p className="text-lg mt-2 opacity-80">Match the cards to win!</p>
      </header>
      <ScoreBoard moves={moves} score={score} />
      <GameBoard updateMoves={updateMoves} updateScore={updateScore} />
    </div>
  );
}

export default App;
