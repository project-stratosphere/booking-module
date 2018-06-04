import React from 'react';
import PropTypes from 'prop-types';

export default function PricePerNight( props ) {
  PricePerNight.propTypes = {
    price: PropTypes.number,
  };
  PricePerNight.defaultProps = {
    price: 0,
  };
  if ( props.price ) {
    return (
      <div className="priceHolder">
        <span className="price">
          ${props.price}
        </span>
        <span className="priceMsg">
          per night
        </span>
      </div>
    );
  }
  return null;
}
