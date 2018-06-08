import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
  margin-top: 20px;
  border-style: hidden;
  border-collapse: collapse;
  `;

const Tr = styled.tr`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Td = styled.td`
  min-width: 27px;
  // border: 0.5px solid rgb(172, 172, 172);
  text-align: center;
`;

const months = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};
const days = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ];
export default function CheckInCalendar( props ) {
  const createDayArr = () => {
    const firstDayOfTheMonth = new Date( `${ props.month } 1, ${ props.year }` ).getDay();
    const daysInMonth = new Date( props.year, months[ props.month ], 0 ).getDate();

    const dayArr = [];
    for ( let i = 0; i < firstDayOfTheMonth; i += 1 ) {
      dayArr.push( '' );
    }
    for ( let i = 1; i < daysInMonth; i += 1 ) {
      dayArr.push( i );
    }
    return dayArr;
  };

  const weekDayNames = days.map( day => (
    <Td key={day}> {day} </Td>
  ) );

  const daysInMonth = createDayArr();
  const calendar = daysInMonth.map( day =>
    <Td key={day}> {day} </Td> );

  return (
    <Table>
      <thead>
        <Tr>
          {weekDayNames}
        </Tr>
      </thead>
      <tbody>
        <Tr>
          {calendar}
        </Tr>
      </tbody>
    </Table>
  );
}
