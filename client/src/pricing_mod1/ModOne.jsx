import React from 'react';
import PropTypes from 'prop-types';
import PricePerNight from './PricePerNight.jsx';
import Rating from './Rating.jsx';

export default function ModOne( props ) {
  ModOne.propTypes = {
    listingData: PropTypes.node,
  };
  ModOne.defaultProps = {
    listingData: {},
  };
  if ( props.listingData ) {
    return (
      <div className="mod1Holder">
        <PricePerNight price={props.listingData.pricePerNight} />
        <Rating rating={props.listingData.starRating} numReviews={props.listingData.custRevNum} />
      </div>
    );
  }
  return null;
}
