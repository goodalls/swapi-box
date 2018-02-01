import React from 'react';
import './Control.css';
import PropTypes from 'prop-types';

const Control = ({ favorites, fetch }) => {

  //add active classname veriable
  return (
    <div className="control">
      <button onClick={fetch} className="people">
        People
      </button>
      <button onClick={fetch} className="planets">
        Planets
      </button>
      <button onClick={fetch} className="vehicles">
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
  fetch: PropTypes.func
};
export default Control;
