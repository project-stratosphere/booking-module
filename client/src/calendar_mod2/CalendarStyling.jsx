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
    if (props.startDate) {
      for (let i = 1; i < props.minStay - 1; i += 1) {
        if (props.day === props.startDate + i) {
          return abnbGrey;
        }
      }
    }
    return props.date ? abnbGrey : 'black';
  }};
  text-decoration: ${(props) => {
    if (props.startDate && props.endDate) {
      for (let i = 1; i < props.minStay - 1; i += 1) {
        if (props.day === props.startDate + i) {
          return 'none';
        }
      }
    }
    return props.date ? 'line-through' : '';
  }};
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
    if (props.hoveredDate && props.startDate) {
      for (let i = props.startDate + 1; i <= props.hoveredDate; i += 1) {
        if (props.day === i) {
          console.log(props.hoveredDate);
          return abnbLightBlue;
        }
      }
    }
    return 'white';
  }}
  &:hover:enabled{
    background-color: ${(props) => {
    if (props.hoveredDate && props.startDate) {
      for (let i = props.startDate + 1; i <= props.hoveredDate; i += 1) {
        if (props.day === i) {
          return abnbLightBlue;
        }
      }
    }
    if (props.startDate && !props.date) {
      return abnbLightBlue;
    }
    return abnbLightGrey;
  }}
    cursor: pointer;
  }
  &:hover:disabled{
      background-color: ${(props) => {
    if (props.startDate) {
      for (let i = 1; i < props.minStay - 1; i += 1) {
        if (props.day === props.startDate + i) {
          return abnbGrey;
        }
      }
      if (props.day === props.startDate) {
        return abnbLightBlue;
      }
    }
    return 'white';
  }}
  }
  &:active:enabled{
      background-color: ${abnbLightBlue};
  }
`;
