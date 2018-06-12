import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { Holder, InputHolder, Title, Logo, Contents } from '../ModStylings';

export default function ModThree(props) {
  let infantStatement;
  if (props.infant > 1) {
    infantStatement = `, ${props.infant} infants`;
  } else if (props.infant === 1) {
    infantStatement = ', 1 infant';
  }

  return (
    <Holder>
      <Title> Guests </Title>
      <InputHolder onClick={props.close}>
        <Contents clicked={props.clicked} mod3>
          {props.totalGuests} {props.totalGuests > 1 ? 'guests' : 'guest'}
          {infantStatement}
        </Contents>
        <Logo
          clicked={props.clicked}
        />
      </InputHolder>
      <Dropdown
        clicked={props.clicked}
        {...props}
      />

    </Holder>
  );
}

ModThree.propTypes = {
  btnClick: PropTypes.func,
  close: PropTypes.func,
  clicked: PropTypes.bool,
  adult: PropTypes.number,
  child: PropTypes.number,
  infant: PropTypes.number,
  totalGuests: PropTypes.number,
  maxGuests: PropTypes.number,
};
ModThree.defaultProps = {
  btnClick: () => null,
  close: () => null,
  clicked: false,
  adult: 0,
  child: 0,
  infant: 0,
  totalGuests: 0,
  maxGuests: 0,
};
