import React from 'react';
import PropTypes from 'prop-types';
import { HolderMod4 } from '../ModStylings';

export default function ModFour(props) {
  if (props.startDate && props.endDate) {
    const numNights = props.endDate - props.startDate;
    const priceOfStay = numNights * props.price;
    const total = priceOfStay + props.cleaningFee + props.serviceFee;
    return (
      <HolderMod4 main>
        <HolderMod4>
          <div> ${props.price} X {numNights} </div>
          <div> ${priceOfStay} </div>
        </HolderMod4>
        <HolderMod4>
          <div> Cleaning Fee </div>
          <div> ${props.cleaningFee}</div>
        </HolderMod4>
        <HolderMod4>
          <div> Service Fee </div>
          <div> ${props.serviceFee} </div>
        </HolderMod4>
        <HolderMod4 total>
          <div> Total </div>
          <div> ${total} </div>
        </HolderMod4>
      </HolderMod4>
    );
  }
  return null;
}

ModFour.propTypes = {
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  price: PropTypes.number,
  cleaningFee: PropTypes.number,
  // maxGuests: PropTypes.number,
  serviceFee: PropTypes.number,
};

ModFour.defaultProps = {
  startDate: 0,
  endDate: 0,
  price: 0,
  cleaningFee: 0,
  // maxGuests: 0,
  serviceFee: 0,
};
