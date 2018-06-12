import styled from 'styled-components';

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

function findBetweenStartAndMinStay(props, whatToReturn) {
  for (let i = 1; i < props.minStay - 1; i += 1) {
    if (props.day === props.startDate + i) {
      return whatToReturn;
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
    if (props.startDate && props.endDate) {
      findBetweenStartAndMinStay(props, 'black');
    }
    return props.date ? 'rgb(172,172,172)' : 'black';
  }};
  text-decoration: ${(props) => {
    if (props.startDate && props.endDate) {
      findBetweenStartAndMinStay(props, 'none');
    }
    return props.date ? 'line-through' : '';
  }};
  background-color: ${(props) => {
    if (props.week) { return ''; }
    if (props.startDate === props.day || props.endDate === props.day) {
      return '#00a699';
    }
    if (props.startDate && props.endDate) {
      for (let i = props.startDate; i < props.endDate; i += 1) {
        if (props.day === i) {
          return '#33dacd';
        }
      }
    }
    return 'white';
  }}
  &:hover:enabled{
    background-color: ${(props) => {
    if (props.startDate && !props.date) {
      return '#33dacd';
    }
    return '#F0F0F0';
  }}
    cursor: pointer;
  }
    &:hover:disabled{
      background-color: ${(props) => {
    if (props.startDate) {
      findBetweenStartAndMinStay(props, 'rgb(172,172,172)');
      return '33dacd';
    }
    return 'white';
  }}
    }
    &:active:enabled{
      background-color: #79CCCD;
    }
`;
