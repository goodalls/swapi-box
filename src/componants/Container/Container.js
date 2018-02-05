import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';
import Card from '../Card/Card';

const Container = props => {
  const favoriteCheck = props.dataArray.length ? 'dataArray' : 'favorites';

  const peopleCards = props[favoriteCheck].map((eachCard, index) => {
    return (
      <Card
        {...eachCard}
        favorite={props.favorite}
        key={index}
        favorites={props.favorites}
      />
    );
  });

  return <div className="container">{peopleCards}</div>;
};

Container.propTypes = {
  favorite: PropTypes.func,
  dataArray: PropTypes.array,
  favorites: PropTypes.array
};

export default Container;
