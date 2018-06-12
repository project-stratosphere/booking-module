import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import Calendar from './Calendar';
import arrow from '../images/arrow.png';
import { DropdownHolder, Close } from '../ModStylings';

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

export const Triangle = styled.div`
    border-color: #ffffff #ffffff #acacac #ffffff;
    border-style: solid;
    border-width: 0px 8px 12px 8px;
    height: 5px;
    width: 0px;
    margin-left: ${props => ((props.left === 'checkIn') ? '20px' : '290px')}
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
  if (props.clicked === 'checkIn' || props.clicked === 'checkOut') {
    return (
      <div>
        <Triangle left={props.clicked} />
        <DropdownHolder>
          <SectionOne>
            <Arrow left onClick={() => props.arrowClick(props.currDate, -1)} />
            <div> {props.month} {props.year} </div>
            <Arrow onClick={() => props.arrowClick(props.currDate, 1)} />
          </SectionOne>
          <SectionTwo>
            <Calendar {...props} />
          </SectionTwo>
          <SectionThree>
            <div> {props.minStay} day minimum. </div>
            <div> Updated 2 days ago </div>
          </SectionThree>
          <Close onClick={props.clearDates}> Clear Dates </Close>
        </DropdownHolder>
      </div>
    );
  }
  return null;
}

Dropdown.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.string),
  minStay: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  setDate: PropTypes.func,
  clearDates: PropTypes.func,
  calendarChange: PropTypes.func,
  arrowClick: PropTypes.func,
  clicked: PropTypes.string,
  currDate: momentPropTypes.momentObj,
  month: PropTypes.string,
  year: PropTypes.number,
};

Dropdown.defaultProps = {
  dates: [],
  minStay: 0,
  startDate: null,
  endDate: null,
  setDate: () => null,
  clearDates: () => null,
  calendarChange: () => null,
  arrowClick: () => null,
  clicked: '',
  currDate: null,
  month: null,
  year: null,
};
