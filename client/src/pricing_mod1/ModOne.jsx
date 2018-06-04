import React from 'react';
import PropTypes from 'prop-types';
import PricePerNight from './PricePerNight.jsx';
import Rating from './Rating.jsx';

export default function ModOne( props ) {
  ModOne.propTypes = {
    price: PropTypes.number,
    rating: PropTypes.number,
    numReviews: PropTypes.Number,

  };
  ModOne.defaultProps = {
    price: 0,
    rating: 0,
    numReviews: 0,
  };
  if ( props.price ) {
    return (
      <div className="mod1Holder">
        <PricePerNight price={props.price} />
        <Rating rating={props.rating} numReviews={props.numReviews} />
      </div>
    );
  }
  return null;
}
