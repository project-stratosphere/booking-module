import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  width: 250px;
  padding-top: 10px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

export default function ModThree( props ) {
  ModThree.propTypes = {
    cleaningFee: PropTypes.number,
    maxGuests: PropTypes.number,
    minStay: PropTypes.number,
    serviceFee: PropTypes.number,

  };
  ModThree.defaultProps = {
    cleaningFee: 0,
    maxGuests: 0,
    minStay: 0,
    serviceFee: 0,
  };
  if ( props.cleaningFee ) {
    return (
      <Holder>
        <Title> Guests </Title>
      </Holder>
    );
  }
  return null;
}
