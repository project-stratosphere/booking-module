import React from 'react';

export default function PricePerNight( props ) {
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
