import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CheckInCalendar from './CheckInCalendar';
import CheckOutCalendar from './CheckOutCalendar';
import arrow from '../images/arrow.png';

export const Holder = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 286px;
  border: 1px solid rgb(172, 172, 172);
  border-radius: 1%;
  padding: 20px;
  background-color: white;
`;

export const Arrow = styled.div`
  border-radius: 10%;
  content: url(${arrow});
  height: 20px;
  border: 1px solid rgb(172, 172, 172);
  border-radius: 10%;
  padding: 3px;
  transform: ${props => (props.left ? 'rotate(0.5turn)' : '')};
    &:active{
      background-color: #79CCCD;
    }
    &:hover {
      cursor: pointer;
    }
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 18px;
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

export default function Dropdown(props) {
  let calendar;
  let holderArrow;
  if (props.clicked === 1) {
    calendar = (<CheckInCalendar {...props} />);
    holderArrow = (
      <svg height="10" width="250" fill="rgb(172, 172, 172)" stroke="rgb(172, 172, 172)" position="absolute">
        <path d="M 15,25 35, 25 25, 0 Z" height="0px" position="absolute" />
      </svg>);
  } else if (props.clicked === -1) {
    calendar = (<CheckOutCalendar {...props} />);
    holderArrow = (
      <svg height="10" width="250" fill="rgb(172, 172, 172)" stroke="rgb(172, 172, 172)">
        <path d="M 0,25 35, 25 25, 15 Z" height="0px" />
      </svg>);
  }
  if (props.clicked === 1 || props.clicked === -1) {
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
            <div> {props.minStay} day minimum. </div>
            <div> Updated 2 days ago </div>
          </SectionThree>
        </Holder>
      </div>
    );
  }
  return null;
}

Dropdown.propTypes = {
  clicked: PropTypes.number,
  month: PropTypes.string,
  year: PropTypes.number,
  dateClick: PropTypes.func,
  // dates: PropTypes.arrayOf( PropTypes.shape( {
  //   date: PropTypes.date,
  // } ) ),

};
Dropdown.defaultProps = {
  clicked: 0,
  month: 'June',
  year: 2018,
  dateClick: () => null,
  // dates: [],
};
