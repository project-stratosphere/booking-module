import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Dropdown from './Dropdown';
import { Holder, InputHolder, Title, Arrow, Contents } from '../ModStylings';

export default class ModTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currDate: moment(),
      month: moment().format('MMMM-YYYY').split('-')[0],
      year: Number(moment().format('MMMM-YYYY').split('-')[1]),
    };
  }

  onArrowClick = (date, increment) => {
    const next = date.add(increment, 'month');
    const month = next.format('MMMM-YYYY').split('-')[0];
    const year = Number(next.format('MMMM-YYYY').split('-')[1]);
    this.setState({
      currDate: next,
      month,
      year,
    });
    this.props.clearDates();
  }

  dateConverter = (date, day) => {
    if (day !== null) {
      const currDate = date.format('MM-YYYY').split('-');
      const currMonth = currDate[0];
      const currYear = Number(currDate[1]);
      return `${currMonth}/${day}/${currYear}`;
    }
    return null;
  }

  render() {
    const startDate = this.dateConverter(this.state.currDate, this.props.startDate);
    const endDate = this.dateConverter(this.state.currDate, this.props.endDate);
    return (
      <Holder>
        <Title> Dates </Title>
        <InputHolder>
          <Contents
            clicked={this.props.clicked}
            checkIn
            onClick={() => this.props.calendarChange('checkInClicked')}
          > {startDate || 'Check In'}
          </Contents>
          <Arrow />
          <Contents
            clicked={this.props.clicked}
            checkOut
            onClick={() => this.props.calendarChange('checkOutClicked')}
          > {endDate || 'Check Out'}
          </Contents>
        </InputHolder>
        <Dropdown
          arrowClick={this.onArrowClick}
          {...this.props}
          {...this.state}
        />
      </Holder>
    );
  }
}

ModTwo.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.string),
  clicked: PropTypes.string,
  minStay: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  setDate: PropTypes.func,
  clearDates: PropTypes.func,
  calendarChange: PropTypes.func,
};
ModTwo.defaultProps = {
  dates: [],
  clicked: null,
  minStay: 0,
  startDate: null,
  endDate: null,
  setDate: () => null,
  clearDates: () => null,
  calendarChange: () => null,
};
