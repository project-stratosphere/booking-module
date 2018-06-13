import styled from 'styled-components';
import { abnbLightGrey, abnbGrey, abnbLightBlue, abnbBlue, abnbCalendarBlue } from '../ModStylings';

export const Table = styled.table`
  margin-top: 20px;
  border-style: hidden;
  border-collapse: collapse;
  font-weight: bold;
`;

export const Tr = styled.tr`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Td = styled.td`
  min-width: 38px;
  min-height: 25px;
  font-size: 13px;
  text-align: center;
`;

function startThruMinStay({
  day, minStay, startDate, calendar, toReturn,
}) {
  if (calendar === 'checkOut' && startDate) {
    for (let i = 1; i < minStay - 1; i += 1) {
      if (day === startDate + i) {
        return toReturn;
      }
    }
  }
}

function startThruEndOrHovered({
  startDate, endDate, hoveredDate, day, toReturn,
}) {
  let plug;
  if (endDate) {
    plug = endDate;
  } else {
    plug = hoveredDate;
  }
  if (startDate && plug) {
    if (day > startDate && day < plug) {
      return toReturn;
    }
  }
}

export const Button = styled.button`
  border:none;
  outline: none;
  min-width: 40px;
  min-height: 25px;
  text-align: center;
  padding-bottom: 5px;
  font-size: 12px;
  color: ${(props) => {
    if (props.day === props.startDate || props.day === props.endDate) { return 'white'; }
    const color = startThruMinStay({
      day: props.day,
      minStay: props.minStay,
      startDate: props.startDate,
      endDate: props.endDate,
      calendar: props.calendar,
      toReturn: abnbGrey,
    });
    if (color) { return color; }
    return props.date ? abnbGrey : 'black';
  }};
  text-decoration: ${props => (props.date ? 'line-through' : '')};
  background-color: ${(props) => {
    if (props.week) { return ''; }
    if (props.startDate === props.day || props.endDate === props.day) {
      return abnbCalendarBlue;
    }
    let color = startThruEndOrHovered({
      startDate: props.startDate,
      endDate: props.endDate,
      day: props.day,
      toReturn: abnbBlue,
    });
    if (color) { return color; }
    if (props.calendar === 'checkOut') {
      color = startThruEndOrHovered({
        startDate: props.startDate,
        hoveredDate: props.hoveredDate,
        day: props.day,
        toReturn: abnbBlue,
      });
      if (color) { return color; }
    }
    return 'white';
  }}
  &:hover:enabled{
    background-color: ${(props) => {
    const color = startThruMinStay({
      day: props.day,
      minStay: props.minStay,
      startDate: props.startDate,
      endDate: props.endDate,
      calendar: props.calendar,
      toReturn: abnbLightGrey,
    });
    if (color) { return color; }
    return abnbLightBlue;
  }}
    cursor: ${(props) => {
    const pointer = startThruMinStay({
      day: props.day,
      minStay: props.minStay,
      startDate: props.startDate,
      endDate: props.endDate,
      calendar: props.calendar,
      toReturn: 'default',
    });
    if (pointer) {
      return pointer;
    }
    return 'pointer';
  }};
  }
`;
