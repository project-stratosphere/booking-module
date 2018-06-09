import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Table, Tr, Button } from './CalendarStyling';
import { createDaysArr, findOccupiedDatesInMonth } from './CalendarLogic';

export default class CheckInCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupiedDates: null,
      daysInMonthArr: null,
    };
    this.createDaysArr = createDaysArr.bind(this);
    this.findOccupiedDatesInMonth = findOccupiedDatesInMonth.bind(this);
  }

  componentWillMount = () => {
    this.findOccupiedDatesInMonth();
    this.createDaysArr();
  }

  onStartDateClick = (day) => {
    this.props.dateClick('startDate', day);
    this.props.calendarChange('checkOutClicked');
  }

  render() {
    const weekDayNames = moment.weekdaysMin().map(day => (
      <Button week key={day} disabled> {day} </Button>
    ));

    const calendar = this.state.daysInMonthArr.map((day, i) => {
      let isOccupied = false;
      if (this.state.occupiedDates.includes(day) || day === '') {
        isOccupied = true;
      }
      return (
        <Button
          key={i}
          day={day}
          date={isOccupied}
          onClick={() => this.onStartDateClick(day)}
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          disabled={isOccupied || (day === this.props.startDate)}
        > {day}
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
}

CheckInCalendar.propTypes = {
  dates: PropTypes.array,
  month: PropTypes.string,
  year: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  dateClick: PropTypes.func,
  calendarChange: PropTypes.func,

};
CheckInCalendar.defaultProps = {
  dates: [],
  month: null,
  year: null,
  startDate: null,
  endDate: null,
  dateClick: () => null,
  calendarChange: () => null,
};
