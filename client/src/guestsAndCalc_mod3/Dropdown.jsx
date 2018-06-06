import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DropdownContents from './DropdownContents';

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  border: 1px solid rgb(172, 172, 172);
  padding: 10px;
  padding-top: 0px;
`;

const Details = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

export default function Dropdown( props ) {
  Dropdown.propTypes = {
    clicked: PropTypes.bool,
    maxGuests: PropTypes.number,
    adult: PropTypes.number,
    child: PropTypes.number,
    infant: PropTypes.number,
    btnClick: PropTypes.func,
  };
  Dropdown.defaultProps = {
    clicked: false,
    maxGuests: 0,
    adult: 0,
    child: 0,
    infant: 0,
    btnClick: () => null,
  };
  if ( props.clicked ) {
    console.log( 'I was clicked!' );
    return (
      <Holder>
        <DropdownContents
          adult={props.adult}
          child={props.child}
          infant={props.infant}
          btnClick={props.btnClick}
        />
        <Details> {props.maxGuests } guests maximum. Infants don't count toward the number of guests. </Details>
      </Holder>
    );
  }
  return null;
}
