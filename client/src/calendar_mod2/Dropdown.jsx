import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CheckInCalendar from './CheckInCalendar';
import CheckOutCalendar from './CheckOutCalendar';
import arrow from '../images/arrow.png';

export const Holder = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid rgb(172, 172, 172);
  padding: 20px;
  padding-top: 0px;
  background-color: white;
`;

export const Arrow = styled.button`
  border-radius: 10%;
  background-image: url(${ arrow });
  outline: none;
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const SectionTwo = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionThree = styled.div`
  font-size: 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export default function Dropdown( props ) {
  let calendar;
  let holderArrow;
  if ( props.clicked === 1 ) {
    calendar = ( <CheckInCalendar
      dates={props.dates}
      month={props.month}
      year={props.year}
    /> );
    holderArrow = (
      <svg height="10" width="250" fill="rgb(172, 172, 172)" stroke="rgb(172, 172, 172)">
        <path d="M 15,25 35, 25 25, 0 Z" height="0px" />
      </svg> );
  } else if ( props.clicked === -1 ) {
    calendar = ( <CheckOutCalendar
      dates={props.dates}
      month={props.month}
      year={props.year}
    /> );
    holderArrow = (
      <svg height="10" width="250" fill="rgb(172, 172, 172)" stroke="rgb(172, 172, 172)">
        <path d="M 0,25 35, 25 25, 15 Z" height="0px" />
      </svg> );
  }
  if ( props.clicked === 1 || props.clicked === -1 ) {
    return (
      <div>
        {holderArrow}
        <Holder>
          <SectionOne>
            <Arrow left />
            <div> {props.month} {props.year} </div>
            <Arrow />
          </SectionOne>
          <SectionTwo>
            {calendar}
          </SectionTwo>
          <SectionThree>
            <div> Minimum stay varies </div>
            <div> Updated 2 days ago </div>
          </SectionThree>
        </Holder>
      </div>
    );
  }
  return null;
}

Dropdown.propTypes = {
  checkInClicked: PropTypes.bool,
  checkOutClicked: PropTypes.bool,
  month: PropTypes.string,
  year: PropTypes.string,
  // dates: PropTypes.arrayOf( PropTypes.shape( {
  //   date: PropTypes.date,
  // } ) ),

};
Dropdown.defaultProps = {
  checkInClicked: false,
  checkOutClicked: false,
  month: 'June',
  year: '2018',
  // dates: [],
};
