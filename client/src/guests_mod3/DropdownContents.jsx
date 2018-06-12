import React from 'react';
import PropTypes from 'prop-types';
import { Holder, FeatureHolder, Guest, GuestDetails, ButtonDown, ButtonUp, Number } from './DropdownContentsStyling';

const list = ['adults', 'children', 'infants'];
const desc = ['', 'Ages 2-12', 'Under 2'];

export default function DropdownContents(props) {
  const toRender = list.map((propName, index) => {
    const guest = propName.replace(/s|ren/g, '');
    const guestNum = props[guest];
    return (
      <Holder key={propName}>
        <FeatureHolder>
          <Guest guest={propName}> {propName} </Guest>
          <GuestDetails> {desc[index]} </GuestDetails>
        </FeatureHolder>
        <FeatureHolder button guest={propName}>
          <ButtonDown
            disabled={(guest === 'adult' && guestNum === 1) || guestNum === 0}
            onClick={() => props.btnClick(propName, -1)}
            number={guestNum}
            guest={propName}
          >-
          </ButtonDown>
          <Number> {guestNum} </Number>
          <ButtonUp
            disabled={(guest === 'infant' && guestNum === 5) || (props.totalGuests === props.maxGuests && (guest === 'adult' || guest === 'child'))}
            onClick={() => props.btnClick(propName, 1)}
            number={guestNum}
            total={props.totalGuests}
            max={props.maxGuests}
            guest={propName}
          >+
          </ButtonUp>
        </FeatureHolder>
      </Holder>
    );
  });

  return (
    <div>
      {toRender}
    </div>

  );
}

DropdownContents.propTypes = {
  // btnClick: PropTypes.func,
  // adult: PropTypes.number,
  // child: PropTypes.number,
  // infant: PropTypes.number,
  totalGuests: PropTypes.number,
  maxGuests: PropTypes.number,

};
DropdownContents.defaultProps = {
  // btnClick: () => null,
  // adult: 0,
  // child: 0,
  // infant: 0,
  totalGuests: 0,
  maxGuests: 0,
};
