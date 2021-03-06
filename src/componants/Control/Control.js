import React from 'react';
import './Control.css';
import PropTypes from 'prop-types';

const Control = ({ favorites, cards, active, fav }) => {
  return (
    <div className="control">
      <button
        onClick={cards}
        name="people"
        className={active === 'people' ? 'activeClass' : 'notActive'}
      >
        People
      </button>
      <button
        onClick={cards}
        name="planets"
        className={active === 'planets' ? 'activeClass' : 'notActive'}
      >
        Planets
      </button>
      <button
        onClick={cards}
        name="vehicles"
        className={active === 'vehicles' ? 'activeClass' : 'notActive'}
      >
        Vehicles
      </button>
      <button
        name="favorites"
        className={active === 'favorites' ? 'activeClass' : 'notActive'}
        onClick={fav}
      >
        Favorites <span className="favorite">{favorites}</span>
      </button>
    </div>
  );
};

Control.propTypes = {
  favorites: PropTypes.number,
  cards: PropTypes.func,
  active: PropTypes.string,
  fav: PropTypes.func
};
export default Control;
