import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GuestHolder = styled.div`
  display: flex;
  flex-direction: row;
`;

const GuestDetails = styled.div`
`;

const DownButton = styled.button`
`;

const UpButton = styled.button`
`;

export default function DropdownContents( props ) {
  DropdownContents.propTypes = {
    adults: PropTypes.number,
    childrens: PropTypes.number,
    infants: PropTypes.number,
    btnClick: PropTypes.func,
  };
  DropdownContents.defaultProps = {
    adults: 0,
    childrens: 0,
    infants: 0,
    btnClick: () => null,
  };

  const thingsToRender = [ 'adults', 'children', 'infants' ];
  const toRender = thingsToRender.map( thing =>
    ( <GuestHolder>
      <div> {thing} </div>
      <DownButton />
      <div> {props.adults} </div>
      <UpButton />
      </GuestHolder> ) );

  return (
    <div>
      {toRender}
    </div>

  );
}
