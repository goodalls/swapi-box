import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';
import Card from '../Card/Card';

const Container = ({favorite, people}) => {
  const peopleCards = people.map(person=>{
    return <Card {...person} />;
  })
  return (
    <div className='container'>
      {peopleCards}
    </div>
  );
};

Container.propTypes = {
  favorite: PropTypes.number,
  people: PropTypes.array
};

export default Container;
