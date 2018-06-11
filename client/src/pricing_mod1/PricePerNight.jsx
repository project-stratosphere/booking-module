import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Holder = styled.div`
  width: inherit;
  justify-content: flex-start;
`;

export default function PricePerNight(props) {
  if (props.price) {
    return (
      <Holder>
        <span style={{ fontSize: '30px' }}>
          ${props.price}
        </span>
        <span style={{ marginLeft: '5px' }}>
          per night
        </span>
      </Holder>
    );
  }
  return null;
}

PricePerNight.propTypes = {
  price: PropTypes.number,
};
PricePerNight.defaultProps = {
  price: 0,
};
