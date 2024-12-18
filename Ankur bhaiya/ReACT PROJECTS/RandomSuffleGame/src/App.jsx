import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  const updateMoves = () => setMoves(moves + 1);
  const updateScore = () => setScore(score + 1);

  return (
   <>
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col items-center py-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold drop-shadow-md">
          Memory Game
        </h1>
        <p className="text-lg mt-2 opacity-80">Test your memory and have fun!</p>
      </header>
      <ScoreBoard moves={moves} score={score} />
      <GameBoard updateMoves={updateMoves} updateScore={updateScore} />
    </div>
  </>
  );
}

export default App;
