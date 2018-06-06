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
  id: props.id;
  name: props.name;
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

  const clickHandler = ( event ) => {
    props.btnClick( event.target.id, event.target.name );
  };

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
        <FeatureHolder button>
          <Button
            onClick={clickHandler}
            id="down"
            name={propName}
          >-
          </Button>
          <div> {props[ toPlugIn ]} </div>
          <Button
            onClick={clickHandler}
            id="up"
            name={propName}
          >+
          </Button>
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
