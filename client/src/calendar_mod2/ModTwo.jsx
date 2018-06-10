import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import Dropdown from './Dropdown';
import { onArrowClick, dateConverter } from './CalendarLogic';
import { Holder, InputHolder, Title, Arrow } from '../ModStylings';

export const Date = styled.div`
`;

export default class ModTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currDate: moment(),
      month: moment().format('MMMM-YYYY').split('-')[0],
      year: Number(moment().format('MMMM-YYYY').split('-')[1]),
    };
    this.onArrowClick = onArrowClick.bind(this);
  }

  render() {
    const startDate = dateConverter(this.state.currDate, this.props.startDate);
    const endDate = dateConverter(this.state.currDate, this.props.endDate);
    return (
      <Holder>
        <Title> Dates </Title>
        <InputHolder>
          <Date
            onClick={() => this.props.calendarChange('checkInClicked')}
          > {startDate || 'Check In'}
          </Date>
          <Arrow />
          <Date
            onClick={() => this.props.calendarChange('checkOutClicked')}
          > {endDate || 'Check Out'}
          </Date>
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
  minStay: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  setDate: PropTypes.func,
  clearDates: PropTypes.func,
  calendarChange: PropTypes.func,
};
ModTwo.defaultProps = {
  dates: [],
  minStay: 0,
  startDate: null,
  endDate: null,
  setDate: () => null,
  clearDates: () => null,
  calendarChange: () => null,
};
