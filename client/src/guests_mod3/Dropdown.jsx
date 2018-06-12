import React from 'react';
import PropTypes from 'prop-types';
import DropdownContents from './DropdownContents';
import { DropdownHolder, Close, Details } from '../ModStylings';

export default function Dropdown(props) {
  if (props.clicked) {
    return (
      <DropdownHolder guest>
        <DropdownContents
          {...props}
        />
        <Details>
          {props.maxGuests } guests maximum.
          Infants don’t count toward the number of guests.
        </Details>
        <Close onClick={props.close}> Close </Close>
      </DropdownHolder>
    );
  }
  return null;
}

Dropdown.propTypes = {
  clicked: PropTypes.bool,
  btnClick: PropTypes.func,
  close: PropTypes.func,
  adult: PropTypes.number,
  child: PropTypes.number,
  infant: PropTypes.number,
  totalGuests: PropTypes.number,
  maxGuests: PropTypes.number,

};
Dropdown.defaultProps = {
  clicked: false,
  btnClick: () => null,
  close: () => null,
  adult: 0,
  child: 0,
  infant: 0,
  totalGuests: 0,
  maxGuests: 0,
};
