import React from 'react';

export default function PricePerNight( props ) {
  if ( props.price ) {
    return (
      <div className="price">
        {props.price}
      </div>
    );
  }
  return null;
}
