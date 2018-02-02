import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = props => {
  if (props.species) {
    return (
      <div className="card">
        <p>{props.name}</p>
        <p>Homeworld: {props.homeworld}</p>
        <p>Population: {props.population}</p>
        <p>Species{props.species}</p>
        <button onClick={() => props.favorite()}>favorite</button>
      </div>
    );
  } else if (props.terrain) {
    return (
      <div className="card">
        <p>{props.name}</p>
        <p>{props.terrain}</p>
        <p>Population: {props.population}</p>
        <p>Climate: {props.climate}</p>
        <p>residents: {props.residents}</p>
        <button onClick={() => props.favorite()}>favorite</button>
      </div>
    );
  }
};
Card.propTypes = {
  props: PropTypes.object
};
export default Card;
