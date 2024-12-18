import React, { useState, useEffect } from 'react';
import Card from './Card';

const initialCardValues = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍍'];

function GameBoard({ updateMoves, updateScore }) {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  useEffect(() => {
    const shuffledCards = [...initialCardValues, ...initialCardValues]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value, isFlipped: false }));
    setCards(shuffledCards);
    console.log(shuffledCards); // Debug log
  }, []);

  const handleCardClick = (card) => {
    if (
      flippedCards.length === 2 ||
      matchedCards.includes(card.id) ||
      flippedCards.some((c) => c.id === card.id)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      updateMoves();
      const [firstCard, secondCard] = newFlippedCards;
      if (firstCard.value === secondCard.value) {
        setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
        updateScore();
        setTimeout(() => setFlippedCards([]), 500);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
  {cards.length > 0 ? (
    cards.map((card) => (
      <Card
        key={card.id}
        value={card.value}
        isFlipped={flippedCards.includes(card) || matchedCards.includes(card.id)}
        onClick={() => handleCardClick(card)}
      />
    ))
  ) : (
    <p>Loading cards...</p>
  )}
</div>

  );
}

export default GameBoard;
