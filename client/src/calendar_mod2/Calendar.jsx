import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Table, Tr, Button } from './CalendarStyling';
import { createDaysArr, findOccupiedDatesInMonth } from './CalendarLogic';

export default function CheckOutCalendar(props) {
  const onDateClick = (day) => {
    if (props.clicked === 1) {
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
  const weekDayNames = moment.weekdaysMin().map(day => (
    <Button week key={day} disabled> {day} </Button>
  ));

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
        startDate={props.startDate}
        endDate={props.endDate}
        disabled={isOccupied || (day === props.startDate)}
      >
        {day}
      </Button>
    );
  });

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

CheckOutCalendar.propTypes = {
  dates: PropTypes.array,
  month: PropTypes.string,
  year: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  dateClick: PropTypes.func,
  calendarChange: PropTypes.func,

};
CheckOutCalendar.defaultProps = {
  dates: [],
  month: null,
  year: null,
  startDate: null,
  endDate: null,
  dateClick: () => null,
  calendarChange: () => null,
};
