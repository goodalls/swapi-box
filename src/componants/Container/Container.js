import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';
import Card from '../Card/Card';

const Container = ({ favorite, fetchedArray }) => {
  const mappedCards = fetchedArray.map((object, index) => {
    return <Card {...object} key={`card-number-${index}`} favorite={favorite} />;
  });

  return <div className="container">{mappedCards}</div>;
};

Container.propTypes = {
  favorite: PropTypes.func,
  fetchedArray: PropTypes.array
};

export default Container;
