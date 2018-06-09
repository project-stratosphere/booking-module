import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Table, Tr, Button } from './CalendarStyling';
import { createDaysArr, findOccupiedDatesInMonth } from './CalendarLogic';

export default function Calendar(props) {
  const onDateClick = (day) => {
    if (props.clicked === 1) {
      if (props.endDate) {
        if (day > props.endDate || day + props.minStay > props.endDate) {
          props.clearDates();
        }
      }
      props.dateClick('startDate', day);
      props.calendarChange('checkOutClicked');
    } else if (props.clicked === -1) {
      props.dateClick('endDate', day);
      props.calendarChange();
    }
  };

  const daysArr = createDaysArr({
    year: props.year,
    month: props.month,
  });

  let occupiedDates;
  if (props.clicked === 1) {
    occupiedDates = findOccupiedDatesInMonth({
      month: props.month,
      year: props.year,
      dates: props.dates,
    });
  } else if (props.clicked === -1) {
    occupiedDates = findOccupiedDatesInMonth({
      startDate: props.startDate,
      month: props.month,
      year: props.year,
      minStay: props.minStay,
      dates: props.dates,
    });
  }

  const calendar = daysArr.map((day, i) => {
    let isOccupied = false;
    if (occupiedDates.includes(day) || day === '') {
      isOccupied = true;
    }
    return (
      <Button
        key={i}
        day={day}
        date={isOccupied}
        onClick={() => onDateClick(day)}
        minStay={props.minStay}
        startDate={props.startDate}
        endDate={props.endDate}
        disabled={isOccupied || (props.startDate === day)}
      >
        {day}
      </Button>
    );
  });

  const weekDayNames = moment.weekdaysMin().map(day => (
    <Button week key={day} disabled> {day} </Button>
  ));

  return (
    <Table>
      <thead>
        <Tr>
          <td>
            {weekDayNames}
          </td>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <td>
            {calendar}
          </td>
        </Tr>
      </tbody>
    </Table>
  );
}

Calendar.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.string),
  minStay: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  dateClick: PropTypes.func,
  clearDates: PropTypes.func,
  calendarChange: PropTypes.func,
  // arrowClick: PropTypes.func,
  clicked: PropTypes.number,
  // currDate: momentPropTypes.momentObj,
  month: PropTypes.string,
  year: PropTypes.number,
};

Calendar.defaultProps = {
  dates: [],
  minStay: 0,
  startDate: null,
  endDate: null,
  dateClick: () => null,
  clearDates: () => null,
  calendarChange: () => null,
  // arrowClick: () => null,
  clicked: 0,
  // currDate: null,
  month: null,
  year: null,
};
