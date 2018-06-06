import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Holder = styled.div`
  display: flex;
  flex-direction: column;
`;

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

export default function Dropdown( props ) {
  Dropdown.propTypes = {
    clicked: PropTypes.bool,
    adults: PropTypes.number,
    childrens: PropTypes.number,
    infants: PropTypes.number,
  };
  Dropdown.defaultProps = {
    clicked: false,
    adults: 0,
    childrens: 0,
    infants: 0,
  };
  if ( props.clicked ) {
    return (
      <Holder>
        <GuestHolder>
          <div> Adults </div>
          <DownButton />
          <div> {props.adults} </div>
          <UpButton />
        </GuestHolder>
        <GuestHolder>
          <div> Children </div>
          <GuestDetails> Ages 2-12 </GuestDetails>
          <DownButton />
          <div> {props.childrens} </div>
          <UpButton />
        </GuestHolder>
        <GuestHolder>
          <div> Infants </div>
          <GuestDetails> Under 2</GuestDetails>
          <DownButton />
          <div> {props.infants} </div>
          <UpButton />
        </GuestHolder>
      </Holder>
    );
  }
  return null;
}
