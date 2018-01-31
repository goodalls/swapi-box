import React from 'react';
import './Control.css';
import PropTypes from 'prop-types';

const Control = ({ favorites }) => {
  return (
    <div className="control">
      <button>People</button>
      <button>Planets</button>
      <button>Vehicles</button>
      <button>
        Favorites <span className="favorite">{favorites}</span>
      </button>
    </div>
  );
};

Control.propTypes = {
  favorites: PropTypes.number
};
export default Control;
