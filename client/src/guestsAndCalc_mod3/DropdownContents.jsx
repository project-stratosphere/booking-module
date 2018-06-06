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

const ButtonHolder = styled.div`
  display: flex;  
  flex-direction: row;
`;

const FeatureHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  margin-left: 7px;
  margin-right: 7px;
  outline: none;
  border: 1px solid #007D8C;
  &:active{
    background-color: #007D8C;
  }
`;

export default function DropdownContents( props ) {
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

  function clickHandler( event ) {
    console.log( event.target );
    this.btnClick();
  }

  const list = [ 'Adults', 'Children', 'Infants' ];
  const desc = [ '\n', 'Ages 2-12', 'Under 2' ];
  const toRender = list.map( ( propName, index ) => {
    const toPlugIn = propName.replace( /s|ren/g, '' );
    return (
      <Holder key={propName}>
        <FeatureHolder>
          <div> {propName} </div>
          <GuestDetails> {desc[ index ]} </GuestDetails>
        </FeatureHolder>
        <ButtonHolder>
          <Button> - </Button>
          <div> {props[ toPlugIn ]} </div>
          <Button> + </Button>
        </ButtonHolder>
      </Holder>
    );
  } );

  return (
    <div>
      {toRender}
    </div>

  );
}
