import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import arrow from '../images/arrow.png';
import Dropdown from './Dropdown';
import { calendarChange, onArrowClick, dateConverter } from './CalendarLogic';

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  padding-top: 10px;
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const DateHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 22px;
  border: 1px solid rgb(172, 172, 172);
  padding: 5px;
`;

export const Date = styled.div`
`;

export const Arrow = styled.div`
  content: url(${arrow});
  height: 17px;
`;

export default class ModTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      currDate: moment(),
      month: moment().format('MMMM-YYYY').split('-')[0],
      year: Number(moment().format('MMMM-YYYY').split('-')[1]),
    };
    this.calendarChange = calendarChange.bind(this);
    this.onArrowClick = onArrowClick.bind(this);
  }

  render() {
    const startDate = dateConverter(this.state.currDate, this.props.startDate);
    const endDate = dateConverter(this.state.currDate, this.props.endDate);
    return (
      <Holder>
        <Title> Dates </Title>
        <DateHolder>
          <Date
            onClick={() => this.calendarChange('checkInClicked')}
          > {startDate || 'Check In'}
          </Date>
          <Arrow />
          <Date
            onClick={() => this.calendarChange('checkOutClicked')}
          > {endDate || 'Check Out'}
          </Date>
        </DateHolder>
        <Dropdown
          calendarChange={this.calendarChange}
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
  minStay: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  dateClick: PropTypes.func,
  clearDates: PropTypes.func,
};
ModTwo.defaultProps = {
  dates: [],
  minStay: 0,
  startDate: null,
  endDate: null,
  dateClick: () => null,
  clearDates: () => null,
};
