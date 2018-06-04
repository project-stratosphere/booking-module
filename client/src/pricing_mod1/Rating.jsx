import React from 'react';

export default function Rating( props ) {
  if ( props.rating ) {
    return (
      <div className="mod1RatingHolder">
        <div className="rating">
          {props.rating}
        </div>
        <div className="numReviews">
          {props.numReviews}
        </div>
      </div>
    );
  }
  return null;
}
