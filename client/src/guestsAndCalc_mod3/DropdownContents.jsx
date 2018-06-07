import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

export const Guest = styled.div`
  text-transform: capitalize;
  margin-top: ${ props => ( props.guest === 'adults' ? '10px' : '0px' ) };
  font-weight: bold;
`;

export const GuestDetails = styled.div`
  font-size: 12px;
  min-height: 12px;
`;

export const FeatureHolder = styled.div`
  display: flex;
  flex-direction: ${ props => ( ( props.button ) ? 'row' : 'column' ) };
  margin-top: ${ props => ( props.guest === 'adults' ? '4px' : '0px' ) }
`;

export const Number = styled.div`
  min-width: 9px;
  font-size: 17px;
  margin-top: 2px;
`;

export const Button = styled.button`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin-left: 7px;
  margin-right: 7px;
  margin-top: 1px;
  outline: none;
    &:active{
      background-color: #007D8C;
    }
`;

export const ButtonDown = Button.extend`
  border: ${ ( props ) => {
    if ( props.number > 0 && ( props.guest === 'infants' || props.guest === 'children' ) ) {
      return '1px solid #007D8C';
    } else if ( props.guest === 'adults' && props.number > 1 ) {
      return '1px solid #007D8C';
    }
    return '1px solid rgb(172, 172, 172)';
  } };
`;

export const ButtonUp = Button.extend`
  border: ${ ( props ) => {
    if ( props.total < props.max && ( props.guest === 'adults' || props.guest === 'children' ) ) {
      return '1px solid #007D8C';
    } else if ( props.guest === 'infants' && props.number < 5 ) {
      return '1px solid #007D8C';
    }
    return '1px solid rgb(172, 172, 172)';
  } };
`;

const list = [ 'adults', 'children', 'infants' ];
const desc = [ '', 'Ages 2-12', 'Under 2' ];

export default function DropdownContents( props ) {
  const toRender = list.map( ( propName, index ) => {
    const guest = propName.replace( /s|ren/g, '' );
    const guestNum = props[ guest ];
    return (
      <Holder key={propName}>
        <FeatureHolder>
          <Guest guest={propName}> {propName} </Guest>
          <GuestDetails> {desc[ index ]} </GuestDetails>
        </FeatureHolder>
        <FeatureHolder button guest={propName}>
          <ButtonDown
            disabled={( guest === 'adult' && guestNum === 1 ) || guestNum === 0}
            onClick={() => props.btnClick( propName, -1 )}
            number={guestNum}
            guest={propName}
          >-
          </ButtonDown>
          <Number> {guestNum} </Number>
          <ButtonUp
            disabled={( guest === 'infant' && guestNum === 5 ) || ( props.totalGuests === props.maxGuests && ( guest === 'adult' || guest === 'child' ) )}
            onClick={() => props.btnClick( propName, 1 )}
            number={guestNum}
            total={props.totalGuests}
            max={props.maxGuests}
            guest={propName}
          >+
          </ButtonUp>
        </FeatureHolder>
      </Holder>
    );
  } );

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
