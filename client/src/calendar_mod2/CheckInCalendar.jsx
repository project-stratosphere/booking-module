import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

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
  border-collapse: collapse;
  // border: 1px solid rgb(172, 172, 172);
  min-width: 40px;
  text-align: center;
  padding-bottom: 5px
`;

const days = moment.weekdaysMin();
export default function CheckInCalendar( props ) {
  const createDayArr = () => {
    const firstDayOfTheMonth = moment().year( props.year ).month( props.month ).date( 1 )
      .day();
    const daysInMonth = moment( `${ props.year }-${ props.month }`, 'YYYY-MMM' ).daysInMonth();

    const dayArr = [];
    for ( let i = 0; i < firstDayOfTheMonth; i += 1 ) {
      dayArr.push( '' );
    }
    for ( let i = 1; i < daysInMonth; i += 1 ) {
      dayArr.push( i );
    }
    return dayArr;
  };

  const findDatesInMonth = () => {
    const targetDates = [];
    props.dates.forEach( ( date ) => {
      const day = moment.utc( date ).format( 'DD' );
      const month = moment.utc( date ).format( 'MMMM' );
      const year = moment.utc( date ).format( 'YYYY' );
      if ( month === props.month && year === props.year ) {
        targetDates.push( day );
      }
    } );
    return targetDates;
  };

  const weekDayNames = days.map( day => (
    <Td key={day}> {day} </Td>
  ) );
  const daysInMonth = createDayArr();
  const calendar = daysInMonth.map( ( day, i ) =>
    <Td key={i}> {day} </Td> );

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
