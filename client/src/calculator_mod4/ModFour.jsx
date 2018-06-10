import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Holder = styled.div`
  display: flex;
  width: inherit;
  font-size: 13px;
  font-weight: ${props => (props.total ? 'bold' : '')};
  border-bottom: ${props => ((!props.main && !props.total) ? '1px solid rgb(172,172,172)' : '')};
  padding: 3px;
  padding-top: ${props => (props.main ? '17px' : '5px')};
  flex-direction: ${props => (props.main ? 'column' : 'row')};
  justify-content: ${props => (props.main ? '' : 'space-between')};

`;

export default function ModFour(props) {
  if (props.startDate && props.endDate) {
    const numNights = props.endDate - props.startDate;
    const priceOfStay = numNights * props.price;
    const total = priceOfStay + props.cleaningFee + props.serviceFee;
    return (
      <Holder main>
        <Holder>
          <div> ${props.price} X {numNights} </div>
          <div> ${priceOfStay} </div>
        </Holder>
        <Holder>
          <div> Cleaning Fee </div>
          <div> ${props.cleaningFee}</div>
        </Holder>
        <Holder>
          <div> Service Fee </div>
          <div> ${props.serviceFee} </div>
        </Holder>
        <Holder total>
          <div> Total </div>
          <div> ${total} </div>
        </Holder>
      </Holder>
    );
  }
  return null;
}

ModFour.propTypes = {
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  price: PropTypes.number,
  cleaningFee: PropTypes.number,
  maxGuests: PropTypes.number,
  serviceFee: PropTypes.number,
};

ModFour.defaultProps = {
  startDate: 0,
  endDate: 0,
  price: 0,
  cleaningFee: 0,
  maxGuests: 0,
  serviceFee: 0,
};
