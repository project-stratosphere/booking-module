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
    if (props.calendar === 'checkOut') {
      if (props.startDate && !props.endDate) {
        for (let i = 1; i < props.minStay - 1; i += 1) {
          if (props.day === props.startDate + i) {
            return abnbGrey;
          }
        }
      }
    }
    return props.date ? abnbGrey : 'black';
  }};
  text-decoration: ${props => (props.date ? 'line-through' : '')
};
  background-color: ${(props) => {
    if (props.week) { return ''; }
    if (props.startDate === props.day || props.endDate === props.day) {
      return abnbCalendarBlue;
    }
    if (props.startDate && props.endDate) {
      for (let i = props.startDate; i < props.endDate; i += 1) {
        if (props.day === i) {
          return abnbBlue;
        }
      }
    }
    if (props.calendar === 'checkOut') {
      if (props.hoveredDate && props.startDate) {
        for (let i = props.startDate + 1; i <= props.hoveredDate; i += 1) {
          if (props.day === i) {
            return abnbLightBlue;
          }
        }
      }
    }
    return 'white';
  }}
  &:hover:enabled{
    background-color: ${(props) => {
    if (props.calendar === 'checkOut') {
      if (props.startDate && !props.endDate) {
        for (let i = 1; i < props.minStay - 1; i += 1) {
          if (props.day === props.startDate + i) {
            return abnbLightGrey;
          }
        }
      }
    }
    return abnbLightBlue;
  }}
    cursor: pointer;
  }
`;
