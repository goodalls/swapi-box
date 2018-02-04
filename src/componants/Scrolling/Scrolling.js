import React from 'react';
import './Scrolling.css';
import PropTypes from 'prop-types';

const Scrolling = ({ title, episodeId, openingCrawl, releaseDate }) => {

  return (
    <div className="scrolling">
      <div className="fade" />

      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Episode {episodeId}</p>
            <h1>{title}</h1>
          </div>
          <p>{openingCrawl}</p>

          <div className="title">
            <p>released on: {releaseDate}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

Scrolling.propTypes = {
  title: PropTypes.string,
  episodeId: PropTypes.number,
  openingCrawl: PropTypes.string,
  releaseDate: PropTypes.string
};

export default Scrolling;
