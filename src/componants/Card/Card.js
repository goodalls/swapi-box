import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = props => {
  if (props.species) {
    const { name, homeworld, population, species, favorite } = props;
    return (
      <div className="card">
        <p>{name}</p>
        <p>Homeworld: {homeworld}</p>
        <p>Population: {population}</p>
        <p>Species{species}</p>
        <button onClick={() => favorite({name})}>favorite</button>
      </div>
    );
  } else if (props.terrain) {
    const { name, terrain, population, climate, residents, favorite } = props;
    return (
      <div className="card">
        <p>{name}</p>
        <p>{terrain}</p>
        <p>Population: {population}</p>
        <p>Climate: {climate}</p>
        <p>residents: {residents}</p>
        <button onClick={() => favorite({name})}>favorite</button>
      </div>
    );
  } else if (props.model) {
    const { name, model, vehicleClass, passengers, favorite } = props;
    return (
      <div className="card">
        <p>{name}</p>
        <p>Model: {model}</p>
        <p>Class: {vehicleClass}</p>
        <p>Passengers: {passengers}</p>
        <button onClick={() => favorite({name})}>favorite</button>
      </div>
    );
  }
};
Card.propTypes = {
  props: PropTypes.object
};
export default Card;
