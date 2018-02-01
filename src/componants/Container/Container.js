import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';
import Card from '../Card/Card';

const Container = ({favorite, people}) => {
  const peopleCards = people.map(person=>{
    return <Card {...person} key={person.name} favorite={favorite}/>;
  });

  return (
    <div className='container'>
      {peopleCards}
    </div>
  );
};

Container.propTypes = {
  favorite: PropTypes.func,
  people: PropTypes.array
};

export default Container;
