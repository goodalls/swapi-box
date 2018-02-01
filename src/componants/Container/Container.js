import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';
import Card from '../Card/Card';

const Container = ({ favorite, array }) => {
  const mappedCards = array.map((object, index) => {
    return <Card {...object} key={`card-number-${index}`} favorite={favorite} />;
  });
console.log(mappedCards);

  return <div className="container">{mappedCards}</div>;
};

Container.propTypes = {
  favorite: PropTypes.func,
  array: PropTypes.array
};

export default Container;
