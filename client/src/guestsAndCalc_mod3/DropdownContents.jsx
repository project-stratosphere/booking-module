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
`;

const FeatureHolder = styled.div`
  display: flex;
  flex-direction: ${ props => ( ( props.button ) ? 'row' : 'column' ) };
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
  border: ${ props => ( ( props.number === 0 ) ? '1px solid rgb(172, 172, 172)' : '1px solid #007D8C' ) };
  class: 'btn-down';
`;

const ButtonUp = Button.extend`
  border: ${ props => ( ( props.number === 8 ) ? '1px solid rgb(172, 172, 172)' : '1px solid #007D8C' ) };
  class: 'btn-up';
`;

export default function DropdownContents( props ) {
  const list = [ 'adults', 'children', 'infants' ];
  const desc = [ 'maybe I should use gridz', 'Ages 2-12', 'Under 2' ];
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
          >-
          </ButtonDown>
          <div> {props[ toPlugIn ]} </div>
          <ButtonUp
            onClick={() => props.btnClick( propName, 1 )}
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
  adult: PropTypes.number,
  child: PropTypes.number,
  infant: PropTypes.number,
  btnClick: PropTypes.func,
};
DropdownContents.defaultProps = {
  adult: 0,
  child: 0,
  infant: 0,
  btnClick: () => null,
};
