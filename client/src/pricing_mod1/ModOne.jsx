import React from 'react';
import PropTypes from 'prop-types';
import PricePerNight from './PricePerNight';
import Rating from './Rating';
import { HolderMod1 } from '../ModStylings';

export default function ModOne(props) {
  if (props.price) {
    return (
      <HolderMod1>
        <PricePerNight price={props.price} />
        <Rating
          rating={props.rating}
          numReviews={props.numReviews}
        />
      </HolderMod1>
    );
  }
  return null;
}

ModOne.propTypes = {
  price: PropTypes.number,
  rating: PropTypes.number,
  numReviews: PropTypes.number,

};
ModOne.defaultProps = {
  price: 0,
  rating: 0,
  numReviews: 0,
};
