import React from 'react';
import ReactStars from 'react-stars';

export default function Rating( props ) {
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
