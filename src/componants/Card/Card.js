import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({favorite, homeworld, name, population, species}) => {
  return (
    <div className="card">
      <p>{name}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Population: {population}</p>
      <p>Species{species}</p>
      <button onClick={() => favorite()}>favorite</button>
    </div>
  );
};
Card.propTypes = {
  favorite: PropTypes.string,
  homeworld: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.string,
  species: PropTypes.string
};
export default Card;
