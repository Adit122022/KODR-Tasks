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
    <div className="h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col items-center py-6">
      <header className="text-center mb-6 flex gap-24 items-center w-full justify-center">
<div>
<h1 className="text-5xl font-extrabold drop-shadow-md">
          Memory Game
        </h1>
        <p className="text-xl mt-2 opacity-80">FLIP THE CARD AND MATCH THE EMOJI</p>
</div>
      <ScoreBoard moves={moves} score={score} />
      </header>
      <GameBoard updateMoves={updateMoves} updateScore={updateScore} />
     
    </div>
  </>
  );
}

export default App;
