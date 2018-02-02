import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';
import Card from '../Card/Card';

const Container = (props) => {
  console.log(props)
  const peopleCards = props.dataArray.map((eachCard, index) => {
    return <Card {...eachCard} key={index} />;
  });

  return <div className="container">{peopleCards}</div>;
};

Container.propTypes = {
  favorite: PropTypes.func,
  dataArray: PropTypes.array
};

export default Container;
