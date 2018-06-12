import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import Calendar from './Calendar';
import { Triangle, Arrow, SectionOne, SectionTwo, SectionThree } from './DropdownStyling';
import { DropdownHolder, Close } from '../ModStylings';

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
