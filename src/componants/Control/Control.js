import React from 'react';
import './Control.css';
import PropTypes from 'prop-types';

const Control = ({ favorites, people }) => {
  return (
    <div className="control">
      <button onClick={people} className="people">
        People
      </button>
      <button onClick={people} className="planets">
        Planets
      </button>
      <button onClick={people} className="vehicles">
        Vehicles
      </button>
      <button>
        Favorites <span className="favorite">{favorites}</span>
      </button>
    </div>
  );
};

Control.propTypes = {
  favorites: PropTypes.number,
  people: PropTypes.func
};
export default Control;
