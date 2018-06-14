import styled, { injectGlobal } from 'styled-components';
import { abnbGrey, abnbRed } from './ModStylings';

injectGlobal([`
  html, body{
    height: 100%;
    width: 100%
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`]);

export const Holder = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 328px;  
  height: ${props => ((props.startDate && props.endDate) ? '400px' : '300px')};
  border: 1px solid ${abnbGrey};
  font-family: Roboto, sans-serif;
  padding: 24px;
`;

export const Button = styled.button`
  width: inherit;
  margin-top: 20px;
  height: 40px;
  border-radius: 7px;
  outline: none;
  background-color: ${abnbRed};
  font-weight: bold;
  color: white;
`;

export const Details = styled.div`
  font-size: 12px;
  font-weight: bold;
  align-self: center;
  margin-top: 7px;
`;
