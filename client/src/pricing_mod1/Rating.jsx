import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import styled from 'styled-components';

export const Holder = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: inherit;
`;

export const NumReviews = styled.div`
  margin-left: 7px;
`;

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
      <Holder>
        <ReactStars count={5} value={props.rating} color2="#007D8C" edit={false} />
        <NumReviews>
          {props.numReviews}
        </NumReviews>
      </Holder>
    );
  }
  return null;
}
