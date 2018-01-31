import React from 'react';
import './Card.css';

const Card = ({favorite}) => {
  return (
    <div className="Card">
      <p>Name</p>
      <p>Homeworld:</p>
      <p>Population:</p>
      <p>Species</p>
      <button onClick={() => favorite()}>favorite</button>
    </div>
  );
};

export default Card;
