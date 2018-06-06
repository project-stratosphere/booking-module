import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DropdownContents from './DropdownContents';

const Holder = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Dropdown( props ) {
  Dropdown.propTypes = {
    clicked: PropTypes.bool,
    adults: PropTypes.number,
    childrens: PropTypes.number,
    infants: PropTypes.number,
    btnClick: PropTypes.func,
  };
  Dropdown.defaultProps = {
    clicked: false,
    adults: 0,
    childrens: 0,
    infants: 0,
    btnClick: () => null,
  };
  if ( props.clicked ) {
    console.log( 'I was clicked!' );
    return (
      <Holder>
        <DropdownContents
          adults={props.adults}
          childrens={props.childrens}
          infants={props.infants}
          btnClick={props.btnClick}
        />
      </Holder>
    );
  }
  return null;
}
