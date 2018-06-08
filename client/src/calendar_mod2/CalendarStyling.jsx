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
export const Button = styled.button`
border:none;
outline: none;
min-width: 40px;
min-height: 25px;
text-align: center;
padding-bottom: 5px;
font-size: 12px;
color: ${props => (props.date ? 'rgb(172,172,172)' : 'black')};
text-decoration: ${props => (props.date ? 'line-through' : '')};
background-color: ${(props) => {
    if (props.week) { return ''; }
    return props.startDate === props.day ? '#00a699' : 'white';
  }}
&:hover:enabled{
  background-color: #F0F0F0;
  cursor: pointer;
}
&:active:enabled{
  background-color: #79CCCD;
}
`;
