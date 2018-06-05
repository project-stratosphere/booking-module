import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Holder = styled.div`
  width: inherit;
  justify-content: flex-start;
`;
export const Price = styled.span`
  font-size: 30px;
`;
export const Msg = styled.span`
  margin-left: 5px;
`;

export default function PricePerNight( props ) {
  PricePerNight.propTypes = {
    price: PropTypes.number,
  };
  PricePerNight.defaultProps = {
    price: 0,
  };
  if ( props.price ) {
    return (
      <Holder>
        <Price>
          ${props.price}
        </Price>
        <Msg>
          per night
        </Msg>
      </Holder>
    );
  }
  return null;
}
