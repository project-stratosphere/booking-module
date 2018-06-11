import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Table, Tr, Button } from './CalendarStyling';
import { createDaysArr, findOccupiedDatesInMonth, onDateClick } from './CalendarLogic';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredDate: null,
    };
  }

  createCalendar = () => {
    // find the days in the month and create an array
    const daysArr = createDaysArr({
      year: this.props.year,
      month: this.props.month,
    });

    // find the occupied dates and create an array
    let occupiedDates;
    if (this.props.clicked === 'checkIn') {
      occupiedDates = findOccupiedDatesInMonth({
        month: this.props.month,
        year: this.props.year,
        dates: this.props.dates,
      });
    } else if (this.props.clicked === 'checkOut') {
      occupiedDates = findOccupiedDatesInMonth({
        startDate: this.props.startDate,
        month: this.props.month,
        year: this.props.year,
        minStay: this.props.minStay,
        dates: this.props.dates,
      });
    }

    // create the calendar
    return daysArr.map((day, i) => {
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
          onClick={() => onDateClick({ day, props: this.props })}
          onFocus={() => null}
          onMouseOver={() => this.setState({ hoveredDate: day })}
          onMouseLeave={() => this.setState({ hoveredDate: null })}
          hoveredDate={this.state.hoveredDate}
          minStay={this.props.minStay}
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          disabled={isOccupied || (this.props.startDate === day)}
        >
          {day}
        </Button>
      );
    });
  }

  render() {
    const weekDayNames = moment.weekdaysMin().map(day => (
      <Button week key={day} disabled> {day} </Button>
    ));
    const calendar = this.createCalendar();

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
