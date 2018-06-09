import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import arrow from '../images/arrow.png';
import Dropdown from './Dropdown';
import { calendarChange } from './CalendarLogic';

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
      month: 'June',
      year: 2018,
    };
    this.calendarChange = calendarChange.bind(this);
  }

  render() {
    return (
      <Holder>
        <Title> Dates </Title>
        <DateHolder>
          <Date
            onClick={() => this.calendarChange('checkInClicked')}
          > {this.props.startDate || 'Check In'}
          </Date>
          <Arrow />
          <Date
            onClick={() => this.calendarChange('checkOutClicked')}
          > {this.props.endDate || 'Check Out'}
          </Date>
        </DateHolder>
        <Dropdown
          calendarChange={this.calendarChange}
          {...this.props}
          {...this.state}
        />
      </Holder>
    );
  }
}

ModTwo.propTypes = {
  dates: PropTypes.array,
  minstay: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  dateClick: PropTypes.func,
};
ModTwo.defaultProps = {
  dates: [],
  minstay: 0,
  startDate: null,
  endDate: null,
  dateClick: () => null,
};
