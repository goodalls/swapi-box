import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = props => {
  if (props.name) {
    return (
      <div className="card">
        <p>{props.name}</p>
        <p>Homeworld: {props.homeworld}</p>
        <p>Population: {props.population}</p>
        <p>Species{props.species}</p>
        <button onClick={() => props.favorite()}>favorite</button>
      </div>
    );
  }
};
Card.propTypes = {
  favorite: PropTypes.func,
  homeworld: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.string,
  species: PropTypes.string
};
export default Card;
