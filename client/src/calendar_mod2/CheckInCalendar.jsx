import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

const Table = styled.table`
  margin-top: 20px;
  border-style: hidden;
  border-collapse: collapse;
  font-weight: bold;
  `;

const Tr = styled.tr`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Button = styled.button`
  border:none;
  outline: none;
  min-width: 40px;
  min-height: 25px;
  text-align: center;
  padding-bottom: 5px;
  font-size: 12px;
  color: ${props => (props.date ? 'rgb(172,172,172)' : 'black')};
  text-decoration: ${props => (props.date ? 'line-through' : '')};
  background-color: ${(props) => {
    if (props.week) { return ''; }
    return props.bgColorStart === props.day ? 'green' : 'white';
  }}
  &:hover:enabled{
    background-color: #F0F0F0;
    cursor: pointer;
  }
  &:active:enabled{
    background-color: #79CCCD;
  }
`;
export default class CheckInCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupiedDates: null,
      daysInMonthArr: null,
    };
  }

  componentDidMount = () => {
    this.findOccupiedDatesInMonth();
    this.createDaysArr();
  }

  createDaysArr = () => {
    const firstDayOfTheMonth = moment().year(this.props.year).month(this.props.month).date(1)
      .day();
    const daysInMonth = moment(`${this.props.year}-${this.props.month}`, 'YYYY-MMM').daysInMonth();

    const daysInMonthArr = [];
    for (let i = 0; i < firstDayOfTheMonth; i += 1) {
      daysInMonthArr.push('');
    }
    for (let i = 1; i < daysInMonth; i += 1) {
      daysInMonthArr.push(i);
    }
    this.setState({
      daysInMonthArr,
    });
  };

  findOccupiedDatesInMonth = () => {
    const targetDates = [];
    this.props.dates.forEach((date) => {
      const day = moment.utc(date).format('DD');
      const month = moment.utc(date).format('MMMM');
      const year = moment.utc(date).format('YYYY');
      if (month === this.props.month && Number(year) === this.props.year) {
        targetDates.push(Number(day));
      }
    });
    this.setState({
      occupiedDates: targetDates,
    });
  };

  render() {
    console.log(this.props);
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
            day={day}
            key={i}
            date={isOccupied}
            disabled={isOccupied || (day === this.props.startDate)}
            onClick={() => this.props.dateClick('startDate', day)}
            bgColorStart={this.props.startDate}
            bgColorEnd={this.props.endDate}
          > {day}
          </Button>
        );
      });

      return (
        <Table>
          <thead>
            <tr>
              <td>
                {weekDayNames}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {calendar}
              </td>
            </tr>
          </tbody>
        </Table>
      );
    }
    return null;
  }
}

CheckInCalendar.propTypes = {
  dates: PropTypes.array,
  month: PropTypes.string,
  year: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  dateClick: PropTypes.func,

};
CheckInCalendar.defaultProps = {
  dates: [],
  month: null,
  year: null,
  startDate: null,
  endDate: null,
  dateClick: () => null,
};
