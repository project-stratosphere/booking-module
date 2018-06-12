import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { abnbDarkBlue, Holder } from '../ModStylings';

export default function Rating(props) {
  if (props.rating) {
    return (
      <Holder mod1>
        <ReactStars
          count={5}
          value={props.rating}
          color2={abnbDarkBlue}
          edit={false}
        />
        <div style={{ marginLeft: '7px' }}>
          {props.numReviews}
        </div>
      </Holder>
    );
  }
  return null;
}

Rating.propTypes = {
  rating: PropTypes.number,
  numReviews: PropTypes.number,
};
Rating.defaultProps = {
  rating: 0,
  numReviews: 0,
};
