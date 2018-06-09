import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Table, Tr, Button } from './CalendarStyling';
import { createDaysArr, findOccupiedDatesInMonth } from './CalendarLogic';

export default class CheckOutCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupiedDates: null,
      daysInMonthArr: null,
    };
    this.createDaysArr = createDaysArr.bind(this);
    this.findOccupiedDatesInMonth = findOccupiedDatesInMonth.bind(this);
  }

  componentDidMount = () => {
    this.findOccupiedDatesInMonth(this.props.startDate);
    this.createDaysArr();
  }

  onEndDateClick = (day) => {
    this.props.dateClick('endDate', day);
    this.props.calendarChange();
  }

  render() {
    if (this.state.daysInMonthArr) {
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
            onClick={() => this.onEndDateClick(day)}
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
    return null;
  }
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
