import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

export default function Rating( props ) {
  Rating.propTypes = {
    rating: PropTypes.number,
    numReviews: PropTypes.number,
  };
  Rating.defaultProps = {
    rating: 0,
    numReviews: 0,
  };
  if ( props.rating ) {
    return (
      <div className="mod1RatingHolder">
        <div className="rating">
          <ReactStars count={5} value={props.rating} color2="#007D8C" edit={false} />
        </div>
        <div className="numReviews">
          {props.numReviews}
        </div>
      </div>
    );
  }
  return null;
}
