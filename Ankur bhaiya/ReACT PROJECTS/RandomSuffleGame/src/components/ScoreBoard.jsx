import React from 'react';

function ScoreBoard({ moves, score }) {
  return (
    <div className="flex justify-between gap-8 bg-gray-100 bg-opacity-60 p-4 rounded-lg shadow-lg w-80 text-center">
      <div>
        <h2 className="text-2xl font-bold">Moves</h2>
        <p className="text-xl mt-1">{moves}</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Score</h2>
        <p className="text-xl mt-1">{score}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
