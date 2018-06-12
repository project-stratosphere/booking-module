import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PricePerNight from './PricePerNight';
import Rating from './Rating';

export const Holder = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  width: inherit;
  border-bottom: 1px solid rgb(172, 172, 172);
  font-weight: bold;
`;
Holder.displayName = 'Holder';

export default function ModOne(props) {
  if (props.price) {
    return (
      <Holder>
        <PricePerNight price={props.price} />
        <Rating
          rating={props.rating}
          numReviews={props.numReviews}
        />
      </Holder>
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
