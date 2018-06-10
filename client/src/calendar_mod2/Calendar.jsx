import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Table, Tr, Button } from './CalendarStyling';
import { createDaysArr, findOccupiedDatesInMonth, onDateClick } from './CalendarLogic';

export default function Calendar(props) {
  const daysArr = createDaysArr({
    year: props.year,
    month: props.month,
  });

  let occupiedDates;
  if (props.clicked === 'checkIn') {
    occupiedDates = findOccupiedDatesInMonth({
      month: props.month,
      year: props.year,
      dates: props.dates,
    });
  } else if (props.clicked === 'checkOut') {
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
    let key = day;
    if (occupiedDates.includes(day) || day === '') {
      key = `${i}blank`;
      isOccupied = true;
    }
    return (
      <Button
        key={key}
        day={day}
        date={isOccupied}
        onClick={() => onDateClick({ day, props })}
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
  // setDate: PropTypes.func,
  // clearDates: PropTypes.func,
  // calendarChange: PropTypes.func,
  // arrowClick: PropTypes.func,
  clicked: PropTypes.string,
  // currDate: momentPropTypes.momentObj,
  month: PropTypes.string,
  year: PropTypes.number,
};

Calendar.defaultProps = {
  dates: [],
  minStay: 0,
  startDate: null,
  endDate: null,
  // setDate: () => null,
  // clearDates: () => null,
  // calendarChange: () => null,
  // arrowClick: () => null,
  clicked: '',
  // currDate: null,
  month: null,
  year: null,
};
