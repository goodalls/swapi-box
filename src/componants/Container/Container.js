import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';
import Card from '../Card/Card';

const Container = (props) => {
  // const favoriteCheck = () => {
  //   if (props.dataArray.length && fav button not clicked){
  //     return 'dataArray';
  //   } else if (props.favorites.length && fav button clicked) {
  //     return 'favorite';
  //   }
  // };

  const peopleCards = props.dataArray.map((eachCard, index) => {
    return <Card {...eachCard} favorite={props.favorite} key={index} />;
  });

  return <div className="container">{peopleCards}</div>;
};

Container.propTypes = {
  favorite: PropTypes.func,
  dataArray: PropTypes.array
};

export default Container;
