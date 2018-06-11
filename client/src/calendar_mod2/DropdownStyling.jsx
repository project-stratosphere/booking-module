import styled from 'styled-components';
import arrow from '../images/arrow.png';
import { abnbGrey, abnbLightBlue } from '../ModStylings';

export const Arrow = styled.div`
  border-radius: 10%;
  content: url(${arrow});
  height: 20px;
  border: 1px solid ${abnbGrey};
  border-radius: 10%;
  padding: 3px;
  transform: ${props => (props.left ? 'rotate(0.5turn)' : '')};
    &:active{
      background-color: ${abnbLightBlue};
    }
    &:hover {
      cursor: pointer;
    }
`;

export const Triangle = styled.div`
    border-color: #ffffff #ffffff #acacac #ffffff;
    border-style: solid;
    border-width: 0px 8px 12px 8px;
    height: 5px;
    width: 0px;
    margin-left: ${props => ((props.left === 'checkIn') ? '20px' : '290px')}
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const SectionTwo = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionThree = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  font-size: 12px;
`;
