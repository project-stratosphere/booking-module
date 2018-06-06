import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GuestHolder = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const GuestDetails = styled.div`
`;

const Button = styled.button`
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

  const thingsToRender = [ 'adults', 'children', 'infants' ];
  const toRender = thingsToRender.map( thing =>
    ( <GuestHolder key={thing}>
      <div> {thing} </div>
      <Button> - </Button>
      <div> {props[ thing ]} </div>
      <Button> + </Button>
      </GuestHolder> ) );

  return (
    <div>
      {toRender}
    </div>

  );
}
