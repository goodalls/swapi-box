import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="Card">
      <p>Name</p>
      <p>Homeworld: Population</p>
      <p>Species</p>
      <button>favorite</button>
    </div>
  );
};

export default Card;
