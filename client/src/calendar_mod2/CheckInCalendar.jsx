import React from 'react';
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
  &:hover:enabled{
    background-color: rgb(172, 172, 172);
  }
  &:active:enabled{
    background-color: #007D8C;
  }
`;

export default function CheckInCalendar(props) {
  const createDayArr = () => {
    const firstDayOfTheMonth = moment().year(props.year).month(props.month).date(1)
      .day();
    const daysInMonth = moment(`${props.year}-${props.month}`, 'YYYY-MMM').daysInMonth();

    const dayArr = [];
    for (let i = 0; i < firstDayOfTheMonth; i += 1) {
      dayArr.push('');
    }
    for (let i = 1; i < daysInMonth; i += 1) {
      dayArr.push(i);
    }
    return dayArr;
  };

  const findOccupiedDatesInMonth = () => {
    const targetDates = [];
    props.dates.forEach((date) => {
      const day = moment.utc(date).format('DD');
      const month = moment.utc(date).format('MMMM');
      const year = moment.utc(date).format('YYYY');
      if (month === props.month && Number(year) === props.year) {
        targetDates.push(Number(day));
      }
    });
    return targetDates;
  };
  const occupiedDates = findOccupiedDatesInMonth();

  const weekDayNames = moment.weekdaysMin().map(day => (
    <Button key={day} disabled> {day} </Button>
  ));
  const calendar = createDayArr().map((day, i) => {
    let isOccupied = false;
    if (occupiedDates.includes(day) || day === '') {
      isOccupied = true;
    }
    return (
      <Button key={i} date={isOccupied} disabled={isOccupied}> {day} </Button>
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

CheckInCalendar.propTypes = {
  dates: PropTypes.array,
  month: PropTypes.string,
  year: PropTypes.number,

};
CheckInCalendar.defaultProps = {
  dates: [],
  month: null,
  year: null,
};
