import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({favorite, people}) => {
  const peopleCards = people.map(person=>{
    <card {...person} />;
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
