import React from 'react';
import './Card.css';

const Card = ({favorite, homeworld, name, population, species}) => {
  return (
    <div className="card">
      <p>Name{name}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Population: {population}</p>
      <p>Species{species}</p>
      <button onClick={() => favorite()}>favorite</button>
    </div>
  );
};

export default Card;
