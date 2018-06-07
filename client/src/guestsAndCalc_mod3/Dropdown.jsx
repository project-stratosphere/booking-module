import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DropdownContents from './DropdownContents';

export const Holder = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 230px;
  border: 1px solid rgb(172, 172, 172);
  margin-top: 50px;
  padding: 10px;
  padding-top: 0px;
  background-color: white;
`;

export const Details = styled.div`
  font-size: 12px;
  margin-top: 12px;
`;

export const Close = styled.button`
  margin-top: 8px;
  border: none;
  align-self: flex-end;
  font-size: 14px;
  color: #007D8C;
  &:hover{
    text-decoration: underline;
    outline: none;
  }
  &:active{
    color: #FD5C63;
  }
`;

export default function Dropdown( props ) {
  if ( props.clicked ) {
    return (
      <Holder>
        <DropdownContents
          {...props}
        />
        <Details>
          {props.maxGuests } guests maximum.
          Infants don’t count toward the number of guests.
        </Details>
        <Close onClick={props.close}> Close </Close>
      </Holder>
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
