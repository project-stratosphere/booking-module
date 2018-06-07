import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

const GuestDetails = styled.div`
  font-size: 12px;
  min-height: 12px;
`;

const FeatureHolder = styled.div`
  display: flex;
  flex-direction: ${ props => ( ( props.button ) ? 'row' : 'column' ) };
`;

const Number = styled.div`
  min-width: 9px;
`;

const Button = styled.button`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  margin-left: 7px;
  margin-right: 7px;
  outline: none;
  &:active{
    background-color: #007D8C;
  }
`;

const ButtonDown = Button.extend`
  border: ${ ( props ) => {
    if ( props.number > 0 && ( props.guest === 'infants' || props.guest === 'children' ) ) {
      return '1px solid #007D8C';
    } else if ( props.guest === 'adults' && props.number > 1 ) {
      return '1px solid #007D8C';
    }
    return '1px solid rgb(172, 172, 172)';
  } };
`;

const ButtonUp = Button.extend`
  border: ${ ( props ) => {
    if ( props.total < props.max && ( props.guest === 'adults' || props.guest === 'children' ) ) {
      return '1px solid #007D8C';
    } else if ( props.guest === 'infants' && props.number < 5 ) {
      return '1px solid #007D8C';
    }
    return '1px solid rgb(172, 172, 172)';
  } };
`;

export default function DropdownContents( props ) {
  const list = [ 'adults', 'children', 'infants' ];
  const desc = [ '', 'Ages 2-12', 'Under 2' ];
  const toRender = list.map( ( propName, index ) => {
    const toPlugIn = propName.replace( /s|ren/g, '' );
    return (
      <Holder key={propName}>
        <FeatureHolder>
          <div> {propName} </div>
          <GuestDetails> {desc[ index ]} </GuestDetails>
        </FeatureHolder>
        <FeatureHolder button>
          <ButtonDown
            onClick={() => props.btnClick( propName, -1 )}
            number={props[ toPlugIn ]}
            guest={propName}
          >-
          </ButtonDown>
          <Number> {props[ toPlugIn ]} </Number>
          <ButtonUp
            onClick={() => props.btnClick( propName, 1 )}
            number={props[ toPlugIn ]}
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
  btnClick: PropTypes.func,
  adult: PropTypes.number,
  child: PropTypes.number,
  infant: PropTypes.number,
  totalGuests: PropTypes.number,
  maxGuests: PropTypes.number,

};
DropdownContents.defaultProps = {
  btnClick: () => null,
  adult: 0,
  child: 0,
  infant: 0,
  totalGuests: 0,
  maxGuests: 0,
};
