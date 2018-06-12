import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Table, Tr, Td, Button } from './CalendarStyling';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredDate: null,
    };
  }

  onDateClick = (day) => {
    if (this.props.clicked === 'checkIn') {
      if (this.props.endDate) {
        if (day > this.props.endDate
          || day + (this.props.minStay - 1) > this.props.endDate
          || day < this.props.startDate) {
          this.props.clearDates();
        }
        this.setState({
          hoveredDate: null,
        });
      }
      this.props.setDate('startDate', day);
      this.props.calendarChange('checkOutClicked');
    } else if (this.props.clicked === 'checkOut') {
      const disabled = [];
      for (let i = 1; i < this.props.minStay - 1; i += 1) {
        disabled.push(this.props.startDate + i);
      }
      if (!disabled.includes(day)) {
        if (!this.props.startDate) {
          this.props.setDate('endDate', day);
          return this.props.calendarChange('checkInClicked');
        }
        this.props.setDate('endDate', day);
        this.props.calendarChange();
      }
      return null;
    }
    return null;
  };

  createDaysArr = ({ month, year }) => {
    const firstDayOfTheMonth = moment(`${year}-${month}`, 'YYYY-MMM').date(1).day();
    const daysInMonth = moment(`${year}-${month}`, 'YYYY-MMM').daysInMonth();

    const daysInMonthArr = [];
    for (let i = 0; i < firstDayOfTheMonth; i += 1) {
      daysInMonthArr.push('');
    }
    for (let i = 1; i <= daysInMonth; i += 1) {
      daysInMonthArr.push(i);
    }
    return daysInMonthArr;
  }

  findOccupiedDatesInMonth = ({
    startDate, month, year, dates,
  }) => {
    const targetDates = [];
    dates.forEach((date) => {
      const dateDay = Number(moment.utc(date).format('DD'));
      const dateMonth = moment.utc(date).format('MMMM');
      const dateYear = Number(moment.utc(date).format('YYYY'));
      if (dateMonth === month && dateYear === year) {
        targetDates.push(dateDay);
      }
    });
    if (startDate) {
      // for getting the days before the start date
      for (let i = 1; i < startDate; i += 1) {
        targetDates.push(i);
      }
      // for blocking off the days after an occupied date
      const daysInMonth = moment(`${year}-${month}`, 'YYYY-MMM').daysInMonth();
      const toBlockOut = targetDates
        .sort((a, b) => a - b)
        .findIndex(num => num > startDate);
      for (let i = targetDates[toBlockOut]; i <= daysInMonth; i += 1) {
        targetDates.push(i);
      }
    }
    return targetDates;
  }

  createCalendar = () => {
    // find the days in the month and create an array
    const daysArr = this.createDaysArr({
      year: this.props.year,
      month: this.props.month,
    });

    // find the occupied dates and create an array
    let occupiedDates;
    if (this.props.clicked === 'checkIn') {
      occupiedDates = this.findOccupiedDatesInMonth({
        month: this.props.month,
        year: this.props.year,
        dates: this.props.dates,
      });
    } else if (this.props.clicked === 'checkOut') {
      occupiedDates = this.findOccupiedDatesInMonth({
        startDate: this.props.startDate,
        month: this.props.month,
        year: this.props.year,
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
          calendar={this.props.clicked}
          onClick={() => this.onDateClick(day)}
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
    const weekDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
      <Td key={day}><div> {day} </div></Td>
    ));
    const calendar = this.createCalendar();

    return (
      <Table>
        <thead>
          <Tr>
            {weekDayNames}
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
  setDate: PropTypes.func,
  clearDates: PropTypes.func,
  calendarChange: PropTypes.func,
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
  setDate: () => null,
  clearDates: () => null,
  calendarChange: () => null,
  // arrowClick: () => null,
  clicked: '',
  // currDate: null,
  month: null,
  year: null,
};
