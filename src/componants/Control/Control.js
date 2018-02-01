import React from 'react';
import './Control.css';
import PropTypes from 'prop-types';

const Control = ({ favorites, people, active }) => {
  return (
    <div className="control">
      <button
        onClick={people}
        name="people"
        className={active === 'people' ? 'activeClass' : 'notActive'}
      >
        People
      </button>
      <button
        onClick={people}
        name="planets"
        className={active === 'planets' ? 'activeClass' : 'notActive'}
      >
        Planets
      </button>
      <button
        onClick={people}
        name="vehicles"
        className={active === 'vehicles' ? 'activeClass' : 'notActive'}
      >
        Vehicles
      </button>
      <button
        name="favorites"
        className={active === 'favorites' ? 'activeClass' : 'notActive'}
      >
        Favorites <span className="favorite">{favorites}</span>
      </button>
    </div>
  );
};

Control.propTypes = {
  favorites: PropTypes.number,
  people: PropTypes.func,
  active: PropTypes.string
};
export default Control;
