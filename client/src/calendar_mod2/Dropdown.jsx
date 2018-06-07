import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Calendar from './Calendar';
import arrow from '../images/arrow.png';

export const Holder = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 230px;
  border: 1px solid rgb(172, 172, 172);
  padding: 10px;
  padding-top: 0px;
  background-color: white;
`;
export const Details = styled.div`
  font-size: 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
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

export default function Dropdown( props ) {
  if ( props.checkInClicked ) {
    return (
      <div>
        <svg height="10" width="250" fill="rgb(172, 172, 172)" stroke="rgb(172, 172, 172)">
          <path d="M 15,25 35, 25 25, 0 Z" height="0px" />
        </svg>
        <Holder>
          <SectionOne>
            <Arrow left />
            <div> {props.month} {props.year} </div>
            <Arrow />
          </SectionOne>
          <Calendar />
          <Details>
            <div> Minimum stay varies </div>
            <div> Updated 2 days ago </div>
          </Details>
        </Holder>
      </div>
    );
  } else if ( props.checkOutClicked ) {
    return (
      <Holder>
        <SectionOne>
          <Arrow left />
          <div> Month Year </div>
          <Arrow />
        </SectionOne>
        <Calendar
          dates={props.dates}
          month={props.month}
          year={props.year}
        />
        <Details>
          <div> Minimum stay varies </div>
          <div> Updated 2 days ago </div>
        </Details>
      </Holder>
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
